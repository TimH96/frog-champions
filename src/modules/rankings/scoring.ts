import SpeedrunRankedRun from '../speedruncom/models/SpeedrunRankedRun'

type scoringFunction = (r: SpeedrunRankedRun) => number

const eliteScoring = (run: SpeedrunRankedRun): number => {
  if (run.place === 1) { return 100 }
  if (run.place === 2) { return 97 }
  return Math.max(0, 98 - run.place)
}

const getPercentScoreFn = (wrTime: number) => {
  return (r: SpeedrunRankedRun) => {
    const t = r.run.times.primary_t

    return Math.max(0, Math.round((1 - Math.log((Math.E - 1) * (t / wrTime - 1) + 1)) * 1000))
  }
}

export { scoringFunction, eliteScoring, getPercentScoreFn }
