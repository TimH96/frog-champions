import SpeedrunId from "../types/SpeedrunId";
import SpeedrunRun from "../types/SpeedrunRun";

type subcatFilterFunction = (run: SpeedrunRun) => boolean;

const newSubcatFilter = (subcatId: SpeedrunId, valueId: SpeedrunId): subcatFilterFunction => {
    return (run: SpeedrunRun) => {
        return run.values![subcatId] == valueId
    }
}

export { newSubcatFilter }