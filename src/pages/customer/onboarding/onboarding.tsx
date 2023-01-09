import { useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "../../../common/state";
// import { getUser } from "../../../common/state";
import { Form } from "../../../components/form/form";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const { user, error } = useSnapshot(state);

  // console.log(user);



  return (
    <div className="flex w-full justify-center">
      {step === 1 ? (
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row rounded-xl justify-around items-center w-full h-20 bg-slate-200 dark:bg-slate-800 p-3">
          <h1>Sign Up</h1>
          <p>or</p>
            <a href="/signin">Sign In</a>
          </div>
          <Form setStep={setStep} />
        </div>
      ) : step === 2 ? (
        <>
          <h1>Next Steps</h1>
          <p> {`Hey, ${user.firstname}`}</p>
        </>
      ) : (
        <h1>TODO</h1>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
}
