/** @type {import('next').NextConfig} */
const  path = require('path');
const nextConfig = {
    sassOptions: {
        includePaths: [
            path.join(process.cwd(), 'node_modules/bootstrap/scss'),
        ],
    },
    images: {
        remotePatterns: [
        {
            hostname:'projects-image.s3.eu-west-3.amazonaws.com'
        }
        ],
      },
}

module.exports = nextConfig

