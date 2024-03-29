import Player from '../../../modules/rankings/models/Player'
import TableSelection from '../../models/TableSelection'

export function getPointsGetter (sel: TableSelection) {
  switch (sel) {
    case TableSelection.TOTAL:
      return (p: Player) => p.totalPoints

    case TableSelection.A_SIDES:
      return (p: Player) => p.getPointsOfColumn(0)

    case TableSelection.COLLECTIBLES:
      return (p: Player) => p.getPointsOfColumn(1)

    case TableSelection.B_SIDES:
      return (p: Player) => p.getPointsOfColumn(2)

    case TableSelection.C_SIDES:
      return (p: Player) => p.getPointsOfColumn(3)

    default:
      return (p: Player) => p.totalPoints
  }
}

export function getAverageGetter (sel: TableSelection) {
  switch (sel) {
    case TableSelection.TOTAL:
      return (p: Player) => p.getAvgScore()

    case TableSelection.A_SIDES:
      return (p: Player) => p.getAvgScoreOfColumn(0)

    case TableSelection.COLLECTIBLES:
      return (p: Player) => p.getAvgScoreOfColumn(1)

    case TableSelection.B_SIDES:
      return (p: Player) => p.getAvgScoreOfColumn(2)

    case TableSelection.C_SIDES:
      return (p: Player) => p.getAvgScoreOfColumn(3)

    default:
      return (p: Player) => p.getAvgScore()
  }
}
