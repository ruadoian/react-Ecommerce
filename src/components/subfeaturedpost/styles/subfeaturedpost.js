import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components"

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
      display: 'flex',
  },
  cardMedia: {
      width: 160,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  export const CardDetail = styled.div`
    flex:2;
  `