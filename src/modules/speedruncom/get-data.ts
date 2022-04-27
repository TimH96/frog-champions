import SpeedrunApiResponse from './models/SpeedrunApiResponse'
import SpeedrunCategory from './models/SpeedrunCategory'
import SpeedrunLevel from './models/SpeedrunLevel'
import SpeedrunVariable from './models/SpeedrunVariable'
import SpeedrunLeaderboard from './models/SpeedrunLeaderboard'
import { fetchLevelCategories, fetchLevelBoard, fetchLevels, fetchLevelVariables } from './wrapper'

interface RawDataCollection {
    categories: SpeedrunApiResponse<SpeedrunCategory[]>,
    levels: SpeedrunApiResponse<SpeedrunLevel[]>,
    grid: SpeedrunApiResponse<SpeedrunLeaderboard>[][],
    variables: SpeedrunApiResponse<SpeedrunVariable[]>[]
}

const getRawLeaderboardData = async (): Promise<RawDataCollection> => {
  const levels = await fetchLevels()
  const categories = (await fetchLevelCategories(levels.data[0]))
  const grid = await Promise.all(categories.data.map((cat) => {
    return Promise.all(levels.data.map((lvl) => {
      return fetchLevelBoard(lvl, cat)
    }))
  }))
  const variables = await Promise.all(levels.data.map((lvl) => fetchLevelVariables(lvl)))

  return {
    categories,
    levels,
    grid,
    variables
  }
}

export { getRawLeaderboardData }
