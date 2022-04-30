const getMiniText = (content: string) => {
  const x = document.createElement('span')
  x.classList.add('mini-text')
  x.innerHTML = content
  return x
}

const getMiniTextString = (content: string) => {
  const x = document.createElement('span')
  x.classList.add('mini-text')
  x.innerHTML = content
  return `<span class="mini-text">${content}</span>`
}

const getPts = (asString: boolean = false) => {
  return asString ? getMiniTextString('pts') : getMiniText('pts')
}

const getMs = (timeISO8601: string, asString: boolean = false) => {
  // let x = parse(timeISO8601).seconds?.toString() || '0.000'
  // let y = x.split('.')[1]
//
  // console.log(parse(timeISO8601))
  // timeISO8601.split(".")[1]
}

const getOrdinal = (n: number, asString: boolean = false) => {
  // taken from https://stackoverflow.com/a/39466341
  const nth = (x: number) => { return ['st', 'nd', 'rd'][((x + 90) % 100 - 10) % 10 - 1] || 'th' }
  const ordinal = nth(n)

  return asString ? getMiniTextString(ordinal) : getMiniText(ordinal)
}

export { getMiniText, getPts, getMs, getOrdinal }
