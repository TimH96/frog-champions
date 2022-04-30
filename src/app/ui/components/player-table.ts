import PlayerState from '../../states/PlayerState'
import htmlToElement from '../html-helper'

const getPlayerTable = (s: PlayerState) => {
  return (htmlToElement(`
    cockandballs
  `))
}

export default getPlayerTable
