import LevelGrid from '../modules/speedruncom/models/LevelGrid'
import { getRawLeaderboardData } from '../modules/speedruncom/get-data'
import { getFilterFullClearRuns, gridTransformationFunction, removeCollectiblesCategory, removeFarewellObsoletes } from '../modules/speedruncom/grid-transformation'
import buildPlayerMap from '../modules/rankings/build-map'
import AppState from './models/AppState'
import AppEvent from './models/AppEvent'
import renderDynamicContainer from './ui/render-dynamic'

const main = async () => {
  const pMap = await (async () => {
    // fetch data
    const raw = await getRawLeaderboardData()

    // remove .data ApiResponse
    const variables = raw.variables.map((variable) => variable.data)
    let grid: LevelGrid = raw.grid.map((categoryRow) => categoryRow.map((levelBoard) => levelBoard.data))

    // transform grid
    const transformations: gridTransformationFunction[] = [
      removeFarewellObsoletes,
      getFilterFullClearRuns(variables), // this is currently unused because collectibles are removed entirely
      removeCollectiblesCategory
    ]
    transformations.forEach((tFunc) => { grid = tFunc(grid) })

    // build and return player map
    return await buildPlayerMap(grid)
  })()

  const initialState: AppState = {
    players: pMap
  }

  document.addEventListener(AppEvent.UPDATE_STATE, ((e: CustomEvent<AppState>) => {
    renderDynamicContainer(e.detail)
  // eslint-disable-next-line no-undef
  }) as EventListener)

  await renderDynamicContainer(initialState)
}

export default main
