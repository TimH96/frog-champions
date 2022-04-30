import PlayerState from '../../states/PlayerState'

const getTotalPointsCount = (s: PlayerState) => {
  const x = document.createElement('span')
  x.classList.add('center')
  x.innerHTML = `Total: ${s.player!.totalPoints}`
  return x
}

export default getTotalPointsCount
