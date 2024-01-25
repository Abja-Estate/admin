declare module "*.json";

export interface adminUserType {
  img: string;
  name: string;
  role: string;
}

export type ResetPasswordViews = "RESET" | "OTP" | "PASSWORD";

export interface ResetPasswordViewsProps {
  changeView: (view: ResetPasswordViews) => void;
}

export interface FormData {
  email: string;
  password: string | any;
}
