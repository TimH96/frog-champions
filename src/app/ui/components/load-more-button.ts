import AppEvent from '../../models/AppEvent'
import AppState from '../../models/AppState'

const getLoadMoreButton = (s: AppState, max: number) => {
  if (s.tableState >= max) {
    return document.createElement('div')
  }

  const d = document.createElement('div')
  d.classList.add('center')

  const btn = document.createElement('button')
  btn.innerHTML = 'Load 50 more ...'

  btn.addEventListener('click', () => {
    s.tableState = (s.tableState + 50)
    document.dispatchEvent(new CustomEvent<AppState>(AppEvent.UPDATE_STATE, { detail: s }))
  })

  d.appendChild(btn)
  return d
}

export default getLoadMoreButton
