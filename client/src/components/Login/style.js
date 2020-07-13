import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  loginBtn: {
    width: 294,
    height: 50,
    backgroundColor: theme.palette.secondary.main,
  },
  inputBox: {
    width: 294,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomColor: '#FFFFFF',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
  },
}));
