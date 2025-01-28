import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    //flowbite.content(),
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
      keyframes: {
          slideIn: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slideOut: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
        animation: {
          slideIn: 'slideIn 0.3s ease-out forwards',
          slideOut: 'slideOut 0.3s ease-in backwards',
        },
      },
    },
  
  plugins: [
    require('@tailwindcss/typography'),
   // flowbite.plugin(),
  ],
} satisfies Config;
