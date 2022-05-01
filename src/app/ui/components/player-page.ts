import PlayerState from '../../states/PlayerState'
import htmlToElement from '../util/html-helper'
import getPlayerTable from './player-table'
import getTotalPointsCount from './total-points-count'

const renderPlayerPage = async (state: PlayerState, container: HTMLElement): Promise<void> => {
  const reset = () => { container!.innerHTML = '' }

  reset()

  if (!state.player) {
    container!.appendChild(htmlToElement(`
      <h1>Oops, something went wrong!</h1>
    `))
  } else {
    const name = await state.player.getName()
    container!.appendChild(htmlToElement(`<h1>${name}</h1>`))
    container!.appendChild(getPlayerTable(state))
    container!.appendChild(getTotalPointsCount(state))
  }
}

export default renderPlayerPage
