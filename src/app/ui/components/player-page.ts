import PlayerState from '../../states/PlayerState'
import htmlToElement from '../html-helper'
import getPlayerTable from './player-table'

const renderPlayerPage = async (state: PlayerState, id: string): Promise<void> => {
  const container = document.getElementById(id)
  const reset = () => { container!.innerHTML = '' }

  reset()

  console.log(state.player)

  if (!state.player) {
    container!.appendChild(htmlToElement(`
      <h1>Oops, something went wrong!</h1>
    `))
  } else {
    const name = await state.player.getName()
    container!.appendChild(htmlToElement(`<h1>${name}</h1>`))
    container!.appendChild(getPlayerTable(state))
  }
}

export default renderPlayerPage
