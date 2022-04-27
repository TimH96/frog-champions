import NamedRelLink from './NamedRelLink'
import RelLink from './RelLink'
import SpeedrunId from './SpeedrunId'

export default interface SpeedrunCategory {
    id: SpeedrunId;
    name: string;
    links: NamedRelLink[];
    weblink: RelLink;
    miscellaneous: boolean;
    rules?: string;
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
