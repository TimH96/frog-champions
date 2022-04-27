import NamedRelLink from './NamedRelLink'
import RelLink from './RelLink'
import SpeedrunId from './SpeedrunId'

export default interface SpeedrunUser {
    id: SpeedrunId
    links: NamedRelLink[];
    weblink: RelLink;
    names: {
        international: string,
        japanese?: string,
    }
}
