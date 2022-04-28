import AppEvent from '../models/AppEvent'
import AppState from '../models/AppState'

const renderDynamicContainer = async (state: AppState): Promise<void> => {
  const container = document.getElementById('dynamic-container')
  container!.innerHTML = ''

  // loading circle

  // render button list

  // render table

  // render load more button

  const btn = document.createElement('BUTTON')

  btn.addEventListener('click', () => {
    document.dispatchEvent(new CustomEvent<AppState>(AppEvent.UPDATE_STATE, { detail: state }))
  })

  document.getElementById('dynamic-container')!.appendChild(btn)
}

export default renderDynamicContainer
