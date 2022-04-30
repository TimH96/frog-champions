import Player from '../../modules/rankings/models/Player'
import TableSelection from '../models/TableSelection'

export default interface AppState {
    players: Map<string, Player>,
    tableSelection: TableSelection,
    tableState: number,
}
