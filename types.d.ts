declare module "*.json";

interface adminUserType {
  img: string;
  name: string;
  role: string;
}

interface RadioInputProps {
  checked?: boolean;
  onClick?: () => void;
}

type ResetPasswordViews = "RESET" | "OTP" | "PASSWORD";

interface ResetPasswordViewsProps {
  changeView: (view: ResetPasswordViews) => void;
}
