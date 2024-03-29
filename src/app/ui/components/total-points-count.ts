import PlayerState from '../../states/PlayerState'

const getTotalPointsCount = (s: PlayerState) => {
  const x = document.createElement('span')
  x.classList.add('center')
  x.classList.add('total-points')
  x.innerHTML = `Total: ${s.player!.totalPoints} points`
  return x
}

export default getTotalPointsCount
