import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    marginBottom: '1%',
    marginLeft: '4%',
    fontFamily: 'Roboto',
    fontstyle: 'normal',
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: '150%',
    display: 'flex',
    alignItems: 'flex-end',
    width: '294px',
    height: '130px',
  },
  instructions: {
    marginLeft: '4%',
    marginRight: '4%',
    marginBottom: '1%',
    fontFamily: 'Roboto',
    fontstyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '150%',
    display: 'flex',
    alignItems: 'flex-end',
    height: '85px',
  },
  signUpBtn: {
    height: '50px',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: '7px',
  },
  inputBox: {
    height: '44px',
    borderColor: '#FFF !important',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: '5%',
    width: '100%',
    borderBottom: '1px solid #FFFFFF',
  },
  input: {
    height: '40px',
  },
  errorMessage: {
    color: '#F08080',
    marginBottom: '10%',
    marginLeft: '2%',
    width: '100%',
  },
  loginForm: {
    width: '100%',
    margin: '0 4% 10% 4%',
  },
}));
