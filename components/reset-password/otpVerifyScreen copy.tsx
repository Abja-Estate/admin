"use client"
import Image from "next/image"
import { FormEvent, useState } from "react"
import OTPInput from "react-otp-input"
import Button from "../button"
import { BASE_URL } from "@/config"
import toast from "react-hot-toast"
import { isBrowser } from "@/utils/helpers"

export default function OtpVerifyScreen({
  changeView,
}: ResetPasswordViewsProps) {
  const [loading, setLoading] = useState<boolean>(false)
  const [countdown, setCountdown] = useState<number>(0)
  const [canResend, setCanResend] = useState<boolean>(true)

  const [otp, setOtp] = useState<any>("")

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const form_email = isBrowser ? localStorage.getItem("form_email") : ""

      console.log("form_email", form_email)

      const response = await fetch(`${BASE_URL}/auth/admin/verify_otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "4f1fe63a-5f8b-4e7f-ad38-e68445079351",
        },
        body: JSON.stringify({
          email: form_email,
          otp: otp,
        }),
      })

      if (response.ok) {
        const responseData = await response.json()

        if (responseData.statusCode === 200) {
          toast.success("Otp confirmation successful.")

          changeView("PASSWORD")
        } else {
          toast.error("Invalid OTP, please check")
        }
      } else {
        // Handle non-OK responses (e.g., 4xx or 5xx status codes)
        const errorText = await response.text()
        console.error(`Server responded with error: ${errorText}`)
        toast.error("An error occurred while processing the request.")
      }
    } catch (error) {
      console.error("Error during OTP verification:", error)
      toast.error("An error occurred while processing the request.")
    } finally {
      setLoading(false)
    }
  }

  // resend otp, countdown

  //4 mins countdown
  const startCountDown = () => {
    setCanResend(false)

    setCountdown(240) // 240 seconds = 4 mins

    const interval = setInterval(() => {
      setCountdown((prevCountdown: number) => prevCountdown - 1)

      if (countdown === 0) {
        clearInterval(interval)
        setCanResend(true)
      }
    }, 1000)
  }

  const isDisabled = otp.length < 5

  // otp resend
  const startCountdown = () => {
    setCanResend(false)
    setCountdown(240) // 240 seconds = 4 minutes

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)

      if (countdown === 0) {
        clearInterval(interval)
        setCanResend(true)
      }
    }, 1000)
  }

  const resendOtp = async () => {
    if (!canResend) {
      return
    }

    try {
      // For example:
      const form_email = isBrowser ? localStorage.getItem("form_email") : ""

      const response = await fetch(`${BASE_URL}/auth/admin/verify_otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "4f1fe63a-5f8b-4e7f-ad38-e68445079351",
        },
        body: JSON.stringify({
          email: form_email,
          otp: otp,
        }),
      })

      if (response.ok) {
        const responseData = await response.json()

        if (responseData.statusCode === 200) {
          toast.success("OTP resent successfully.")
          startCountdown() // Start the countdown after successful OTP resend
        } else {
          toast.error("Failed to resend OTP.")
        }
      } else {
        const errorText = await response.text()
        console.error(`Server responded with error: ${errorText}`)
        toast.error("An error occurred while resending OTP.")
      }
    } catch (error) {
      console.error("Error during OTP resend:", error)
      toast.error("An error occurred while resending OTP.")
    }
  }

  return (
    <div>
      <header className="grid place-items-center gap-[24px] pb-[32px]">
        <Image
          src="/images/abj-logo.svg"
          alt="Abj logo"
          width={70}
          height={100}
        />
        <h1 className="text-primary text-[32px] font-bold">OTP Verification</h1>
        <p className="font-semibold text-[14px] text-textcolor100">
          We&rsquo;ve sent a code to your email and phone number. <br />
          Please input the code we have sent.
        </p>
      </header>
      <form
        className="flex flex-col gap-[32px] w-full max-w-[500px] mx-auto"
        onSubmit={submit}
      >
        <fieldset>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            inputStyle="!h-[45px] !w-[31px] bg-transparent outline-none border-b-[1px] border-b-[#3A3A3A]"
            containerStyle="max-w-max gap-3 mx-auto"
            renderInput={(props) => <input {...props} />}
            shouldAutoFocus={true}
          />
        </fieldset>
        <fieldset>
          <p className="text-center">
            Didn&rsquo;t get a code?{" "}
            <span
              className={`text-[#0174C7] ${
                !canResend
                  ? "text-gray-500 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={canResend ? resendOtp : undefined}
            >
              {canResend ? "Click to resend" : `Resend in ${countdown} seconds`}
            </span>
          </p>
        </fieldset>
        <fieldset className="pt-[50px]">
          <Button disabled={isDisabled} loading={loading}>
            Continue
          </Button>
        </fieldset>
      </form>
    </div>
  )
}
