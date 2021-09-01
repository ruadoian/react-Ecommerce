import { FeaturedPost } from "../components";
import PropTypes from 'prop-types';

export function FeaturedContainer({post}){
  return (
    <FeaturedPost style={{ backgroundImage: `url(${post.image})` }}>
      <FeaturedPost.Image style={{ display: 'none' }} src={post.image} alt="Banner Image" /> 

      <FeaturedPost.Grid container>
          <FeaturedPost.Grid item md={6}>
              <FeaturedPost.Banner>
                <FeaturedPost.Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {post.title}
              </FeaturedPost.Typography>
              <FeaturedPost.Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </FeaturedPost.Typography>
              </FeaturedPost.Banner>
          </FeaturedPost.Grid>
      </FeaturedPost.Grid>

    </FeaturedPost>)
}

FeaturedContainer.propTypes = {
  post: PropTypes.object,
};