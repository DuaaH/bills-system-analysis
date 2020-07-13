import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionBackground: {
    backgroundColor: theme.palette.secondary.main,
  },
  conentFont: {
    color: '#000',
  },
  textFieldStyle: {
    width: 100,
    margin: theme.spacing(1),
  },
  statisticsLink: {
    marginBottom: theme.spacing(0.5),
  },
}));
