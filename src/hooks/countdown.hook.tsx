"use client";

// External
import React from "react";

interface useCountdownProps {
  initial: number;
  autoStart?: boolean;
}

export function useCountdown(props: useCountdownProps) {
  const [count, setCount] = React.useState(props.initial);
  const [active, setActive] = React.useState(Boolean(props.autoStart));

  React.useEffect(() => {
    if (active && count > 0) {
      const timeout = setTimeout(() => setCount(count - 1), 1000);
      return () => void clearTimeout(timeout);
    }
  }, [active, count]);

  function setStatus(status: boolean) {
    setActive(status);
  }

  function reset() {
    setActive(true);
    setCount(props.initial);
  }

  return { active, count, reset, setStatus };
}
