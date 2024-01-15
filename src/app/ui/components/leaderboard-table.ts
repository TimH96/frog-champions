import Player from '../../../modules/rankings/models/Player'
import AppState, { rankingCriteria } from '../../states/AppState'
import AppEvent from '../../models/AppEvent'
import htmlToElement from '../util/html-helper'
import {getPointsGetter,getAverageGetter} from '../util/points-getter'
import { AverageScore } from '../../../modules/rankings/models/Player'
import { getPts } from './subtexts'

const getTableElement = (
  place: string | number,
  player: Player,
  points: string | number,
  average: AverageScore
) => {
  const ele = htmlToElement(`
    <tr class="hover-highlight">
      <td class="bold">${place}</td>
      <td>${player.name}</td>
      <td>${points} ${getPts(true)}</td>
      <td><div><span class="count"><span>${average[0]}</span></span>${average[1].toFixed(2)}<span class="confidenceBound">${average[2].toFixed(2)}</span></div></td>
    </tr>
  `)

  ele.addEventListener('click', () => {
    window.open(`./player.html?player=${player.id}`, '_blank')!.focus()
  })

  return ele
}

type cbFn = (elem: HTMLElement)=>void;

const getTableHeader = (str: ([string,cbFn|null])[]) => {
  let header = document.createElement("tr");
  for(let i of str){
    let th = document.createElement("th");
    if(i[1] != null) i[1]!(th);
    th.innerHTML = `<div>${i[0]}</div>`;
    header.appendChild(th);
  }
  return header;
}

function setRankingCriteria(s:AppState, crit: rankingCriteria):cbFn {
  return (el: HTMLElement)=>{
    console.log("Crit:",s.rankingCriteria,crit);
    if(crit == s.rankingCriteria){
      el.classList.add("criteriaSel");
    }
    el.addEventListener('click',()=>{
      s.rankingCriteria = crit;
      document.dispatchEvent(new CustomEvent<AppState>(AppEvent.UPDATE_STATE, { detail: s }))
    });
  };
}

const getLeaderboardTable = (s: AppState, arr: Player[]) => {
  const t = document.createElement('table')
  const getter = getPointsGetter(s.tableSelection)
  const getter2 = getAverageGetter(s.tableSelection)
  t.classList.add('leaderboard-table')

  const head = getTableHeader([
    ['Place', null], ['Name', null], 
    ['Points',setRankingCriteria(s, rankingCriteria.point)],
    ['Average',setRankingCriteria(s, rankingCriteria.average)]]) as HTMLElement;
  t.appendChild(head)

  arr.forEach((p, i) => t.appendChild(getTableElement(
    i + 1,
    p,
    getter(p),
    getter2(p)
  )))

  return t
}

export default getLeaderboardTable
