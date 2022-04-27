import SpeedrunId from '../../speedruncom/models/SpeedrunId'
import SpeedrunRankedRun from '../../speedruncom/models/SpeedrunRankedRun'
import RankingGrid from './RankingGrid'
import { fetchUser } from '../../speedruncom/wrapper'
import { eliteScoring, scoringFunction } from '../scoring'

export default class Player {
  id: SpeedrunId
  timesPage: RankingGrid

  private _pointsPerColumn: number[]
  private _name: string | null | undefined = undefined

  static scoringFn: scoringFunction = eliteScoring

  constructor (id: SpeedrunId, gridDimensions: number[]) {
    this.id = id
    this.timesPage = gridDimensions.map((colSize) => new Array<SpeedrunRankedRun>(colSize))
    this._pointsPerColumn = gridDimensions.map((_) => 0)
  }

  /** register run r in the grid at position i, j */
  registerRun (r: SpeedrunRankedRun, i: number, j: number) {
    this.timesPage[i][j] = r
  }

  public getPointsOfColumn (col: number): number {
    if (this._pointsPerColumn[col]) {
      return this._pointsPerColumn[col]
    }

    const val = this.timesPage[col].reduce((sum, r) => sum + Player.scoringFn(r), 0)
    this._pointsPerColumn[col] = val

    return val
  }

  public get totalPoints () {
    return this._pointsPerColumn.reduce((sum, _, i) => sum + this.getPointsOfColumn(i), 0)
  }

  /**
   * this getter should be used with caution, preferably when absolutely certain that the name of
   * a player is already loaded
   *
   * otherwise use the async version getName
   */
  public get name () {
    if (this._name) {
      return this._name
    }

    fetchUser(this.id).then(val => {
      const n = val.data.names.international
      this._name = n

      return n
    })

    return ''
  }

  public async getName () {
    if (this._name) {
      return this._name
    }

    const n = await (await fetchUser(this.id)).data.names.international
    this._name = n

    return n
  }
}
