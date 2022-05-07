import getPlayerMap from '../../modules/rankings/get-map'
import PlayerState from '../states/PlayerState'
import renderPlayerPage from '../ui/components/player-page'
import { fetchUser } from '../../modules/speedruncom/wrapper'
import SpeedrunId from '../../modules/speedruncom/models/SpeedrunId'
import getLoader from '../ui/components/loader'

const main = async () => {
  const CONTAINER = document.getElementById('player-container')

  CONTAINER!.appendChild(getLoader())

  const render = (s: PlayerState) => {
    return renderPlayerPage(s, CONTAINER!)
  }
  const abort = () => {
    return render({ player: null })
  }

  const playerParam = new URLSearchParams(window.location.search).get('player')
  if (!playerParam) {
    return abort()
  }

  const pMap = await getPlayerMap()

  // render if id exists in table
  if (pMap.has(playerParam)) {
    await render({ player: pMap.get(playerParam) })
    return
  }

  // try fetching id if name is given instead
  let id: SpeedrunId
  try {
    id = await (await fetchUser(playerParam)).data.id
    if (!pMap.has(id)) {
      throw new Error()
    }
    await render({ player: pMap.get(id) })
  } catch {
    return abort()
  }
}

main()
