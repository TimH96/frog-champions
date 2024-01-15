/**
 * collection of functions to help transform the player array based on user input
 */

import Player from '../../../modules/rankings/models/Player'
import AppState, { rankingCriteria } from '../../states/AppState'
import { getAverageGetter, getPointsGetter } from './points-getter'

const getSorterFunction = (s: AppState) => {
  if (s.rankingCriteria == rankingCriteria.point) {
    const getter = getPointsGetter(s.tableSelection)
    return (a: Player, b: Player) => getter(b) - getter(a)
  } else {
    const getter = getAverageGetter(s.tableSelection);
    return (a: Player, b: Player) => {
      let as = getter(a);
      let bs = getter(b);
      if (!as[0] || !bs[0]) return bs[0] - as[0];
      return (bs[1] - bs[2]) - (as[1] - as[2]);
    };
  }
}

export { getSorterFunction }
