import SpeedrunApiResponse from "./response_types/SpeedrunApiResponse";
import SpeedrunCategory from "./response_types/SpeedrunCategory";
import SpeedrunLevel from "./response_types/SpeedrunLevel";
import SpeedrunVariable from "./response_types/SpeedrunVariable";
import SpeedrunLeaderboard from "./response_types/SpeedrunLeaderboard";
import { fetchLevelCategories, fetchLevelBoard, fetchLevels, fetchLevelVariables } from "./util/wrapper";
import { getFilterFullClearRuns, gridTransformationFunction, removeCollectiblesCategory, removeFarewellObsoletes } from "./util/grid-transformation";
import LevelGrid from "../models/LevelGrid";
import Player from "../models/Player";
import SpeedrunId from "./response_types/SpeedrunId";

interface RawDataCollection {
    categories: SpeedrunApiResponse<SpeedrunCategory[]>,
    levels: SpeedrunApiResponse<SpeedrunLevel[]>,
    grid: SpeedrunApiResponse<SpeedrunLeaderboard>[][],
    variables: SpeedrunApiResponse<SpeedrunVariable[]>[]
}

const getRawLeaderboardData = async (): Promise<RawDataCollection> => {
    const levels = await fetchLevels();
    const categories = (await fetchLevelCategories(levels.data[0]));
    const grid = await Promise.all(categories.data.map((cat) => {
        return Promise.all(levels.data.map((lvl) => {
            return fetchLevelBoard(lvl, cat)
        }))
    }))
    const variables = await Promise.all(levels.data.map((lvl) => {
        return fetchLevelVariables(lvl)
    }))

    return {
        categories,
        levels,
        grid,
        variables,
    }
}

const transformGrid = async (raw: RawDataCollection): Promise<LevelGrid> => {
    const variables = raw.variables.map((variable) => {
        return variable.data
    })

    let grid: LevelGrid = raw.grid.map((categoryRow) => {
        return categoryRow.map((levelBoard) => {
            return levelBoard.data
        })
    })

    const transformations: gridTransformationFunction[] = [
        removeFarewellObsoletes,
        getFilterFullClearRuns(variables), // this is currently unused because collectibles are removed entirely
        removeCollectiblesCategory,
    ];
    transformations.forEach((tFunc: gridTransformationFunction) => {
        grid = tFunc(grid)
    })

    return grid
}

const buildPlayerMap = async (grid: LevelGrid): Promise<Map<SpeedrunId, Player>> => {
    let pMap = new Map<SpeedrunId, Player>()
    const gridDimensions = grid.map(col => col.length)

    grid.forEach((levelColumn, i) => {
        levelColumn.forEach((board, j) => {
            board.runs.forEach((run, k) => {
                const r = run.run;
                const p = r.players[0];

                pMap.has(p.id) || pMap.set(p.id, new Player(p.id, gridDimensions))

                const pl = pMap.get(p.id)!;
                const points = Math.max(500-k, 0)
                pl.timesPage[i][j] = {
                    run: r,
                    place: k+1,
                    points,
                }
                pl.totalPoints += points;
                pl.categoryPoints[i] = pl.categoryPoints[i]+points;
            })
        })
    })

    return pMap;
}

const initiateLeaderboard = async () => {
    const raw = await getRawLeaderboardData();
    const grid = await transformGrid(raw);
    const players = await buildPlayerMap(grid);

    const arr = Array.from(players.values()).sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 50)
    console.log(arr)
    const names = await Promise.all(arr.map(async (p) => {
        return await (await fetch(`https://www.speedrun.com/api/v1/users/${p.id}`)).json()
    }))

    console.log(names.map(n => n.data.names.international))
}

export default initiateLeaderboard
