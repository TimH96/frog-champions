import htmlToElement from '../util/html-helper'

const getLoader = () => {
  return htmlToElement('<div class="loader center">Loading...</div>')
}

export default getLoader
