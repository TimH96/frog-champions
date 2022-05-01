import Player from '../../../modules/rankings/models/Player'
import AppState from '../../states/AppState'
import htmlToElement from '../util/html-helper'
import getPointsGetter from '../util/points-getter'
import { getPts } from './subtexts'

const getTableElement = (
  place: string | number,
  player: Player,
  points: string | number
) => {
  const ele = htmlToElement(`
    <tr class="hover-highlight">
      <td class="bold">${place}</td>
      <td>${player.name}</td>
      <td>${points} ${getPts(true)}</td>
    </tr>
  `)

  ele.addEventListener('click', () => {
    window.open(`./player.html?player=${player.id}`, '_blank')!.focus()
  })

  return ele
}

const getTableHeader = (str: string[]) => {
  const x = str.map(e => `<th>${e}</th>`).join('')
  return htmlToElement(`<tr>${x}</tr>`)
}

const getLeaderboardTable = (s: AppState, arr: Player[]) => {
  const t = document.createElement('table')
  const getter = getPointsGetter(s.tableSelection)
  t.classList.add('leaderboard-table')

  const head = getTableHeader(['Place', 'Name', 'Points']) as HTMLElement
  t.appendChild(head)

  arr.forEach((p, i) => t.appendChild(getTableElement(
    i + 1,
    p,
    getter(p)
  )))

  return t
}

export default getLeaderboardTable
