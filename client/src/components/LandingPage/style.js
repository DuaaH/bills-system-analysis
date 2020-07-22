import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: { width: '100%', backgroundColor: theme.palette.primary.main },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column ',
  },
  button: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(6),
  },
  typographyStyle: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    marginRight: theme.spacing(3),

    fontSize: '1rem',
  },
  linkStyel: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
