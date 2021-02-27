import { createMuiTheme } from '@material-ui/core/styles';
import { red, yellow, green } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow.A200,
    },
    secondary: {
      main: green.A700,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
