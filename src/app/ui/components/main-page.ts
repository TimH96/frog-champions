import AppState from '../../states/AppState'
import { getSorterFunction } from '../array-helper'
import getControlButtons from './control-buttons'
import getLeaderboardTable from './leaderboard-table'
import getLoadMoreButton from './load-more-button'
import getLoader from './loader'

const renderMainPage = async (state: AppState, id: string): Promise<void> => {
  const container = document.getElementById(id)
  const reset = () => { container!.innerHTML = '' }

  reset()

  // add loader as arranging array might include loading player names
  container!.appendChild(getLoader())

  // arrange data based on state
  const arr = Array.from(state.players.values())
    .sort(getSorterFunction(state))
    .slice(0, state.tableState)

  // load all names
  await Promise.all(arr.map(async (p) => await p.getName()))

  // remove loader again
  reset()

  // render dynamic container based on state
  container!.appendChild(getControlButtons(state))
  container!.appendChild(getLeaderboardTable(state, arr))
  container!.appendChild(getLoadMoreButton(state, state.players.size))
}

export default renderMainPage
