import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { state } from "../common/state";
import { auth, db } from "./firebase.config";

export async function NewUser(user) {
    const { firstname, lastname, phone, email, password } = user;

    // Create a new user
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            state.error = error;
        });
    // generate user id from name 
    const id = firstname + lastname;
    // Add user to database
    await setDoc(doc(db, "users", id), {
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        password: password,
    })
        .catch((error) => {
            state.error = error;
        });
}

export function getUser() {
    // get user from database
    console.log(auth.currentUser);
}