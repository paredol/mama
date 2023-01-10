import React from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import {navProps} from "../../common/types"
import { getAuth, signOut } from "firebase/auth";
import { useUser } from '../../api/firebase.services';
import { useNavigate } from "react-router-dom";

export default function Navbar({ menu, setMenu }: navProps) {
  const user = useUser();
    const navigate = useNavigate();

  // const router = useRouter();
  function signUserOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      console.log(error);
      
    });
  }
  return (
    <div className="flex flex-row justify-between">
      <h3 className="text-2xl p-2 font-bold w-min">MaMarket</h3>
     {user ? <button className="p-2 text-sm font-bold" onClick={()=>signUserOut()}>Sign Out</button>: <button className="p-2 text-sm font-bold" onClick={()=>navigate("/signin") } >Sign In</button>}
          <div className="contents md:hidden">
              <Hamburger toggled={menu} toggle={setMenu} />
          </div>
      </div>
  )
}
