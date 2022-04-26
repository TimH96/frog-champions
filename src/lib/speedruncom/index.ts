import SpeedrunApiResponse from "./types/SpeedrunApiResponse";
import SpeedrunCategory from "./types/SpeedrunCategory";
import SpeedrunLevel from "./types/SpeedrunLevel";
import SpeedrunRun from "./types/SpeedrunRun";
import SpeedrunLeaderboard from "./types/SpeedrunLeaderboard";
import { fetchLevelCategories, fetchLevelBoard, fetchLevels, fetchLevelVariables } from "./util/wrapper";

const initiateLeaderboard = async () => {

    // fetch data

    const levelsRes: SpeedrunApiResponse<SpeedrunLevel[]> = await fetchLevels();
    const levels = levelsRes.data;

    const categoriesRes: SpeedrunApiResponse<SpeedrunCategory[]> = await fetchLevelCategories(levels[0]);
    const categories = categoriesRes.data;

    const baseLevels = levels.slice(0, 8);
    const farewellLevel = levels[8];
    
    const leaderboardGridRaw: Array<Array<SpeedrunApiResponse<SpeedrunLeaderboard>>> = await Promise.all(categories.map((cat) => {
        return Promise.all(baseLevels.map((lvl) => {
            return fetchLevelBoard(lvl, cat)
        }))
    }))

    // filter

    const leaderboardGridUnfiltered: Array<Array<SpeedrunLeaderboard>> = leaderboardGridRaw.map((categoryRow) => {
        return categoryRow.map((levelBoard) => {
            return levelBoard.data
        })
    })

    const leaderboardGrid: Array<Array<SpeedrunLeaderboard>> = leaderboardGridUnfiltered.map((categoryRow) => {
        if (categoryRow[0].category === categories[1].id) {
            return categoryRow.map((levelBoard) => {
                levelBoard.runs = levelBoard.runs.map((rankedRun) => {
                    return rankedRun
                    if (rankedRun.run.values!.value)
                })
                return levelBoard
            })
        }
        return categoryRow
    })

    console.log(leaderboardGrid)

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
