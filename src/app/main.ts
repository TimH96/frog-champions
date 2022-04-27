import LevelGrid from '../modules/speedruncom/models/LevelGrid'
import { getRawLeaderboardData } from '../modules/speedruncom/get-data'
import { getFilterFullClearRuns, gridTransformationFunction, removeCollectiblesCategory, removeFarewellObsoletes } from '../modules/speedruncom/grid-transformation'
import buildPlayerMap from '../modules/rankings/build-map'

const main = async () => {
  const p = await (async () => {
    // fetch data
    const raw = await getRawLeaderboardData()

    // remove .data ApiResponse
    const variables = raw.variables.map((variable) => variable.data)
    let grid: LevelGrid = raw.grid.map((categoryRow) => categoryRow.map((levelBoard) => levelBoard.data))

    // transform grid
    const transformations: gridTransformationFunction[] = [
      removeFarewellObsoletes,
      getFilterFullClearRuns(variables), // this is currently unused because collectibles are removed entirely
      removeCollectiblesCategory
    ]
    transformations.forEach((tFunc) => { grid = tFunc(grid) })

    // build and return player map
    return await buildPlayerMap(grid)
  })()

  // testing script
  const arr = Array.from(p.values()).sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 50)
  await Promise.all(arr.map(async (p) => await p.getName()))

  arr.forEach(p => console.log({ name: p.name, score: p.totalPoints }))
}

export default main
