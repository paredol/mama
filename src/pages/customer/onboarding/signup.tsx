import { useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "../../../common/state";
// import { getUser } from "../../../common/state";
import { SignUpForm } from "../../../components/form/form.signup";
import { AuthHeader } from "../../../components/routes";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const { user, error } = useSnapshot(state);

  // console.log(user);

  return (
    <div className="flex flex-col w-96 justify-center">
      {step === 1 ? (
        <div className="flex flex-col gap-y-4">
          <AuthHeader type="up" />
          <SignUpForm setStep={setStep} />
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
