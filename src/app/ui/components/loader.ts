const getLoader = () => {
  const x = document.createElement('div')
  x.classList.add(...['loader', 'center'])
  x.innerHTML = 'Loading ...'
  return x
}

export default getLoader
