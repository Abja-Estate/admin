"use client";
import { ResetPasswordViewsProps } from "@/type";
import Image from "next/image";
import { FormEvent, useState } from "react";
import OTPInput from "react-otp-input";
import Button from "../button";

export default function OtpVerifyScreen({
  changeView,
}: ResetPasswordViewsProps) {
  const [loading, setLoading] = useState(false);

  const [otp, setOtp] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    changeView("PASSWORD");
  };

  const isDisabled = otp.length < 6;

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
        <p className="font-semibold text-[14px] text-[#333436]">
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
            numInputs={6}
            inputStyle="!h-[45px] !w-[31px] bg-transparent outline-none border-b-[1px] border-b-[#3A3A3A]"
            containerStyle="max-w-max gap-3 mx-auto"
            renderInput={(props) => <input {...props} />}
            shouldAutoFocus={true}
          />
        </fieldset>
        <fieldset>
          <p className="text-center">
            Didn&rsquo;t get a code?{" "}
            <span className="text-[#0174C7]">Click to resend</span>
          </p>
        </fieldset>
        <fieldset className="pt-[50px]">
          <Button disabled={isDisabled} loading={loading}>
            Continue
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
