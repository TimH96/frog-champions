import NamedRelLink from './NamedRelLink'
import RelLink from './RelLink'
import SpeedrunId from './SpeedrunId'

export default interface SpeedrunLevel {
    id: SpeedrunId
    name: string
    links: NamedRelLink[]
    weblink: RelLink
    rules?: string
}
