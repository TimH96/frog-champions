import SpeedrunRun from "../speedruncom/response_types/SpeedrunRun";

export default interface RankedRun {
    place: number,
    points: number,
    run: SpeedrunRun,
}
