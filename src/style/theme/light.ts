import { DefaultTheme } from "styled-components";
// import { light as lightAlert } from "../components/Alert/theme";
import { light as lightButton } from "../components/Button/theme";
import { light as lightCard } from "../components/Card/theme";
// import { light as lightRadio } from "../components/Radio/theme";
import { light as lightToggle } from "../components/Toggle/theme";
import { light as lightTooltip } from "../components/Tooltip/theme";
import { light as lightNav } from "../components/Menu/theme";
import { light as lightModal } from "../components/Modal/theme";
import base from "./base";
import { lightColors } from "./colors";

const light: DefaultTheme = {
  ...base,
  isDark: true,
//  alert: lightAlert,
  button: lightButton,
  colors: lightColors,
  card: lightCard,
  toggle: lightToggle,
  nav: lightNav,
  modal: lightModal,
//  radio: lightRadio,
  tooltip: lightTooltip
};

export default light;