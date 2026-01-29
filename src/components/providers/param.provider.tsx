"use client";

// Framework
import React from "react";

interface IParam {
  page: number;
  total: number;
  search: string;
  pageSize: number;
  [key: string]: unknown;
}

interface IParamsContext {
  params: Partial<IParam>;
  update: (updates: Partial<IParam>) => void;
  replace: React.Dispatch<React.SetStateAction<IParamsContext["params"]>>;
}

interface IParamsProps extends React.PropsWithChildren {
  update?: Partial<IParam>;
  replace?: Partial<IParam>;
}

const ParamsContext = React.createContext<null | IParamsContext>(null);
export const useParamsCtx = () => React.use(ParamsContext)!;

export default function ParamsProvider(props: IParamsProps) {
  const [params, setParams] = React.useState<IParamsContext["params"]>(
    props.replace ?? {
      page: 1,
      total: 0,
      search: "",
      pageSize: 20,
      ...props.update,
    },
  );

  function update(updates: Partial<IParam>) {
    setParams((prev: IParamsContext["params"]) => {
      const updateKeys = Object.keys(updates);
      const isTotalOnly = updateKeys.length === 1 && updateKeys[0] === "total";

      if (isTotalOnly) {
        return { ...prev, ...updates };
      }

      const isPageUpdate = updateKeys.indexOf("page") !== -1;
      const nextPage = isPageUpdate ? updates.page : 1;

      return { ...prev, ...updates, page: nextPage };
    });
  }

  return (
    <ParamsContext.Provider value={{ params, update, replace: setParams }}>
      {props.children}
    </ParamsContext.Provider>
  );
}
