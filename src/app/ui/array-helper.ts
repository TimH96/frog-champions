/**
 * collection of functions to help transform the player array based on user input
 */

import Player from '../../modules/rankings/models/Player'
import AppState from '../models/AppState'
import getPointsGetter from './points-getter'

const getSorterFunction = (s: AppState) => {
  const getter = getPointsGetter(s.tableSelection)
  return (a: Player, b: Player) => getter(b) - getter(a)
}

export { getSorterFunction }
