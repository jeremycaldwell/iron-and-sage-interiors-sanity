const imageUrl = require('./imageUrl')

// Learn more on https://www.sanity.io/guides/introduction-to-portable-text
module.exports = {
  types: {
    authorReference: ({node}) => `[${node.name}](/authors/${node.slug.current})`,
    code: ({node}) =>
      '```' + node.language + '\n' + node.code + '\n```',
    mainImage: ({node}) => `![${node.alt}](${imageUrl(node).width(1380).quality(95).auto('format').url()})`,
    twitter: ({ node }) => `<div id="${node.id}" class="tweet"></div>`,
    instagram: ({ node }) => `<div data-url="https://www.instagram.com/p/${node.id}" class="instagram"></div>`,
  }
}
