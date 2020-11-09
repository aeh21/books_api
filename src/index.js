import React from "react";
import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./static/css/global.scss";
import mainTheme from "./themes/main";

render(
  <ThemeProvider theme={mainTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
