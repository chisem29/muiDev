import {
  createMuiTheme,
  PaletteColor,
  Theme,
  ThemeOptions,
} from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette extends Theme {
    facebook: PaletteColor;
  }
  interface PaletteOptions extends ThemeOptions {
    facebook: PaletteColorOptions;
  }
}
