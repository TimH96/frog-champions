import RankedRun from "./RankedRun";
import RankingGrid from "./RankingGrid";

export default class Player {
    timesPage: RankingGrid;
    totalPoints: number;
    categoryPoints: number[];

    constructor(gridDimensions: number[]) {
        this.timesPage = gridDimensions.map(colSize => new Array<RankedRun>(colSize))
        this.totalPoints = 0
        this.categoryPoints = gridDimensions.map(_ => 0);
    }
}