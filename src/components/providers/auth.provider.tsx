"use client";
import React from "react";
import { useTokenListener } from "@/hooks/token.hook";

interface IAuthCtx {
  logged?: boolean;
  setLogged: React.Dispatch<React.SetStateAction<IAuthCtx["logged"]>>;
}

const AuthContext = React.createContext<null | IAuthCtx>(null);
export const useAuthCtx = () => React.use(AuthContext)!;

export default function AuthProvider(props: React.PropsWithChildren) {
  const [logged, setLogged] = React.useState<IAuthCtx["logged"]>();
  useTokenListener(setLogged);

  return (
    <AuthContext.Provider value={{ logged, setLogged }}>
      {props.children}
    </AuthContext.Provider>
  );
}
