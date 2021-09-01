import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1.5),
      flexShrink: 0,
    },
    toolbarBtn:{
      margin:'3px',
    }

  }));