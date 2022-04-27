import RelLink from './RelLink';
import SpeedrunId from './SpeedrunId';
import SpeedrunPlayer from './SpeedrunPlayer';
import SpeedrunTimes from './SpeedrunTimes';

export default interface SpeedrunRun {
    id: SpeedrunId,
    category: SpeedrunId,
    game: SpeedrunId,
    level: SpeedrunId,
    comment: string,
    date: string,
    weblink: RelLink,
    players: SpeedrunPlayer[],
    submitted: string,
    times: SpeedrunTimes,
    values?: Record<SpeedrunId, SpeedrunId>,
};
