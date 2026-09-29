import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0B0F1A", soft: "#1B2233", muted: "#5B6477" },
        paper: { DEFAULT: "#FAF9F6", deep: "#F1EFE9" },
        brand: { DEFAULT: "#2451F5", dark: "#1A3BC4", soft: "#E8EDFF" },
        lime: { DEFAULT: "#C6F24E" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      maxWidth: { page: "76rem" },
    },
  },
  plugins: [],
} satisfies Config;
