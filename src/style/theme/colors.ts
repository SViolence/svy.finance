import { Colors } from "./types";

export const baseColors = {
  failure: "#111111",
  primary: "#8e7d95", // botones
  white: "#111111",
  primaryBright: "#111111",
  primaryDark: "#111111",
  secondary: "#111111",
  success: "#111111",
  warning: "#111111",
  gamble_green: "#111111",
  gamble_black: "#111111",
  gamble_red: "#111111",
};

export const brandColors = {
  binance: "#FFFFFF",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ebe8ed",  // hover del mause en el menu
  card: "#d8d2db",
  backgroundDisabled: "#e9ebea",
  contrast: "#13261d",
  invertedContrast: "#FFFFFF",
  input: "#c5bcc9",
  inputSecondary: "#c5bcc9",
  tertiary: "#c5bcc9",
  text: "#1b191c", // text bpdy
  textDisabled: "#bcc4c0",
  textSubtle: "#463e49", // text menu
  borderColor: "#5d5261",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #a796ae 0%, #ebe8ed 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#6bffb5",
  background: "#11111",
  backgroundDisabled: "#37423d",
  contrast: "#FFFFFF",
  invertedContrast: "#13261d",
  input: "#3e594c",
  inputSecondary: "#578c72",
  primaryDark: "#00a150",
  tertiary: "#36473e",
  text: "#e3fcf0",
  textDisabled: "#607068",
  textSubtle: "#8cd4b0",
  borderColor: "#4c6358",
  card: "#252b28",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #315c46 0%, #2a543f 100%)",
  },
};
