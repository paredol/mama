import { Dispatch, SetStateAction } from "react";

export interface navProps { menu: boolean, setMenu: Dispatch<SetStateAction<boolean>> }

export interface userProps {
  firstname?: string;
  lastname?: string;
  phone?: string;
  email: string;
  password: string;
}