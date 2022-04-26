import SpeedrunId from "../speedruncom/response_types/SpeedrunId";
import RankedRun from "./RankedRun";
import RankingGrid from "./RankingGrid";

export default class Player {
    id: SpeedrunId;
    timesPage: RankingGrid;
    totalPoints: number;
    categoryPoints: number[];

    constructor(id: SpeedrunId, gridDimensions: number[]) {
        this.id = id;
        this.timesPage = gridDimensions.map(colSize => new Array<RankedRun>(colSize))
        this.totalPoints = 0
        this.categoryPoints = gridDimensions.map(_ => 0);
    }
}