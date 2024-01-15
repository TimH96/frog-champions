import SpeedrunId from '../../speedruncom/models/SpeedrunId'
import SpeedrunRankedRun from '../../speedruncom/models/SpeedrunRankedRun'
import RankingGrid from './RankingGrid'
import { fetchUser } from '../../speedruncom/wrapper'
import RankedRunWithScore from './RankedRunWithScore'

export type AverageScore = [
  number, // count
  number, // mean
  number // confidence bound
];

function GetAverageStatistics (scores: number[]): AverageScore {
  const count = scores.length
  if (count === 0) return [0, 0, 0]
  const sum = scores.reduce((a, b) => a + b, 0)
  if (count === 1) return [1, sum, sum]
  const ssum = scores.reduce((a, b) => a + b * b, 0)
  const avg = sum / count
  const tdev = ssum - avg * avg * count
  const sdev = Math.sqrt(tdev / (count - 1))
  const cbound = 2 * sdev / Math.sqrt(count)
  return [count, avg, cbound]
}

export default class Player {
  id: SpeedrunId
  timesPage: RankingGrid

  private _pointsPerColumn: number[]
  private _avgScorePerColumn: (AverageScore | null)[]
  private _totalAvgScore: (AverageScore | null) = null
  private _name: string | null | undefined = undefined

  constructor (id: SpeedrunId, gridDimensions: number[]) {
    this.id = id
    this.timesPage = gridDimensions.map((colSize) => new Array<RankedRunWithScore | null>(colSize).fill(null))
    this._pointsPerColumn = gridDimensions.map((_) => 0)
    this._avgScorePerColumn = gridDimensions.map((_) => null)
  }

  /** register run r in the grid at position i, j */
  registerRun (r: SpeedrunRankedRun, s: number, i: number, j: number) {
    const x = {
      place: r.place,
      run: r.run,
      score: s
    }
    this.timesPage[i][j] = x
  }

  public getPointsOfColumn (col: number): number {
    if (this._pointsPerColumn[col]) {
      return this._pointsPerColumn[col]
    }

    const val = this.timesPage[col].filter((x) => x != null).reduce((sum, r) => sum + r!.score, 0)
    this._pointsPerColumn[col] = val

    return val
  }

  public getAvgScoreOfColumn (col: number): AverageScore {
    if (this._avgScorePerColumn[col] === null) {
      const list = this.timesPage[col].filter((x) => x != null).map((r) => r!.score)
      this._avgScorePerColumn[col] = GetAverageStatistics(list)
    }
    return this._avgScorePerColumn[col]!
  }

  public getAvgScore (): AverageScore {
    if (this._totalAvgScore === null) {
      const list = this.timesPage.map((r) => r.filter((x) => x != null).map((x) => x!.score)).reduce((a, b) => a.concat(b), [])
      this._totalAvgScore = GetAverageStatistics(list)
    }
    return this._totalAvgScore!
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

    try {
      const n = await (await fetchUser(this.id)).data.names.international
      this._name = n
    } catch {
      this._name = `UNLOADED: ${this.id}`
    }

    return this._name
  }
}
