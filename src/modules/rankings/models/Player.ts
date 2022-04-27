import SpeedrunId from '../../speedruncom/models/SpeedrunId'
import RankedRun from '../../speedruncom/models/RankedRun'
import RankingGrid from './RankingGrid'

export default class Player {
  id: SpeedrunId
  timesPage: RankingGrid

  constructor (id: SpeedrunId, gridDimensions: number[]) {
    this.id = id
    this.timesPage = gridDimensions.map((colSize) => new Array<RankedRun>(colSize))
  }

  /** register run r in the grid at position i, j */
  registerRun (r: RankedRun, i: number, j: number) {
    this.timesPage[i][j] = r
  }
}
