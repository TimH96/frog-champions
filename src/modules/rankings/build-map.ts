import LevelGrid from '../speedruncom/models/LevelGrid'
import SpeedrunId from '../speedruncom/models/SpeedrunId'
import Player from './models/Player'

const buildPlayerMap = async (grid: LevelGrid): Promise<Map<SpeedrunId, Player>> => {
  const pMap = new Map<SpeedrunId, Player>()
  const gridDimensions = grid.map((col) => col.length)

  grid.forEach((levelColumn, i) => {
    levelColumn.forEach((board, j) => {
      board.runs.forEach((run, k) => {
        const r = run.run
        const p = r.players[0]

        pMap.has(p.id) || pMap.set(p.id, new Player(p.id, gridDimensions))

        const pl = pMap.get(p.id)!
        const points = Math.max(100 - k, 0)
        pl.timesPage[i][j] = {
          run: r,
          place: k + 1,
          points
        }
        pl.totalPoints += points
        pl.categoryPoints[i] = pl.categoryPoints[i] + points
      })
    })
  })

  return pMap
}

export default buildPlayerMap
