import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
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
