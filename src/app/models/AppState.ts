import Player from '../../modules/rankings/models/Player'
import TableSelection from './TableSelection'
import TableState from './TableState'

export default interface AppState {
    players: Map<string, Player>,
    tableSelection: TableSelection,
    tableState: TableState,
}
