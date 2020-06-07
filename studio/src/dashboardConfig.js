export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5edd4e8a4265ffcdbc4f1405',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6bkx9z9x',
                  apiId: '32a36add-08b9-491c-9499-d6f61964c2aa'
                },
                {
                  buildHookId: '5edd4e8a3846e085eca2336e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8j4m795n',
                  apiId: '1b4ca4a0-cef1-49ac-bd0a-9d7e87d5cffa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/b3e/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8j4m795n.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
