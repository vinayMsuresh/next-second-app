/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects:async () =>{
    return[
      {
        source:'/news',
        destination:'/news2',
        permanent:true
      },
      {
        source:'/fff',
        destination:'/',
        permanent:false
      }
    ]
  }
}

module.exports = nextConfig
