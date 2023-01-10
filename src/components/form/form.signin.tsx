import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent } from "react";
import { useNavigate } from "react-router";
import { state } from "../../common/state";
import { TextInput } from "./form.input";

export function SignInForm() {
  const navigate = useNavigate();
  const auth = getAuth();
  
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const entries = Object.fromEntries(data.entries());
    console.log(data.entries());
    const {email, password} = entries;
signInWithEmailAndPassword(auth, email as string, password as string)
  .then((userCredential) => {
    // Signed in 
      navigate("/")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
   state.error = error;
  });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <TextInput label="Email" />
        <TextInput label="Password" />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}
