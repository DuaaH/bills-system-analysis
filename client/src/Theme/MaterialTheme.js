import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#505050',
    },
    secondary: {
      main: '#61989F',
    },
    background: {
      default: '#505050',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#8F8F8F',
      link: '#FFFFFF',
    },
  },
  overrides: {
    MuiPickersBasePicker: {
      pickerView: {
        backgroundColor: '#616161',
      },
    },
    MuiPickersDay: {
      daySelected: {
        color: 'light-gray',
      },
      current: {
        color: 'black',
      },
      daySelected: {
        backgroundColor: '#61989F',
      },
    },
  },
});
