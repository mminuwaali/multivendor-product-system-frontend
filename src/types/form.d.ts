interface ISignUpForm {
  role: string;
  email: string;
  phone: string;
  full_name: string;
  password?: string;
  uuid?: string;
  temp_token?: string;
}
interface ISignInForm {
  email: string;
  roles: string[];
  password: string;
}
interface ISignInVerifyForm {
  otp: string;
  uuid: string;
  purpose?: "SIGN_IN";
}

interface ISignUpInitForm {
  role: string;
  email: string;
  phone: string;
  full_name: string;
}

interface ISignUpVerifyEmailForm {
  otp: string;
  uuid: string;
  type?: "email";
}

interface ISignUpVerifyPhoneForm {
  otp: string;
  uuid: string;
  type?: "phone";
}

interface ISignUpVerifyForm {
  otp: string;
  uuid: string;
}

interface ISignUpSetPasswordForm {
  password: string;
  uuid: string;
  confirm_password: string;
}

interface ISignUpProfileForm {
  age: number;
  gender: string;
}

interface IAddressForm {
  city: string;
  phone: string;
  state_id: number | null;
  lga_id: number | null;
  is_default: boolean;
}

interface IPasswordResetRequestForm {
  key: "email" | "phone";
  value: string;
}

interface IPasswordResetVerifyForm {
  uuid: string;
  otp: string;
  password: string;
  confirmPassword?: string;
}

interface IUserForm {
  avatar: File | string | null;
  last_name: string;
  first_name: string;
}

interface IPasswordChangeForm {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

interface IPasswordResetInitForm {
  key: "email" | "phone";
  value: string;
}
