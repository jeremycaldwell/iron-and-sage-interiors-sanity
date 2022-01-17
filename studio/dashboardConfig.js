export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6d330f4ca41c9b2b51a227',
                  title: 'Staging Website',
                  name: 'iron-and-sage-interiors-stage',
                  apiId: 'f9426e93-2878-4273-91f9-2a29b938ddb9'
                },
                {
                  buildHookId: '5f3b4268534d5d47b885d503',
                  title: 'Live Website',
                  name: 'iron-and-sage-interiors-sanity',
                  apiId: 'bde1490e-3331-4107-8696-974fa39f560b'
                },
                {
                  buildHookId: '5f3b4268cc6262670c895211',
                  title: 'Sanity Studio',
                  name: 'iron-and-sage-interiors-sanity-studio',
                  apiId: 'ed49d1f6-303b-4d88-a740-507c917d61be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeremycaldwell/iron-and-sage-interiors-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://iron-and-sage-interiors-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Pages', order: 'title asc', types: ['basicpage']},
      layout: {width: 'small'}
    },
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'small'}
    }
  ]
}
