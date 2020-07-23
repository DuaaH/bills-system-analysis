import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  image: {
    margin: theme.spacing(2),
    width: '100px',
    height: '100px',
  },
  Button: {
    backgroundColor: theme.palette.secondary.main,
    marginLeft: '130px',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: { marginLeft: 90 },
  },
  updateButt: {
    width: '100%',
  },
  addPosition: {
    display: 'block',
    textAlign: 'right',
  },
  gridPosition: {
    textAlign: 'right',
  },
  root: {
    paddingTop: '2px',
  },
  LineHorizantal: {
    width: '100%',
  },
  labelStyle: {
    marginRight: '15px',
  },
  inputText: {
    backgroundColor: '#616161',
    padding: '0 8px',
    width: '100px',
    [theme.breakpoints.down('lg')]: { width: 200 },
    [theme.breakpoints.down('sm')]: { width: 100 },
  },
  errorTitle: {
    textAlign: 'right',
  },
}));
