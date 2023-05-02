import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                //save in database
                saveUser(email, name)

                //update user name
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });



                history.replace('/');

            })
            .catch((error) => {

                setError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const destination = location.state?.from || '/'
                history.replace(destination);

                setError('');

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            } else {
                setUser({})

            }
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, [])


    useEffect(() => {

        fetch(`https://niche-website-server-side-wwab.vercel.app/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))


    }, [user.email])



    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }


    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://niche-website-server-side-wwab.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }




    return {
        user,
        admin,
        isLoading,
        error,
        registerUser,
        loginUser,
        logOut
    }
};

export default useFirebase;