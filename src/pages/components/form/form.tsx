import { Dispatch, FormEvent, SetStateAction } from "react";
import { NewUser } from "../../../services/firebase.services";
import { IntInput, TextInput } from "./form.input";
import styles from "./form.module.scss";

export interface userProps {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
}

export function Form({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const entries = Object.fromEntries(data.entries());
    console.log(entries);

    // signup a new user
    NewUser(entries);
    // if successful, setStep(2) to show next step in onboarding
    setStep(2);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.UserForm}>
        <TextInput label="First Name" />
        <TextInput label="Last Name" />
        <IntInput label="Phone" />
        <TextInput label="Email" />
        <TextInput label="Password" />
        <p>Password must be 6char +</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
