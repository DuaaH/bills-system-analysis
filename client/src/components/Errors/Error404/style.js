import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  oops: {
    margin: '20% 0 15% 0',
    color: theme.palette.secondary.main,
  },
  error: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    marginBottom: '15%',
  },
  errorMessage: {
    marginBottom: '10%',
    textAlign: 'center',
  },
  errorDescription: {
    textAlign: 'center',
    fontSize: '20px',
  },
  goToHome: {
    marginTop: '10%',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '25px',
    width: '110%',
    fontSize: '20px',
    height: '50px',
    justifyItems: 'center',
  },
}));
