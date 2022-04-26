import SpeedrunApiResponse from "./response_types/SpeedrunApiResponse";
import SpeedrunCategory from "./response_types/SpeedrunCategory";
import SpeedrunLevel from "./response_types/SpeedrunLevel";
import SpeedrunVariable from "./response_types/SpeedrunVariable";
import SpeedrunLeaderboard from "./response_types/SpeedrunLeaderboard";
import { fetchLevelCategories, fetchLevelBoard, fetchLevels, fetchLevelVariables } from "./util/wrapper";
import { getFilterFullClearRuns, gridTransformationFunction, removeCollectiblesCategory, removeFarewellObsoletes } from "./util/grid-transformation";
import LevelGrid from "./models/LevelGrid";

interface RawDataCollection {
    categories: SpeedrunApiResponse<SpeedrunCategory[]>,
    levels: SpeedrunApiResponse<SpeedrunLevel[]>,
    grid: SpeedrunApiResponse<SpeedrunLeaderboard>[][],
    variables: SpeedrunApiResponse<SpeedrunVariable[]>[]
}

const transformGrid = async (raw: RawDataCollection): Promise<LevelGrid> => {
    const variables = raw.variables.map((variable) => {
        return variable.data
    })

    let grid: LevelGrid = raw.grid.map((categoryRow) => {
        return categoryRow.map((levelBoard) => {
            return levelBoard.data
        })
    })

    const transformations: gridTransformationFunction[] = [
        removeFarewellObsoletes,
        getFilterFullClearRuns(variables), // this is currently unused because collectibles are removed entirely
        removeCollectiblesCategory,
    ];
    transformations.forEach((tFunc: gridTransformationFunction) => {
        grid = tFunc(grid)
    })

    return grid
}

const getRawLeaderboardData = async (): Promise<RawDataCollection> => {
    const levels = await fetchLevels();
    const categories = (await fetchLevelCategories(levels.data[0]));
    const grid = await Promise.all(categories.data.map((cat) => {
        return Promise.all(levels.data.map((lvl) => {
            return fetchLevelBoard(lvl, cat)
        }))
    }))
    const variables = await Promise.all(levels.data.map((lvl) => {
        return fetchLevelVariables(lvl)
    }))

    return {
        categories,
        levels,
        grid,
        variables,
    }
}

const initiateLeaderboard = async () => {
    const raw = await getRawLeaderboardData();
    const grid = await transformGrid(raw);

    console.log(grid)
}

export default initiateLeaderboard
