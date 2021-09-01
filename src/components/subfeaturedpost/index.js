import {
  Grid,
  Card, 
  Hidden, 
  Typography,
  CardContent, 
  CardActionArea} from "@material-ui/core"

  import CardMedia from '@material-ui/core/CardMedia';

import {useStyles} from "./styles/subfeaturedpost"
import {CardDetail} from "./styles/subfeaturedpost"

export default function SubFeaturedPost({children, ...restProps}){
  return <Grid {...restProps}>{children}</Grid>
}

SubFeaturedPost.Wrapper = function SubFeaturedPostWrapper({children, ...restProps}){
  return <Grid {...restProps}>{children}</Grid>
}

SubFeaturedPost.CardWrapper = function SubFeaturedPostCardWrapper({children, ...restProps}){
  
  return <CardActionArea {...restProps}>{children}</CardActionArea>
}

SubFeaturedPost.Card = function SubFeaturedPostCard({children, ...restProps}){
  const classes = useStyles()
  return <Card {...restProps} className={classes.Card}>{children}</Card>
}

SubFeaturedPost.CardDetail = function SubFeaturedPostCardDetail({children, ...restProps}){
  const classes = useStyles()
  return <CardDetail {...restProps} className={classes.CardDetail}>{children}</CardDetail>
}

SubFeaturedPost.CardContent = function SubFeaturedPostCardContent({children, ...restProps}){
  return <CardContent {...restProps}>{children}</CardContent>
}

SubFeaturedPost.Typography = function SubFeaturedPostTypography({children, ...restProps}){
  return <Typography {...restProps}>{children}</Typography>
}

SubFeaturedPost.Hidden = function SubFeaturedPostHidden({image, title}){
  const classes = useStyles()
  return <Hidden xsDown>
          {image}
          <CardMedia image={image} title={title} className={classes.CardMedia} />
        </Hidden>
}