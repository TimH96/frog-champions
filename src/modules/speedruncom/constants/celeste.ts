/* eslint-disable no-unused-vars */
import SpeedrunId from '../models/SpeedrunId'

const GAME_ID: SpeedrunId = 'o1y9j9v6'
const GAME_NAME = 'Celeste'

const COLLECTIBLES_VARIABLE_NAME = 'Full Clear / ARB / HC'
const FC_RUN_VALUE = 'Full Clear'
const ARB_RUN_VALUE = 'All Red Berries'

enum Categories {
    A_SIDES = 'Clear',
    COLLECTIBLES = 'Collectibles',
    B_SIDES = 'B-Side',
    C_SIDES = 'C-Side',
}

enum ChapterNames {
    C1 = 'Forsaken City',
    C2 = 'Old Site',
    C3 = 'Celestial Resort',
    C4 = 'Golden Ridge',
    C5 = 'Mirror Temple',
    C6 = 'Reflection',
    C7 = 'The Summit',
    C8 = 'Core',
    C9 = 'Farewell',
}

export { GAME_ID, GAME_NAME, COLLECTIBLES_VARIABLE_NAME, FC_RUN_VALUE, ARB_RUN_VALUE, Categories, ChapterNames }
