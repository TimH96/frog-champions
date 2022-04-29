import LevelGrid from '../modules/speedruncom/models/LevelGrid'
import { getRawLeaderboardData } from '../modules/speedruncom/get-data'
import { gridTransformationFunction, removeFarewellObsoletes } from '../modules/speedruncom/grid-transformation'
import buildPlayerMap from '../modules/rankings/build-map'
import AppState from './models/AppState'
import AppEvent from './models/AppEvent'
import renderDynamicContainer from './ui/render-dynamic'
import TableSelection from './models/TableSelection'

const main = async () => {
  const pMap = await (async () => {
    // fetch data
    const raw = await getRawLeaderboardData()
    let grid: LevelGrid = raw.grid.map((categoryRow) => categoryRow.map((levelBoard) => levelBoard.data))

    // transform grid
    const transformations: gridTransformationFunction[] = [
      removeFarewellObsoletes
    ]
    transformations.forEach((tFunc) => { grid = tFunc(grid) })

    // build and return player map
    return await buildPlayerMap(grid)
  })()

  const initialState: AppState = {
    players: pMap,
    tableSelection: TableSelection.TOTAL,
    tableState: 100
  }

  document.addEventListener(AppEvent.UPDATE_STATE, ((e: CustomEvent<AppState>) => {
    renderDynamicContainer(e.detail)
  // eslint-disable-next-line no-undef
  }) as EventListener)

  await renderDynamicContainer(initialState)
}

export default main
