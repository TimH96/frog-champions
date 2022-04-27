import LevelGrid from '../modules/speedruncom/models/LevelGrid';
import {getRawLeaderboardData} from '../modules/speedruncom/get-data';
import {getFilterFullClearRuns, gridTransformationFunction, removeCollectiblesCategory, removeFarewellObsoletes} from '../modules/speedruncom/grid-transformation';
import buildPlayerMap from '../modules/rankings/build-map';

const main = async () => {
  const p = await (async () => {
    // fetch data
    const raw = await getRawLeaderboardData();

    // remove .data ApiResponse
    const variables = raw.variables.map((variable) => variable.data);
    let grid: LevelGrid = raw.grid.map((categoryRow) => categoryRow.map((levelBoard) => levelBoard.data));

    // transform grid
    const transformations: gridTransformationFunction[] = [
      removeFarewellObsoletes,
      getFilterFullClearRuns(variables), // this is currently unused because collectibles are removed entirely
      removeCollectiblesCategory,
    ];
    transformations.forEach((tFunc) => grid = tFunc(grid));

    // build and return player map
    return await buildPlayerMap(grid);
  })();

  const arr = Array.from(p.values()).sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 50);
  console.log(arr);
  const names = await Promise.all(arr.map(async (p) => {
    return await (await fetch(`https://www.speedrun.com/api/v1/users/${p.id}`)).json();
  }));

  console.log(names.map((n) => n.data.names.international));
};

export default main;
