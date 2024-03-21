"use client"
import { useState } from "react"
import ResetPasswordScreen from "@/components/reset-password/resetPasswordScreen"
import OtpVerifyScreen from "@/components/reset-password/otpVerifyScreen"
import PasswordScreen from "@/components/reset-password/passwordScreen"
import { useRouter } from "next/navigation"
import AuthLayout from "@/components/AuthLayout"
export default function ResetPassword() {
  const router = useRouter()

  const [views, setViews] = useState<ResetPasswordViews>("RESET")

  const changeView = (view: ResetPasswordViews) => setViews(view)

  const renderView = () => {
    switch (views) {
      case "RESET": {
        return <ResetPasswordScreen changeView={changeView} />
      }
      case "OTP": {
        return <OtpVerifyScreen changeView={changeView} />
      }
      case "PASSWORD": {
        return <PasswordScreen changeView={changeView} />
      }
      default: {
        return <ResetPasswordScreen changeView={changeView} />
      }
    }
  }

  const backwardNavigate = () => {
    if (views === "RESET") {
      return router.back()
    }
    if (views == "OTP") {
      return changeView("RESET")
    }
    if (views === "PASSWORD") {
      return changeView("OTP")
    }
  }

  return (
    <AuthLayout backwardNavigate={backwardNavigate}>
      <div className="px-[24px] pb-[230px]">{renderView()}</div>
    </AuthLayout>
  )
}
