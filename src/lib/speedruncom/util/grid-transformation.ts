import LevelGrid from "../models/LevelGrid";
import SpeedrunLeaderboard from "../response_types/SpeedrunLeaderboard";
import SpeedrunVariable from "../response_types/SpeedrunVariable";

/** function that transforms a LevelGrid in some way */
type gridTransformationFunction = (grid: LevelGrid) => LevelGrid;

/** returns a gridTransformationFunction, using the given callback function in grid.map */
const getGridMapTransformation = (func: (levelColumn: SpeedrunLeaderboard[], i: number) => SpeedrunLeaderboard[]): gridTransformationFunction => {
    return (grid: LevelGrid): LevelGrid => {
        return grid.map((levelColumn, i) => {
            return func(levelColumn, i)
        })
    }
}

/** remove Collectibles category from the grid entirely */
const removeCollectiblesCategory = (grid: LevelGrid): LevelGrid => {
    return grid.filter((_, i) => i !== 1)
}

const getFilterFullClearRuns = (variables: SpeedrunVariable[][]): gridTransformationFunction => {
    const callback = (levelColumn: SpeedrunLeaderboard[], i: number) => {
        if (i === 1 /* only filter runs in the collectibles column */) {
            return levelColumn.map((level, i) => {
                // find the 2 relevant IDs based on variable name and run value label
                const variable = variables[i].find((x) => x.name == "Full Clear / ARB / HC")  // TODO think about where to refactor this to
                const value = Object.entries(variable!.values.values).find(([_key, val]) => val.label === "Full Clear")  // TODO think about where to refactor this to)

                // throw out if run is of not of given subcategory
                level.runs = level.runs.filter((run) => 
                    run.run.values![variable!.id] === value![0]
                )
                console.log(level.runs)

                return level
            })
        }
        return levelColumn
    }

    return (grid: LevelGrid): LevelGrid => {
        return getGridMapTransformation(callback)(grid)
    }
}

const removeFarewellObsoletes = (grid: LevelGrid): LevelGrid => {
    const callback = (levelColumn: SpeedrunLeaderboard[], i: number) => {
        if (i === 0) {
            return levelColumn
        }
        return levelColumn.filter((_, i) => i !== 8)
    }

    return getGridMapTransformation(callback)(grid)
};


export { gridTransformationFunction, getGridMapTransformation, removeCollectiblesCategory, getFilterFullClearRuns, removeFarewellObsoletes }