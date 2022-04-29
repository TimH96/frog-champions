import LevelGrid from './models/LevelGrid'
import SpeedrunLeaderboard from './models/SpeedrunLeaderboard'

/** function that transforms a LevelGrid in some way */
type gridTransformationFunction = (grid: LevelGrid) => LevelGrid;

/** returns a gridTransformationFunction, using the given callback function in grid.map */
const getGridMapTransformation = (func: (levelColumn: SpeedrunLeaderboard[], i: number) => SpeedrunLeaderboard[]): gridTransformationFunction => {
  return (grid: LevelGrid): LevelGrid => {
    return grid.map((levelColumn, i) => func(levelColumn, i))
  }
}

const removeColumn = (grid: LevelGrid, col: number): LevelGrid => {
  return grid.filter((_, i) => i !== col)
}

const removeFarewellObsoletes = (grid: LevelGrid): LevelGrid => {
  const callback = (levelColumn: SpeedrunLeaderboard[], i: number) => {
    if (i === 0) {
      return levelColumn
    }
    return levelColumn.filter((_, i) => i !== 8)
  }

  return getGridMapTransformation(callback)(grid)
}

export { gridTransformationFunction, getGridMapTransformation, removeColumn, removeFarewellObsoletes }
