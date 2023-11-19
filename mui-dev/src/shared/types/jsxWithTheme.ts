import { ReactElement } from "react";

import { Theme } from "@mui/material";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";

type jsxWithTheme = ReactElement<ThemeProviderProps<Theme>>

export default jsxWithTheme