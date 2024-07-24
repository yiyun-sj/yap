import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      title: ['Magnolia'],
      body: ['"Roboto"'],
    },
    colors: {
      brand: '#F56040',
      error: '#D32F2F',
      dark: '#121212',
    },
  },
  plugins: [],
}
export default config
