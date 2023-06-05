/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            hostname:'projects-image.s3.eu-west-3.amazonaws.com'
        }
        ],
      },
}

module.exports = nextConfig

