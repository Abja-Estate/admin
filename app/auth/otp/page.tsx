"use client"
import AuthLayout from "@/components/AuthLayout"
import OtpVerifyScreen from "@/components/reset-password/otpVerifyScreen"
import React from "react"

const page = () => {
  return (
    <AuthLayout>
      <div className="h-full">
        <OtpVerifyScreen
          changeView={() => {
            ;() => null
          }}
        />
      </div>
    </AuthLayout>
  )
}

export default page
