import NamedRelLink from './NamedRelLink'
import RelLink from './RelLink'
import SpeedrunId from './SpeedrunId'
import SpeedrunRun from './SpeedrunRun'

export default interface SpeedrunLeaderboard {
    category: SpeedrunId,
    game: SpeedrunId,
    level: SpeedrunId,
    links: NamedRelLink[],
    weblink: RelLink,
    runs: {
        place: number,
        run: SpeedrunRun,
    }[],
}
