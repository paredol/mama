import React from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import {navProps} from "@common/ui.d"

export default function Navbar({menu, setMenu}:navProps) {
  return (
    <div className="flex flex-row justify-between">
          <h3 className="text-2xl p-2 font-bold w-min">MaMarket</h3>
          <div className="contents md:hidden">
              <Hamburger toggled={menu} toggle={setMenu} />
          </div>
      </div>
  )
}
