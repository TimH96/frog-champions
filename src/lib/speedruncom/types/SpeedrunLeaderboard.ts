import NamedRelLink from "./NamedRelLink";
import RelLink from "./RelLink";
import SpeedrunId from "./SpeedrunId";
import SpeedrunRankedRun from "./SpeedrunRankedRun";

export default interface SpeedrunLeaderboard {
    category: SpeedrunId,
    game: SpeedrunId,
    level: SpeedrunId,
    links: NamedRelLink[],
    weblink: RelLink,
    runs: SpeedrunRankedRun[],
}