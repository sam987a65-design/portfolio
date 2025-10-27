import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aryan Kumbhare - Portfolio',
    short_name: 'AK Portfolio',
    description: 'Portfolio of Aryan Kumbhare — Data Scientist & Full-Stack Engineer',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1020',
    theme_color: '#2dd4bf',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
