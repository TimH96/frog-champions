import Player from '../../../modules/rankings/models/Player'
import { ChapterNames } from '../../../modules/speedruncom/constants/celeste'
import SpeedrunRankedRun from '../../../modules/speedruncom/models/SpeedrunRankedRun'
import TableSelection from '../../models/TableSelection'
import PlayerState from '../../states/PlayerState'
import htmlToElement from '../html-helper'

const getRunElement = (
  r: SpeedrunRankedRun
) => {
  if (!r) {
    return htmlToElement(`
    <td class="hover-highlight">
      <div class="player-table-run">
        <span>---------</span>
        <span>---------</span>
        <span>---------</span>
      </div>
    </td>
  `)
  }
  const ele = htmlToElement(`
    <td class="hover-highlight">
      <div class="player-table-run">
        <span>${r.run.times.ingame_t}</span>
        <span>${Player.scoringFn(r)}</span>
        <span>${r.place}</span>
      </div>
    </td>
  `)

  ele.addEventListener('click', () => {
    console.log(r)
    window.open(r.run.weblink)
  })

  return ele
}

const getTableElement = (elements: HTMLElement[]) => {
  const ele = document.createElement('tr')
  elements.forEach(e => ele.appendChild(e))
  return ele
}

const getTableHeader = (str: string[]) => {
  const x = str.map(e => `<th>${e}</th>`).join('')
  return htmlToElement(`<tr>${x}</tr>`)
}

const getPlayerTable = (s: PlayerState) => {
  const p = s.player

  const t = document.createElement('table')
  t.classList.add('player-table')

  const head = getTableHeader([
    'Stage',
    TableSelection.A_SIDES,
    TableSelection.COLLECTIBLES,
    TableSelection.B_SIDES,
    TableSelection.C_SIDES
  ]) as HTMLElement
  t.appendChild(head)

  const chapters = [
    ChapterNames.C1,
    ChapterNames.C2,
    ChapterNames.C3,
    ChapterNames.C4,
    ChapterNames.C5,
    ChapterNames.C6,
    ChapterNames.C7,
    ChapterNames.C8,
    ChapterNames.C9
  ]

  const tableRows = chapters.map((chapter, i) => {
    let runElements

    if (chapter === ChapterNames.C9) {
      runElements = [
        p!.timesPage[0][i]
      ].map(r => getRunElement(r))
    } else {
      runElements = [
        p!.timesPage[0][i],
        p!.timesPage[1][i],
        p!.timesPage[2][i],
        p!.timesPage[3][i]
      ].map(r => getRunElement(r))
    }

    const x = [htmlToElement(`<td class="bold player-table-chapter">${chapter}</td>`)].concat(runElements)
    return getTableElement(x.map(e => e as HTMLElement))
  })
  tableRows.forEach(e => t.appendChild(e))

  const pointsPerCol = getTableHeader(
    ['Totals'].concat([
      p!.getPointsOfColumn(0),
      p!.getPointsOfColumn(1),
      p!.getPointsOfColumn(2),
      p!.getPointsOfColumn(3)
    ].map(e => `${String(e)} points`))) as HTMLElement
  t.appendChild(pointsPerCol)

  return t
}

export default getPlayerTable
