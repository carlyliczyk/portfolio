// src/theme/flowbiteTheme.ts
import { createTheme } from "flowbite-react";

// Tailwind colors from your project
const colors = {
  primary: "bg-primary text-black",
  secondary: "bg-secondary text-white",
  dark: "bg-dark text-white",
};

export const flowbiteTheme = createTheme({
  tooltip: {
    base: "bg-white text-white text-center text-xs py-2 px-3 rounded-md shadow-lg z-50",
    style: {
      dark: "bg-dark text-white",
      light: "bg-white text-black",
      auto: "bg-dark text-white",
    },
  },
  button: {
    color: {
      primary: "bg-white text-black",
      secondary: "bg-secondary text-white",
    },
    size: {
      sm: "px-3 py-1 text-sm",
      lg: "px-6 py-3 text-lg",
    },
  },
});