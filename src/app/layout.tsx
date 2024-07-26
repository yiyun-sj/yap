import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://yiyun-sj.github.io/yap'),
  title: {
    default: 'Yap',
    template: '%s | Yap',
  },
  description: 'Yap - Rate Anything!',
  generator: 'Next.js',
  applicationName: 'Yap',
  keywords: ['Yap', 'Rate', 'Social', 'Media', 'App', 'ios'],
  authors: [{ name: 'Yiyun Jia', url: 'https://yiyun-sj.github.io' }],
  creator: 'Yiyun Jia',
  publisher: 'Yiyun Jia',
  openGraph: {
    title: {
      default: 'Yap',
      template: '%s | Yap',
    },
    description: 'Yap - Rate Anything!',
    url: 'https://yiyun-sj.github.io/yap',
    siteName: 'Yap',
    images: [
      {
        url: '/icon.png',
        width: 1000,
        height: 1000,
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/icon.png',
  },
  itunes: {
    appId: '6569233860',
    appArgument: 'yapapp://',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col p-4'>{children}</body>
    </html>
  )
}
