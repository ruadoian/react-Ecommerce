import { HeaderContainer } from "../containers/header";
import {FeaturedContainer} from "../containers/featuredpost"
import { SubFeaturedPostContainer } from "../containers/subfeaturedpost";

export default function Home(){
    return  <>
                <HeaderContainer/>  
                <FeaturedContainer/>
                <SubFeaturedPostContainer/>
            </>
}