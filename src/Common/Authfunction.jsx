import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
export function Authenticaion(actionType, formInput) {
    return new Promise((resolve) => {
        if (actionType == 'login') {
            signInWithEmailAndPassword(auth, formInput.email, formInput.password).then((usercredential) => {
                const user = usercredential.user
                resolve(user)
            }).catch((error) => {
              resolve(error)
            })
        }
        if (actionType == 'signup') {
            createUserWithEmailAndPassword(auth, formInput.email, formInput.password).then((usercredential) => {
                const user = usercredential.user
                resolve(user)
            }).catch((error) => {
              resolve(error)
            })
        }
        else {
            console.log("error");
        }
    })

}