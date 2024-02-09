"use client";
import { ArrowLeftIcon, SearchIcon } from "@/components/svgs";
import authImage1 from "@/public/images/auth-img-1.png";
import authImage2 from "/public/images/auth-img-2.svg";
import authImage3 from "/public/images/auth-img-3.svg";
import Image from "next/image";
import { useState } from "react";
import ResetPasswordScreen from "@/components/reset-password/resetPasswordScreen";
import OtpVerifyScreen from "@/components/reset-password/otpVerifyScreen";
import PasswordScreen from "@/components/reset-password/passwordScreen";
import { useRouter } from "next/navigation";
export default function ResetPassword() {
  const router = useRouter();

  const [views, setViews] = useState<ResetPasswordViews>("RESET");

  const changeView = (view: ResetPasswordViews) => setViews(view);

  const renderView = () => {
    switch (views) {
      case "RESET": {
        return <ResetPasswordScreen changeView={changeView} />;
      }
      case "OTP": {
        return <OtpVerifyScreen changeView={changeView} />;
      }
      case "PASSWORD": {
        return <PasswordScreen changeView={changeView} />;
      }
      default: {
        return <ResetPasswordScreen changeView={changeView} />;
      }
    }
  };

  const backwardNavigate = () => {
    if (views === "RESET") {
      return router.back();
    }
    if (views == "OTP") {
      return changeView("RESET");
    }
    if (views === "PASSWORD") {
      return changeView("OTP");
    }
  };

  return (
    <div className="flex min-h-[100vh]">
      <figure className="relative basis-[35%]">
        <Image
          src={authImage3}
          alt="House"
          className="w-full h-full object-cover"
        />
        <button
          onClick={backwardNavigate}
          className="w-[40px] h-[40px] rounded-[100%] bg-white grid place-items-center top-[50px] left-[50px] absolute"
        >
          <ArrowLeftIcon />
        </button>
      </figure>
      <div className="basis-[65%] bg-white relative pt-[24px]">
        <Image
          src={authImage1}
          alt="House"
          draggable={false}
          className="absolute top-0 left-0 pointer-events-none"
        />
        <Image
          src={authImage2}
          alt="House"
          draggable={false}
          className="absolute top-0 right-0 pointer-events-none"
        />
        <div className="px-[24px] pb-[230px]">{renderView()}</div>
      </div>
    </div>
  );
}
