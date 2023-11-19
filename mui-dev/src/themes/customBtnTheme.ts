import { createTheme } from "@mui/material";

const customBtnTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
    secondary: {
      main: '#1976d2',
      contrastText: 'black',
    },
    facebook: {
      main: '#F08080',
      contrastText: 'white',
    },
  },
  shape : {
    borderRadius : 6,
  }
});

export default customBtnTheme;
