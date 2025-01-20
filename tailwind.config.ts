import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #EEEBFF 100%, #FFFFFF 0%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },    
        colors: {
         'custom-purple': '#2E24AF',
        
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
} satisfies Config;
