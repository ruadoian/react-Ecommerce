import { SubFeaturedPost } from "../components";

import { Hidden, CardMedia } from "@material-ui/core";

export function SubFeaturedPostContainer({post}){
  return(
       <SubFeaturedPost container spacing={3}>
         {post.map(post =>(
           <SubFeaturedPost.Wrapper item xs={6}>
           <SubFeaturedPost.CardWrapper component="a" href="#">
             <SubFeaturedPost.Card className="">
               <SubFeaturedPost.CardDetail>
                 <SubFeaturedPost.CardContent>
                    <SubFeaturedPost.Typography component="h2" variant="h5">
                        {post.title}
                    </SubFeaturedPost.Typography>
                    <SubFeaturedPost.Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                    </SubFeaturedPost.Typography>

                    <SubFeaturedPost.Typography variant="subtitle1" paragraph>
                        {post.description}
                    </SubFeaturedPost.Typography>
                    <SubFeaturedPost.Typography variant="subtitle1" color="primary">
                      Continue reading...
                    </SubFeaturedPost.Typography>
                 </SubFeaturedPost.CardContent>
               </SubFeaturedPost.CardDetail>

              <SubFeaturedPost.Hidden image={post.image} title={post.imageTitle}/>

             </SubFeaturedPost.Card>
           </SubFeaturedPost.CardWrapper>
         </SubFeaturedPost.Wrapper>
         ))}
       </SubFeaturedPost>
     )
}