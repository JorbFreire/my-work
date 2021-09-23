module.exports = {
  async redirects() {
    return [
      {
        source: '/FD',
        destination: '/project/foodzilla-dashboard',
        permanent: true,
      },
      {
        source: '/FL',
        destination: '/project/foodzilla-landingpage',
        permanent: true,
      },
      {
        source: '/BF',
        destination: '/project/chat-dashboard',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [
      'beatforbeat.com.br',
      'img.elo7.com.br',
      's2.glbimg.com',
      'lojasantoantonio.vteximg.com.br',
    ],
  },
}
