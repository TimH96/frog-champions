import Player from '../../modules/rankings/models/Player'

export default interface AppState {
    players: Map<string, Player>,
}
