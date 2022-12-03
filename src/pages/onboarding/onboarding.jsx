import React, { useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "../../common/state";
import { TextInput, NumberInput } from "../../components/form/form.input";
import { getUser, NewUser } from "../../services/firebase.services";
import styles from "./onboarding.module.scss";

function Form({ setStep }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const entries = Object.fromEntries(data.entries());
    // signup a new user
    NewUser(entries);
    // if successful, setStep(2)
    setStep(2);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.UserForm}>
        <TextInput label="First Name" />
        <TextInput label="Last Name" />
        <NumberInput label="Phone" />
        <TextInput label="Email" />
        <TextInput label="Password" />
        <p>Password must be 6char +</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const snap = useSnapshot(state);

  getUser();
  return (
    <div className={styles.Onboarding}>
      {step === 1 ? (
        <>
          <h1>Sign Up</h1>
          <Form setStep={setStep} />
        </>
      ) : step === 2 ? (
        <>
          <h1>Next Steps</h1>
          <p> Hey, {snap.user}</p>
        </>
      ) : (
        <h1>TODO</h1>
      )}
      {snap.error && <p>{snap.error.message}</p>}
    </div>
  );
}
