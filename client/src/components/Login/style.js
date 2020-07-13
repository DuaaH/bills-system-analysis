import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: '0',
  },
  title: {
    margin: '10% 0 0 10%',
  },
  loginBtn: {
    height: 50,
    backgroundColor: theme.palette.secondary.main,
  },
  inputBox: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomColor: '#FFFFFF',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    marginBottom: '10%',
    width: '100%',
  },
  errorMessage: {
    color: '#FFF',
  },
  loginForm: {
    width: '100%',
    margin: '20% 4% 20% 4%',
  },
}));
