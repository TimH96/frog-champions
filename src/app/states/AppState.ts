import Player from '../../modules/rankings/models/Player'
import TableSelection from '../models/TableSelection'

export enum rankingCriteria{
    point = 0,
    average = 1
};

export default interface AppState {
    players: Map<string, Player>,
    tableSelection: TableSelection,
    tableState: number,
    rankingCriteria: rankingCriteria
}
