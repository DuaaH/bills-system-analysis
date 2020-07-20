import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: { width: '100%', backgroundColor: theme.palette.primary.main },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column ',
  },
  button: {
    margin: theme.spacing(3),
    width: '80%',
    ml: theme.spacing(6),
  },
  header: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    marginLeft: theme.spacing(2),
  },
  typographyStyle: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(6),
  },
}));
