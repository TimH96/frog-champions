import RankedRunWithScore from '../../../modules/rankings/models/RankedRunWithScore'
import { ChapterNames } from '../../../modules/speedruncom/constants/celeste'
import TableSelection from '../../models/TableSelection'
import PlayerState from '../../states/PlayerState'
import htmlToElement from '../util/html-helper'
import { toHHMMSS } from '../util/time-helper'
import { getMs, getOrdinal, getPts } from './subtexts'

const getRunElement = (
  r: RankedRunWithScore
) => {
  const getTd = (row1: string, row2: string) => {
    return htmlToElement(`
      <td class="hover-highlight">
        <div class="player-table-run">
          ${row1}
          ${row2}
        </div>
      </td>
    `)
  }

  if (!r) {
    return getTd(
      '<span>---------</span>',
      '<span>---------</span>'
    )
  }

  const timeSplit = String(r.run.times.primary_t).split('.')
  const withoutMs = timeSplit[0]
  const onlyMs = timeSplit.length === 2 ? timeSplit[1].padEnd(3, '0') : '000'

  const ele = getTd(
    `<span>${toHHMMSS(withoutMs)}.${getMs(onlyMs.substring(0, 3), true)}</span>`,
    `<div><span>${r.place}${getOrdinal(r.place, true)}</span> / <span>${r.score} ${getPts(true)}</span></div>`
  )

  ele.addEventListener('click', () => {
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
  const p = s.player!

  const CHAPTERS = [
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

  const t = document.createElement('table')
  t.classList.add('player-table')

  // header
  const head = getTableHeader([
    'Stage',
    TableSelection.A_SIDES,
    TableSelection.COLLECTIBLES,
    TableSelection.B_SIDES,
    TableSelection.C_SIDES
  ]) as HTMLElement
  t.appendChild(head)

  // main content
  const tableRows = CHAPTERS.map((chapter, i) => {
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

    const chapterElements = [htmlToElement(`<td class="bold player-table-chapter">${chapter}</td>`)].concat(runElements)
    return getTableElement(chapterElements.map(e => e as HTMLElement))
  })
  tableRows.forEach(e => t.appendChild(e))

  // footer
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
