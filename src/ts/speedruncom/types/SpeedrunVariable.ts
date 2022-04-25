import NamedRelLink from "./NamedRelLink";
import SpeedrunId from "./SpeedrunId";

export default interface SpeedrunVariable {
    id: SpeedrunId,
    category: SpeedrunId,
    name: string,
    links: NamedRelLink[],
    mandatory: boolean,
    obsoletes: boolean,
    values: {
        values: Record<SpeedrunId, { label: string }>
    }
}