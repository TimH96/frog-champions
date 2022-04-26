import { newSubcatFilter } from "./lib/speedruncom/helper";
import SpeedrunApiResponse from "./lib/speedruncom/types/SpeedrunApiResponse";
import SpeedrunCategory from "./lib/speedruncom/types/SpeedrunCategory";
import SpeedrunId from "./lib/speedruncom/types/SpeedrunId";
import SpeedrunLevel from "./lib/speedruncom/types/SpeedrunLevel";
import { fetchLevelCategories, fetchLevelBoard, fetchLevels, fetchLevelVariables } from "./lib/speedruncom/wrapper";


async function main() {
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

main()