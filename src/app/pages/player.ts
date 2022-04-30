import getPlayerMap from '../../modules/rankings/get-map'
import PlayerState from '../states/PlayerState'
import renderPlayerPage from '../ui/components/player-page'
import { fetchUser } from '../../modules/speedruncom/wrapper'
import SpeedrunId from '../../modules/speedruncom/models/SpeedrunId'

const main = async () => {
  const CONTAINER = 'player-container'
  const render = (s: PlayerState) => {
    return renderPlayerPage(s, CONTAINER)
  }
  const abort = () => {
    return render({ player: null })
  }

  const playerParam = new URLSearchParams(window.location.search).get('player')

  if (!playerParam) {
    return abort()
  }

  let id: SpeedrunId
  try {
    id = await (await fetchUser(playerParam)).data.id
  } catch {
    return abort()
  }

  const pMap = await getPlayerMap()
  if (!pMap.get(id)) {
    return abort()
  }

  await render({ player: pMap.get(id) })
}

main()
