"use client";
import React from "react";
import { TokenManager } from "utils/token";

const interval = 60_000;
export function useTokenListener(callback: (logged: boolean) => void) {
  React.useEffect(() => {
    checkToken();
    async function checkToken() {
      try {
        const token = TokenManager.getAccessToken();
        const isTokenExpired = TokenManager.isTokenExpired(token);
        if (isTokenExpired) await TokenManager.refreshAccessToken();
      } catch (error) {
        TokenManager.clearTokens();
        console.error("Error in token listener:", error);
      } finally {
        callback(Boolean(TokenManager.getAccessToken()));
      }
    }

    const intervalId = setInterval(checkToken, interval);
    return () => clearInterval(intervalId);
  }, [callback]);
}
