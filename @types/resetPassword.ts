export type ResetPasswordViews = "RESET" | "OTP" | "PASSWORD"

export interface ResetPasswordViewsProps {
    changeView: (view: ResetPasswordViews) => void
}