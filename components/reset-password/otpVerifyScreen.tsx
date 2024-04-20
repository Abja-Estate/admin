"use client"
import Image from "next/image"
import { FormEvent, useState } from "react"
import OTPInput from "react-otp-input"
import Button from "../button"
import { BASE_URL } from "@/config"
import toast from "react-hot-toast"
import { useAdminVerifyOTPMutation } from "@/redux/endpoints"
import { useAppSelector } from "@/redux/hooks"
import { redirect, useRouter } from "next/navigation"
import { AnyObject } from "yup"

export default function OtpVerifyScreen({
  changeView,
}: ResetPasswordViewsProps) {
  const { auth } = useAppSelector((state) => state.admin)
  if (!auth) {
    redirect("/auth/login")
  }
  const router = useRouter()
  const [countdown, setCountdown] = useState<number>(0)
  const [canResend, setCanResend] = useState<boolean>(true)
  const [verifyOtp, { isLoading }] = useAdminVerifyOTPMutation()
  const [otp, setOtp] = useState<any>("")

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response: AnyObject = await verifyOtp({
      email: auth.email,
      actor: "admin",
      otp: otp,
    })
    if ("data" in response && response.statusCode == 200) {
      toast.success("Otp confirmation successful.")
      router.push("/auth/login")
    } else if (response.error) {
      if (response.error.status == "FETCH_ERROR") {
        toast.error("Please, check your connection.")
      }
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
    return
    if (!canResend) {
      return
    }

    const response: AnyObject = await verifyOtp({
      email: auth?.email ?? "",
      actor: "admin",
      otp: otp,
    })
    if ("data" in response && response.statusCode == 200) {
      toast.success("Otp resent successful.")
      router.push("/auth/login")
    } else if (response.error) {
      if (response.error.status == "FETCH_ERROR") {
        toast.error("Please, check your connection.")
      }
    }
  }

  return (
    <div className="flex flex-col h-full">
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
        className="flex h-full flex-col gap-[32px] w-full max-w-[500px] mx-auto"
        onSubmit={submit}
      >
        <fieldset>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            inputStyle="!h-[45px] mx-4 !w-[31px] bg-transparent outline-none border-b-[1px] border-b-[#3A3A3A]"
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
        <fieldset className="pt-[50px] mt-auto mb-[20%]">
          <Button disabled={isDisabled} loading={isLoading}>
            Continue
          </Button>
        </fieldset>
      </form>
    </div>
  )
}
