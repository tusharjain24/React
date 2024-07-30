import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";
function UseTheme() {
  return useContext(ThemeContext);
}

export default UseTheme;
