import SpeedrunApiResponse from "./ts/speedruncom/types/SpeedrunApiResponse";
import SpeedrunId from "./ts/speedruncom/types/SpeedrunId";
import SpeedrunLevel from "./ts/speedruncom/types/SpeedrunLevel";

export default interface Player {
    name: string
    id: SpeedrunId
}

async function main() {
    const levelsRes: SpeedrunApiResponse<SpeedrunLevel[]> = await (await fetch("https://www.speedrun.com/api/v1/games/o1y9j9v6/levels")).json()
    for (const level of levelsRes.data) {
        const categoriesRes: SpeedrunApiResponse<any> = await (await fetch(level.links[2].uri)).json()
        console.log(categoriesRes)
    }
}

main()