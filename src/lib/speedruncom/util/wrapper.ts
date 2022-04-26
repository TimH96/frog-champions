import { GAME_ID } from "../constants/celeste"
import SpeedrunApiResponse from "../response_types/SpeedrunApiResponse"
import SpeedrunCategory from "../response_types/SpeedrunCategory"
import SpeedrunLeaderboard from "../response_types/SpeedrunLeaderboard"
import SpeedrunLevel from "../response_types/SpeedrunLevel"
import SpeedrunVariable from "../response_types/SpeedrunVariable"

const HREF = "www.speedrun.com";
const API_VERSION = "v1";

const fetchLevelBoard = async (level: SpeedrunLevel, category: SpeedrunCategory): Promise<SpeedrunApiResponse<SpeedrunLeaderboard>> => {
    return (await fetch(`https://${HREF}/api/${API_VERSION}/leaderboards/${GAME_ID}/level/${level.id}/${category.id}`)).json()
}

const fetchLevels = async (): Promise<SpeedrunApiResponse<SpeedrunLevel[]>> => {
    return await (await fetch(`https://${HREF}/api/${API_VERSION}/games/${GAME_ID}/levels`)).json()
}

const fetchLevelCategories = async (level: SpeedrunLevel): Promise<SpeedrunApiResponse<SpeedrunCategory[]>> => {
    return await (await fetch(`https://${HREF}/api/${API_VERSION}/levels/${level.id}/categories`)).json()
}

const fetchLevelVariables = async (level: SpeedrunLevel): Promise<SpeedrunApiResponse<SpeedrunVariable[]>> => {
    return await (await fetch(`https://${HREF}/api/${API_VERSION}/levels/${level.id}/variables`)).json()
}

export { fetchLevelBoard, fetchLevels, fetchLevelCategories, fetchLevelVariables }
