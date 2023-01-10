import { createUserWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { state } from "../common/state";
import { auth, db } from "./firebase.config";

export async function NewUser(user: any) {
  const { firstname, lastname, phone, email, password } = user;

  state.user = user;

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
  }).catch((error) => {
    state.error = error;
  });
}

export function getUser() {
  // get user from database
  console.log(auth.currentUser);
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, [auth, setUser]);

  return user;
}


// make a function to log in user with email and password
