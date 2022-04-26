import SpeedrunApiResponse from "./response_types/SpeedrunApiResponse";
import SpeedrunCategory from "./response_types/SpeedrunCategory";
import SpeedrunLevel from "./response_types/SpeedrunLevel";
import SpeedrunRun from "./response_types/SpeedrunRun";
import SpeedrunLeaderboard from "./response_types/SpeedrunLeaderboard";
import { fetchLevelCategories, fetchLevelBoard, fetchLevels, fetchLevelVariables } from "./util/wrapper";
import { gridReduceFunction } from "./util/filters";

const getRawLeaderboardData = async (): Promise<{
    categories: SpeedrunCategory[],
    levels: SpeedrunLevel[],
    grid: Array<Array<SpeedrunApiResponse<SpeedrunLeaderboard>>>
}> => {
    const levels: SpeedrunLevel[] = await (await fetchLevels()).data;
    const categories: SpeedrunCategory[] = await (await fetchLevelCategories(levels[0])).data;
    const leaderboardGridRaw: Array<Array<SpeedrunApiResponse<SpeedrunLeaderboard>>> = await Promise.all(categories.map((cat) => {
        return Promise.all(levels.map((lvl) => {
            return fetchLevelBoard(lvl, cat)
        }))
    }))

    return {
        categories,
        levels,
        grid: leaderboardGridRaw
    }
}

const initiateLeaderboard = async () => {
    const raw = await getRawLeaderboardData();

    let leaderboardGrid: Array<Array<SpeedrunLeaderboard>> = raw.grid.map((categoryRow) => {
        return categoryRow.map((levelBoard) => {
            return levelBoard.data
        })
    })

    const filters: gridReduceFunction[] = [];
    filters.forEach((filter) => {
        leaderboardGrid = filter(leaderboardGrid)
    })


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
