/**
 * collection of functions to help transform the player array based on user input
 */

import Player from '../../modules/rankings/models/Player'
import AppState from '../models/AppState'
import TableSelection from '../models/TableSelection'
import TableState from '../models/TableState'

const getSliceParameters = (s: AppState) => {
  return (s.tableState === TableState.TOP_100) ? [0, 100] : [0]
}

const getSorterFunction = (s: AppState) => {
  switch (s.tableSelection) {
    case TableSelection.TOTAL:
      return (a: Player, b: Player) => b.totalPoints - a.totalPoints

    case TableSelection.A_SIDES:
      return (a: Player, b: Player) => b.getPointsOfColumn(0) - a.getPointsOfColumn(0)

    case TableSelection.B_SIDES:
      return (a: Player, b: Player) => b.getPointsOfColumn(1) - a.getPointsOfColumn(1)

    case TableSelection.C_SIDES:
      return (a: Player, b: Player) => b.getPointsOfColumn(2) - a.getPointsOfColumn(2)

    default:
      return (a: Player, b: Player) => b.totalPoints - a.totalPoints
  }
}

export { getSliceParameters, getSorterFunction }
