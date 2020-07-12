import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: 150,
    height: 150,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    margin: theme.spacing(1),
  },
}));
