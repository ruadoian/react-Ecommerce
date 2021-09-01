import {useState, useEffect} from "react"
import {auth, handleUserProfile} from "../firebase/utils"

export default function useAuthListener(){
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const authListener = auth.onAuthStateChanged(async userAuth =>{
            if(userAuth){
                const useRef = await handleUserProfile(userAuth);
                useRef.onSnapshot(snapshot =>{
                    setCurrentUser({
                        id:snapshot.id,
                        ...snapshot.data()
                    })
                })
            }

            setCurrentUser(userAuth)
        })
        return () => authListener
    }, [])

    return {currentUser}
}
