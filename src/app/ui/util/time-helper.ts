const removeLeadingZeroes = (s: string) => {
  const arr = s.split('')
  const out = s.split('')

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i]
    if (char === '0' || char === ':') {
      out.shift()
    } else {
      return out.join('')
    }
  }

  return s
}

const toHHMMSS = (time: string) => {
  const secNum = parseInt(time, 10)

  const hours = Math.floor(secNum / 3600)
  const minutes = Math.floor((secNum - (hours * 3600)) / 60)
  const seconds = secNum - (hours * 3600) - (minutes * 60)

  const raw = [hours, minutes, seconds].map(e => String(e).padStart(2, '0')).join(':')

  return removeLeadingZeroes(raw)
}

export { toHHMMSS, removeLeadingZeroes }
