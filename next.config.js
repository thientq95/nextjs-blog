const path = require('path')

module.exports = {
    async rewrites() {
        return [
          {
            source: '/contact',
            destination: '/lien-he',
          },
        ]
      },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    images: {
        domains: ['http://localhost:9091', 'http://localhost'],
      },
}