import SpeedrunRun from '../../speedruncom/models/SpeedrunRun';

export default interface RankedRun {
    place: number,
    points: number,
    run: SpeedrunRun,
}
