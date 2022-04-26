import RankedRun from "./RankedRun";
import RankingGrid from "./RankingGrid";

export default class Player {
    timesPage: RankingGrid;

    constructor(gridDimensions: number[]) {
        this.timesPage = gridDimensions.map(colSize => new Array<RankedRun>(colSize))
    }
}