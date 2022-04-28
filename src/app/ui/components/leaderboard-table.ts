import Player from '../../../modules/rankings/models/Player'
import htmlToElement from '../html-helper'

const getTableElement = (
  place: string |number,
  name: string,
  points: string | number
) => {
  return htmlToElement(`
        <tr>
            <th>${place}</th>
            <th>${name}</th>
            <th>${points}</th>
        </tr>
    `)
}

const getLeaderboardTable = (arr: Player[]) => {
  const t = document.createElement('table')

  const head = getTableElement('Place', 'Name', 'Points') as HTMLElement
  head.classList.add('table-head')
  t.appendChild(head)

  arr.forEach((p, i) => t.appendChild(getTableElement(
    i + 1,
    p.name,
    p.totalPoints
  )))

  return t
}

export default getLeaderboardTable
