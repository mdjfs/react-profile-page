/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        IMGUR_CLIENT_ID: process.env.IMGUR_CLIENT_ID,
        IMGUR_CLIENT_SECRET: process.env.IMGUR_CLIENT_SECRET
    }
}

module.exports = nextConfig
