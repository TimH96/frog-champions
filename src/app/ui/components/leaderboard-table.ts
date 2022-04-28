import Player from '../../../modules/rankings/models/Player'
import AppState from '../../models/AppState'
import htmlToElement from '../html-helper'
import getPointsGetter from '../points-getter'

const getTableElement = (
  place: string | number,
  name: string,
  points: string | number
) => {
  return htmlToElement(`
        <tr>
            <td>${place}</td>
            <td>${name}</td>
            <td>${points}</td>
        </tr>
    `)
}

const getTableHeader = (
  place: string,
  name: string,
  points: string
) => {
  return htmlToElement(`
        <tr>
            <th>${place}</th>
            <th>${name}</th>
            <th>${points}</th>
        </tr>
    `)
}

const getLeaderboardTable = (s: AppState, arr: Player[]) => {
  const t = document.createElement('table')
  const getter = getPointsGetter(s.tableSelection)

  const head = getTableHeader('Place', 'Name', 'Points') as HTMLElement
  t.appendChild(head)

  arr.forEach((p, i) => t.appendChild(getTableElement(
    i + 1,
    p.name,
    getter(p)
  )))

  return t
}

export default getLeaderboardTable
