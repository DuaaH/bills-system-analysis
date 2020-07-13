import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  image: {
    margin: theme.spacing(5),
    width: '100px',
    height: '100px',
  },
  Button: {
    backgroundColor: theme.palette.secondary.main,
    marginLeft: '130px',
    marginTop: theme.spacing(5),
  },
  updateButt: {
    width: '100%',
  },
  gridPosition: {
    textAlign: 'right',
  },
  root: {
    paddingTop: '25px',
  },
  // text: {
  //   textAlign: ' right',
  // },
}));
