import { DefaultTheme } from "styled-components";
import { dark as darkCard } from "../components/Card/theme";
import { dark as darkTooltip } from "../components/Tooltip/theme";
import { dark as darkModal } from "../components/Modal/theme";
import { dark as darkNav } from "../components/Menu/theme";
import { dark as darkButton } from "../components/Button/theme";
import { dark as darkToggle } from "../components/Toggle/theme";

import base from "./base";
import { darkColors } from "./colors";

const dark: DefaultTheme = {
   ...base,
  isDark: false,
  button: darkButton,
  colors: darkColors,
  card: darkCard,
  nav: darkNav,
  toggle: darkToggle,
  modal: darkModal,
  tooltip: darkTooltip,
};

export default dark;
