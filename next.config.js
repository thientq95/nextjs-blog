const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    images: {
        domains: ['http://localhost:9091', 'http://localhost'],
      },
}