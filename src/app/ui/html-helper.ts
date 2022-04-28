const htmlToElement = (html: string): Node => {
  const template = document.createElement('template')
  html = html.trim()
  template.innerHTML = html
  return template.content.firstChild as Node
}

export default htmlToElement
