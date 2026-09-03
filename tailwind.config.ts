import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          base: "#07090E",
          surface: "#0D111A",
          crimson: "#FF2A4D",
        },
        cosmic: {
          cyan: "#00F0FF",
          magenta: "#FF007A",
          purple: "#7B2CBF",
          blue: "#1A6BFF",
          gold: "#FFAA00",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "cosmic-gradient":
          "linear-gradient(135deg, #00F0FF 0%, #7B2CBF 50%, #FF007A 100%)",
        "void-gradient":
          "radial-gradient(circle at 50% 0%, #0D111A 0%, #07090E 80%)",
        "crimson-gradient":
          "linear-gradient(135deg, #FF2A4D 0%, #7B2CBF 100%)",
      },
      boxShadow: {
        "glow-cyan": "0 0 25px rgba(0, 240, 255, 0.55)",
        "glow-magenta": "0 0 25px rgba(255, 0, 122, 0.55)",
        "glow-purple": "0 0 25px rgba(123, 44, 191, 0.55)",
        "glow-gold": "0 0 25px rgba(255, 170, 0, 0.55)",
        "glow-crimson": "0 0 25px rgba(255, 42, 77, 0.55)",
      },
      animation: {
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "shard-shift": "shard-shift 8s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "shard-shift": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
    },
  },
  plugins: [],
}

export default config