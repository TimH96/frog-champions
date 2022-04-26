import SpeedrunApiResponse from "./response_types/SpeedrunApiResponse";
import SpeedrunCategory from "./response_types/SpeedrunCategory";
import SpeedrunLevel from "./response_types/SpeedrunLevel";
import SpeedrunVariable from "./response_types/SpeedrunVariable";
import SpeedrunLeaderboard from "./response_types/SpeedrunLeaderboard";
import { fetchLevelCategories, fetchLevelBoard, fetchLevels, fetchLevelVariables } from "./util/wrapper";
import { getFilterFullClearRuns, gridTransformationFunction, removeCollectiblesCategory, removeFarewellObsoletes } from "./util/grid-transformation";
import LevelGrid from "./models/LevelGrid";

const getRawLeaderboardData = async (): Promise<{
    categories: SpeedrunApiResponse<SpeedrunCategory[]>,
    levels: SpeedrunApiResponse<SpeedrunLevel[]>,
    grid: SpeedrunApiResponse<SpeedrunLeaderboard>[][],
    variables: SpeedrunApiResponse<SpeedrunVariable[]>[]
}> => {
    const levels = await fetchLevels();
    const categories =(await fetchLevelCategories(levels.data[0]));
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

    console.log(grid)

    /*
    const fullClearFilters = levels.slice(0, 8).map(async (level) => {
        const variables = await fetchLevelVariables(level);
        console.log(variables.data[0].name)
    })

    const c = await fetchLevelBoard(levels[0], categories[1])
    console.log(c)

    const d = await fetchLevelBoard(levels[1], categories[1])
    console.log(d)

    /*
    const x = await Promise.all(levels.slice(0, 8).map(async (level) => {
        return categories.map((category) => {
            return fetchLevelBoard(level, category)
        })
    }))
    console.log(x)
    */
}

export default initiateLeaderboard
