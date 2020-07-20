import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const themeFile = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

export default themeFile;