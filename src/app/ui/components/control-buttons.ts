import AppEvent from '../../models/AppEvent'
import AppState from '../../models/AppState'
import TableSelection from '../../models/TableSelection'

const getCallback = (s: AppState, type: TableSelection) => {
  return () => {
    s.tableSelection = type
    document.dispatchEvent(new CustomEvent<AppState>(AppEvent.UPDATE_STATE, { detail: s }))
  }
}

const getButton = (s: AppState, type: TableSelection) => {
  const btn = document.createElement('button')
  btn.innerHTML = type
  btn.disabled = (type === s.tableSelection)
  btn.addEventListener('click', getCallback(s, type))
  return btn
}

const getControlButtons = (s: AppState) => {
  const l = document.createElement('li')
  const selections = [
    TableSelection.TOTAL,
    TableSelection.A_SIDES,
    TableSelection.B_SIDES,
    TableSelection.C_SIDES
  ]

  for (const type of selections) {
    l.appendChild(getButton(s, type))
  }

  return l
}

export default getControlButtons
