import React from 'react'
import { useSnapshot } from 'valtio';
import { state } from '../../../common/state';
import { SignInForm } from '../../../components/form/form.signin';
import { AuthHeader } from '../../../components/routes'



export default function Signin() {
  const { user, error } = useSnapshot(state);

  return (
     <div className="flex flex-col w-96 justify-center">
        <div className="flex flex-col gap-y-3">
          <AuthHeader type="in" />
          <SignInForm/>
        </div>
      {error && <p>{error.message}</p>}
    </div>
  )
}
