import { getRawLeaderboardData } from '../speedruncom/get-data'
import { gridTransformationFunction, removeFarewellObsoletes } from '../speedruncom/grid-transformation'
import LevelGrid from '../speedruncom/models/LevelGrid'
import buildPlayerMap from './build-map'

const getPlayerMap = async () => {
  // fetch data
  const raw = await getRawLeaderboardData()
  let grid: LevelGrid = raw.grid.map((categoryRow) => categoryRow.map((levelBoard) => levelBoard.data))

  // transform grid
  const transformations: gridTransformationFunction[] = [
    removeFarewellObsoletes
  ]
  transformations.forEach((tFunc) => { grid = tFunc(grid) })

  // build and return player map
  return await buildPlayerMap(grid)
}

export default getPlayerMap
