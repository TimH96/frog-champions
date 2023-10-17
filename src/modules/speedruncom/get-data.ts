import SpeedrunApiResponse from './models/SpeedrunApiResponse'
import SpeedrunCategory from './models/SpeedrunCategory'
import SpeedrunLevel from './models/SpeedrunLevel'
import SpeedrunVariable from './models/SpeedrunVariable'
import SpeedrunLeaderboard from './models/SpeedrunLeaderboard'
import {
  fetchLevelCategories,
  fetchLevelBoard,
  fetchLevels,
  fetchLevelVariables,
  fetchLevelBoardWithVariables
} from './wrapper'
import {
  ARB_RUN_VALUE,
  Categories,
  ChapterNames,
  COLLECTIBLES_VARIABLE_NAME,
  CORE_FC_RUN_VALUE,
  CORE_FC_VARIABLE_NAME,
  FC_RUN_VALUE
} from './constants/celeste'
import VariableValueIdPair from './models/VariableValueIdPair'

interface RawDataCollection {
  categories: SpeedrunApiResponse<SpeedrunCategory[]>;
  levels: SpeedrunApiResponse<SpeedrunLevel[]>;
  grid: SpeedrunApiResponse<SpeedrunLeaderboard>[][];
  variables: SpeedrunApiResponse<SpeedrunVariable[]>[];
}

const getRawLeaderboardData = async (): Promise<RawDataCollection> => {
  const levels = await fetchLevels()
  const categories = await fetchLevelCategories(levels.data[0])
  const variables = await Promise.all(
    levels.data.map((lvl) => fetchLevelVariables(lvl))
  )
  const grid = await Promise.all(
    categories.data.map((cat) => {
      return Promise.all(
        levels.data.map((lvl, i) => {
          if (cat.name === Categories.COLLECTIBLES) {
            if (lvl.name === ChapterNames.C9) return fetchLevelBoard(lvl, cat)

            const catVars = variables[i]
            const queryVars: VariableValueIdPair[] = []

            const findVariable = (
              varName: string,
              valLabel: string
            ): VariableValueIdPair => {
              // find the 2 relevant IDs based on variable name and run value label
              const variable = catVars.data.find((x) => x.name === varName)
              const value = Object.entries(variable!.values.values).find(
                ([_key, val]) => val.label === valLabel
              )

              return {
                variableId: variable!.id,
                valueId: value![0]
              }
            }

            // Core has a very different FC leaderboard structure, with ARB as category label and a FC run var
            const isCore = lvl.name === ChapterNames.C8
            queryVars.push(
              findVariable(
                COLLECTIBLES_VARIABLE_NAME,
                isCore ? ARB_RUN_VALUE : FC_RUN_VALUE
              )
            )
            if (isCore) {
              queryVars.push(
                findVariable(CORE_FC_VARIABLE_NAME, CORE_FC_RUN_VALUE)
              )
            }

            return fetchLevelBoardWithVariables(lvl, cat, queryVars)
          }
          return fetchLevelBoard(lvl, cat)
        })
      )
    })
  )

  return {
    categories,
    levels,
    grid,
    variables
  }
}

export { getRawLeaderboardData }
