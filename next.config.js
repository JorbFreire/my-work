module.exports = {
  async redirects() {
    return [
      {
        source: '/FD',
        destination: '/foodzilla-dashboard',
        permanent: true,
      },
      {
        source: '/FL',
        destination: '/foodzilla-landingpage',
        permanent: true,
      },
      {
        source: '/BF',
        destination: '/chat-dashboard',
        permanent: true,
      },
    ]
  },
}
