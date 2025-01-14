import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        rubik: ['var(--font-rubik)'],
      },
      animation: {
        brightness: "brightness 2.2s linear infinite",
        'slide-left': "slide 20s linear infinite",
        "shine": "shine 8s linear infinite",
      },
      keyframes: {
        brightness: {
          "0%": {
            transform: "skew(-13deg) translateX(-100%)",
          },
          "100%": {
            transform: "skew(-13deg) translateX(100%)",
          },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        "shine": {
          "from": {
            "backgroundPosition": "200% 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;