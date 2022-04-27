import SpeedrunRankedRun from '../speedruncom/models/SpeedrunRankedRun'

type scoringFunction = (r: SpeedrunRankedRun) => number

const eliteScoring = (r: SpeedrunRankedRun): number => {
  if (r.place === 1) { return 100 }
  if (r.place === 2) { return 97 }
  return Math.max(0, 98 - r.place)
}

export { scoringFunction, eliteScoring }
