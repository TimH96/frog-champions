import AppState from '../models/AppState'
import { getSorterFunction } from './array-helper'
import getControlButtons from './components/control-buttons'
import getLeaderboardTable from './components/leaderboard-table'
import getLoadMoreButton from './components/load-more-button'
import getLoader from './components/loader'

const renderDynamicContainer = async (state: AppState): Promise<void> => {
  const container = document.getElementById('dynamic-container')
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
  container!.appendChild(getLeaderboardTable(arr))
  container!.appendChild(getLoadMoreButton(state, state.players.size))

  console.log(arr)
}

export default renderDynamicContainer
