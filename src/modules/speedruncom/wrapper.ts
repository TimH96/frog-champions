import { GAME_ID } from './constants/celeste'
import VariableValueIdPair from './models/VariableValueIdPair'
import SpeedrunApiResponse from './models/SpeedrunApiResponse'
import SpeedrunCategory from './models/SpeedrunCategory'
import SpeedrunId from './models/SpeedrunId'
import SpeedrunLeaderboard from './models/SpeedrunLeaderboard'
import SpeedrunLevel from './models/SpeedrunLevel'
import SpeedrunUser from './models/SpeedrunUser'
import SpeedrunVariable from './models/SpeedrunVariable'

const HREF = 'www.speedrun.com'
const API_VERSION = 'v1'

const getBasePath = () => {
  return `https://${HREF}/api/${API_VERSION}`
}

const fetchLevelBoard = async (
  level: SpeedrunLevel,
  category: SpeedrunCategory
): Promise<SpeedrunApiResponse<SpeedrunLeaderboard>> => {
  return (
    await fetch(
      `${getBasePath()}/leaderboards/${GAME_ID}/level/${level.id}/${
        category.id
      }`
    )
  ).json()
}

const fetchLevelBoardWithVariables = async (
  level: SpeedrunLevel,
  category: SpeedrunCategory,
  variables: VariableValueIdPair[]
): Promise<SpeedrunApiResponse<SpeedrunLeaderboard>> => {
  const variableString = variables
    .map((x) => `var-${x.variableId}=${x.valueId}`)
    .join('&')
  return (
    await fetch(
      `${getBasePath()}/leaderboards/${GAME_ID}/level/${level.id}/${
        category.id
      }?${variableString}`
    )
  ).json()
}

const fetchLevels = async (): Promise<SpeedrunApiResponse<SpeedrunLevel[]>> => {
  return await (await fetch(`${getBasePath()}/games/${GAME_ID}/levels`)).json()
}

const fetchLevelCategories = async (
  level: SpeedrunLevel
): Promise<SpeedrunApiResponse<SpeedrunCategory[]>> => {
  return await (
    await fetch(`${getBasePath()}/levels/${level.id}/categories`)
  ).json()
}

const fetchLevelVariables = async (
  level: SpeedrunLevel
): Promise<SpeedrunApiResponse<SpeedrunVariable[]>> => {
  return await (
    await fetch(`${getBasePath()}/levels/${level.id}/variables`)
  ).json()
}

const fetchUser = async (
  user: SpeedrunId
): Promise<SpeedrunApiResponse<SpeedrunUser>> => {
  return await (await fetch(`${getBasePath()}/users/${user}`)).json()
}

export {
  fetchLevelBoard,
  fetchLevelBoardWithVariables,
  fetchLevels,
  fetchLevelCategories,
  fetchLevelVariables,
  fetchUser
}
