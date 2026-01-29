"use client";

// External
import { useMutation } from "@tanstack/react-query";

// Internal
import { api } from "@/utils/request";
import { TokenManager } from "@/utils/token";
import { useAuthCtx } from "@/components/providers/auth.provider";

// Sign Out
export function useSignOut() {
  const authContext = useAuthCtx();

  return function () {
    TokenManager.clearTokens();
    authContext.setLogged(false);
  };
}

// Sign In
export function useSignIn() {
  const authContext = useAuthCtx();

  return useMutation({
    mutationKey: ["useSignIn"],
    async mutationFn(data: ISignInForm) {
      const res = await api.post("/auth/signin", data);
      return res.data as ITokenModel;
    },
    onSuccess(data: ITokenModel) {
      authContext.setLogged(true);
      TokenManager.setTokens(data.access, data.refresh);
    },
  });
}

// Sign Up
export function useSignUp() {
  const authContext = useAuthCtx();

  return useMutation({
    mutationKey: ["useSignUp"],
    async mutationFn(data: ISignUpForm) {
      const res = await api.post("/auth/signup", data);
      return res.data as ITokenModel;
    },
    onSuccess(data: ITokenModel) {
      authContext.setLogged(true);
      TokenManager.setTokens(data.access, data.refresh);
    },
  });
}

/*
export function useRequestPasswordReset() {
  return useMutation({
    mutationKey: ["useRequestPasswordReset"],
    async mutationFn(data: IPasswordResetRequestForm) {
      // Backend expects {key: "email", value: "..."}
      const res = await api.post("auth/password-reset/init/", data);
      return res.data;
    },
  });
}

export function usePasswordResetVerify() {
  return useMutation({
    mutationKey: ["usePasswordResetVerify"],
    async mutationFn(data: IPasswordResetVerifyForm) {
      const res = await api.post("auth/password-reset/verify/", data);
      return res.data;
    },
  });
}

export function usePasswordResetResend() {
  return useMutation({
    mutationKey: ["usePasswordResetResend"],
    async mutationFn(data: { uuid: string }) {
      const res = await api.post("auth/password-reset/resend/", data);
      return res.data;
    },
  });
}

export function useChangePassword() {
  return useMutation({
    mutationKey: ["useChangePassword"],
    async mutationFn(data: { old_password: string; new_password: string }) {
      const res = await api.post("auth/password/change/", data);
      return res.data;
    },
  });
}
*/
