import { HeaderContainer } from "../containers/header";
import {FeaturedContainer} from "../containers/featuredpost"
import { SubFeaturedPostContainer } from "../containers/subfeaturedpost";
import {mainFeaturedPost} from "../constants/featuredPostData"
import {featuredPosts} from "../constants/subFeaturedPostData"
import {sections} from "../constants/headerdata"


export default function Home({currentUser}){
  

    return  <>
                <HeaderContainer sections={sections} currentUser={currentUser} />  
                <FeaturedContainer post={mainFeaturedPost}/>
                <SubFeaturedPostContainer post={featuredPosts} />
            </>
}