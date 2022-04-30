import AppState from '../models/AppState'
import AppEvent from '../models/AppEvent'
import TableSelection from '../models/TableSelection'
import getPlayerMap from '../../modules/rankings/get-map'
import renderMainPage from '../ui/components/main-page'

const main = async () => {
  const CONTAINER = 'dynamic-container'

  const pMap = await getPlayerMap()

  const initialState: AppState = {
    players: pMap,
    tableSelection: TableSelection.TOTAL,
    tableState: 100
  }

  document.addEventListener(AppEvent.UPDATE_STATE, ((e: CustomEvent<AppState>) => {
    renderMainPage(e.detail, CONTAINER)
  // eslint-disable-next-line no-undef
  }) as EventListener)

  await renderMainPage(initialState, CONTAINER)
}

main()
