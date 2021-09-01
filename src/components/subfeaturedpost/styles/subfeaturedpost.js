import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components"

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
      display: 'flex',
  },
  cardMedia: {
      width: 160,
      height: 0,
    },
  });

  export const CardDetail = styled.div`
    flex:2;
  `