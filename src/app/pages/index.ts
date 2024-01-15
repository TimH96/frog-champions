import AppState, { rankingCriteria } from '../states/AppState'
import AppEvent from '../models/AppEvent'
import TableSelection from '../models/TableSelection'
import getPlayerMap from '../../modules/rankings/get-map'
import renderMainPage from '../ui/components/main-page'
import getLoader from '../ui/components/loader'

const main = async () => {
  const CONTAINER = document.getElementById('dynamic-container')

  CONTAINER!.appendChild(getLoader())

  const pMap = await getPlayerMap()

  const initialState: AppState = {
    players: pMap,
    tableSelection: TableSelection.TOTAL,
    tableState: 100,
    rankingCriteria: rankingCriteria.point
  }

  document.addEventListener(AppEvent.UPDATE_STATE, ((e: CustomEvent<AppState>) => {
    renderMainPage(e.detail, CONTAINER!)
  // eslint-disable-next-line no-undef
  }) as EventListener)

  await renderMainPage(initialState, CONTAINER!)
}

main()
