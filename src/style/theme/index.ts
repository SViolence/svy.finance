import { ButtonTheme } from "../components/Button/types";
import { CardTheme } from "../components/Card/types";
import { TooltipTheme } from "../components/Tooltip/types";
import { NavTheme } from "../components/Menu/types";
import { ModalTheme } from "../components/Modal/types";
import { ToggleTheme } from "../components/Toggle/types";

import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices } from "./types";

export interface ViolenceTheme{
  siteWidth: number;
  isDark: boolean;
  colors: Colors;
  button: ButtonTheme;
  card: CardTheme;
  nav: NavTheme;
  modal: ModalTheme;
  toggle: ToggleTheme;
  tooltip: TooltipTheme;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { default as dark } from "./dark";
export { default as light } from "./light";

export { lightColors } from "./colors";
export { darkColors } from "./colors";
