import { newSubcatFilter } from "./helper";
import SpeedrunApiResponse from "./types/SpeedrunApiResponse";
import SpeedrunCategory from "./types/SpeedrunCategory";
import SpeedrunId from "./types/SpeedrunId";
import SpeedrunLevel from "./types/SpeedrunLevel";
import { fetchLevelCategories, fetchLevelBoard, fetchLevels, fetchLevelVariables } from "./util/wrapper";

const initiateLeaderboard = async () => {
    const levelsRes: SpeedrunApiResponse<SpeedrunLevel[]> = await fetchLevels()
    const levels = levelsRes.data;

    const categoriesRes: SpeedrunApiResponse<SpeedrunCategory[]> = await fetchLevelCategories(levels[0])
    const categories = categoriesRes.data;


    // this wokrs but sucks
    //let leaderboards: SpeedrunLeaderboard[] = []
    //for (const level of levelsRes.data) {
    //    for (const category of categoriesRes.data) {
    //        leaderboards.push(await (await fetchLevelBoard(level, category)).data)
    //    }
    //}
    
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
