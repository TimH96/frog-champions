import AppState from '../models/AppState'
import getControlButtons from './components/control-buttons'
import getLoader from './components/loader'

const renderDynamicContainer = async (state: AppState): Promise<void> => {
  const container = document.getElementById('dynamic-container')
  const reset = () => { container!.innerHTML = '' }

  reset()

  // add loader
  container!.appendChild(getLoader())

  // arrange data
  // const arr = Array.from(state.players.values())
  //  .sort((a, b) => b.totalPoints - a.totalPoints)
  //  .slice(0, 50)

  // remove loader
  reset()

  // render dynamic container based on state
  container!.appendChild(getControlButtons(state))
  // render table
  // render load more button
}

export default renderDynamicContainer
