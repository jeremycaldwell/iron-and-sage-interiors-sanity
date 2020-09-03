const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateBasicpage (basicpage) {
  return {
    ...basicpage,
    body: BlocksToMarkdown(basicpage.body, { serializers, ...client.config() })
  }
}

async function getBasicpages () {
  const filter = groq`*[_type == "basicpage" && defined(slug)]`
  const projection = groq`{
    _id,
    publishedAt,
    title,
    slug,
    pageBuilder,
    body[]{
      ...,
      children[]{
        ...,
        // Join inline reference
        _type == "authorReference" => {
          // check /studio/documents/authors.js for more fields
          "name": @.author->name,
          "slug": @.author->slug
        }
      }
    },
  }`
  const order = `| order(publishedAt asc)`
  const query = [filter, projection, order].join(' ')
  const basicpages = await client.fetch(query).catch(err => console.error(err))
  const reducedBasicpages = overlayDrafts(hasToken, basicpages)
  const prepareBasicpages = reducedBasicpages.map(generateBasicpage)
  return prepareBasicpages
}

module.exports = getBasicpages
