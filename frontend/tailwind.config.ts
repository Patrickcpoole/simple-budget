import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
            'primary': '#7AACC3',
            'danger': '##FF5353',
            'background': '#F8F8F8'
        },


     backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(72,64,187,1) 0%, rgba(186,92,48,1) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
