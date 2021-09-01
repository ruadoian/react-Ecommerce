import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Wrapper, Image, Banner} from "./styles/featured"
import {featuredStyles} from "./styles/featured"

export default function FeaturedPost({children, ...restProps}){
  const classes = featuredStyles();
  return <Paper {...restProps} className={classes.mainFeaturedPost}>{children}</Paper>
}

FeaturedPost.Image = function FeaturedPostImage({...restProps}){
  return <Image {...restProps} />
}

FeaturedPost.Grid = function FeaturedPostGrid({children, ...restProps}){
  return <Grid {...restProps}>{children}</Grid>
}

FeaturedPost.Typography = function FeaturedPostTypography({children, ...restProps}){
  return <Typography {...restProps}>{children}</Typography>
}

FeaturedPost.Banner = function FeaturedPostBanner({children, ...restProps}){
  const classes = featuredStyles()
  return <Banner {...restProps} className={classes.mainFeaturedPostContent}>{children}</Banner>
}