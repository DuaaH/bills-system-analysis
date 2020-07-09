import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  typeContainer: {
    padding: theme.spacing(2),
  },
  root: {
    width: 120,
    height: 120,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    margin: theme.spacing(1),
  },
  addBtnGrid: {
    paddingRight: 23,
    marginTop: -8,
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  addIcon: { fontSize: 40 },
  fab: {},
}));
