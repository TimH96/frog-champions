import LevelGrid from '../speedruncom/models/LevelGrid'
import SpeedrunId from '../speedruncom/models/SpeedrunId'
import Player from './models/Player'
import { getPercentScoreFn } from './scoring'

const buildPlayerMap = async (grid: LevelGrid): Promise<Map<SpeedrunId, Player>> => {
  const pMap = new Map<SpeedrunId, Player>()
  const gridDimensions = grid.map((col) => col.length)

  grid.forEach((levelColumn, i) =>
    levelColumn.forEach((board, j) => {
      const fn = getPercentScoreFn(board.runs[0].run.times.primary_t)

      board.runs.forEach((r) => {
        const p = r.run.players[0]

        // skip players without id (deleted users)
        if (p.id) {
          pMap.has(p.id) || pMap.set(p.id, new Player(p.id, gridDimensions))
          const pl = pMap.get(p.id)!
          pl.registerRun(r, fn(r), i, j)
        }
      })
    })
  )

  return pMap
}

export default buildPlayerMap
