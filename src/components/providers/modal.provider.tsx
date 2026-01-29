"use client";
import React from "react";
import ReactDOM from "react-dom";

interface IModalContext {
  modal?: React.ReactNode;
  setModal: React.Dispatch<React.SetStateAction<IModalContext["modal"]>>;
}

const ModalContext = React.createContext<null | IModalContext>(null);
export const useModalCtx = () => React.use(ModalContext)!;

export default function ModalProvider(properties: React.PropsWithChildren) {
  const [modal, setModal] = React.useState<IModalContext["modal"]>();

  const ModalComponent = React.useMemo(() => {
    if (typeof window === "undefined") return null;
    const portalElement = document.querySelector("#portal")!;

    return ReactDOM.createPortal(modal, portalElement);
  }, [modal]);

  React.useEffect(() => {
    const portal = document.querySelector<HTMLDivElement>("#portal");
    function handleClickEvent(ev: PointerEvent) {
      if (ev.target === portal) setModal(undefined);
    }

    portal?.addEventListener("click", handleClickEvent);
    return () => portal?.removeEventListener("click", handleClickEvent);
  }, [modal]);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {ModalComponent}
      {properties.children}
    </ModalContext.Provider>
  );
}
