import SpeedrunId from "../response_types/SpeedrunId";
import SpeedrunLeaderboard from "../response_types/SpeedrunLeaderboard";
import SpeedrunRun from "../response_types/SpeedrunRun";

type gridReduceFunction = (grid: Array<Array<SpeedrunLeaderboard>>) => Array<Array<SpeedrunLeaderboard>>;



export { gridReduceFunction }