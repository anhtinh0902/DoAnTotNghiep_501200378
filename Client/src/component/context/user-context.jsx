import React, { useEffect, createContext, useState} from "react";
import { auth, createUserProfileDocument} from '../../firebase';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(Snapshot => {
                    setUser({
                        id: Snapshot.id,
                        ...Snapshot.data(),
                    });
                    setLoading(false)
                }) 
            }else {
                setUser(userAuth);
                setLoading(false)
            }
        });

        return () => unsubcribeFromAuth();
    },[]);

    const userContext = { user, loading}
    if (loading) { return <div >Loading...</div>}
    return (
        <UserContext.Provider value={userContext}>
            {
                children
            }
        </UserContext.Provider>
    )
}

export default UserContextProvider;