import SpeedrunRankedRun from '../../speedruncom/models/SpeedrunRankedRun'

export default interface RankedRunWithScore extends SpeedrunRankedRun {
    score: number
}
