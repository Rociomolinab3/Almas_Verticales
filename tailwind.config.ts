import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'azulOscuro':'#132a54',
        'azulMedio':'#2f6d92',
        'azulMedioOscuro':'#2f5892',
        'turquesa':'#64b9bd',
        'celeste':'#c9d8ec',
        'naranja':'#facc88',
        'grisOscuro':'#2e232b',
        'grisMedio':'#8f99a2',
        'grisMedioClaro':'#afb1b3',
        'grisMedioOscuro':'#424547',
        'grisClaro':'#d5d5d5',
        'titulo': '#343a40',
        'texto' : '#495057',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
};
export default config;
