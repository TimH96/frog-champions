import htmlToElement from '../html-helper'

const getLoader = () => {
  return htmlToElement('<div class="loader">Loading...</div>')
}

export default getLoader
