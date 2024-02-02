"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../input";
import Button from "../button";
import { BASE_URL } from "@/config";
import toast from "react-hot-toast";

interface formData {
  password: string;
  confirmPassword: string;
}

export default function PasswordScreen({
  changeView,
}: ResetPasswordViewsProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<formData>({
    password: "",
    confirmPassword: "",
  });

  const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const form_id = localStorage.getItem("form_id");

      console.log("form_id", form_id);

      const response = await fetch(`${BASE_URL}/auth/admin/reset_password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "4f1fe63a-5f8b-4e7f-ad38-e68445079351",
        },
        body: JSON.stringify({
          id: form_id,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();

        if (responseData.statusCode === 200) {
          toast.success("Password changed successful.");
          changeView("PASSWORD");
        } else {
          toast.error("Password change not successful");
        }
      } else {
        // Handle non-OK responses (e.g., 4xx or 5xx status codes)
        const errorText = await response.text();
        console.error(`Server responded with error: ${errorText}`);
        toast.error("An error occurred while processing the request.");
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      toast.error("An error occurred while processing the request.");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !(formData.password && formData.confirmPassword);

  return (
    <div>
      <header className="grid place-items-center gap-[24px] pb-[32px]">
        <Image
          src="/images/abj-logo.svg"
          alt="Abj logo"
          width={70}
          height={100}
        />
        <h1 className="text-primary text-[32px] font-bold">Reset Password</h1>
        <p className="text-[#333436] font-semibold text-[14px] text-whites">
          Enter your new password
        </p>
      </header>
      <form
        className="flex flex-col gap-[32px] w-full max-w-[500px] mx-auto"
        onSubmit={submit}
      >
        <fieldset>
          <label className="inline-block text-primary font-medium mb-[16px]">
            New Password
          </label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={formDataHandler}
            placeholder="New Password"
          />
        </fieldset>
        <fieldset>
          <label className="inline-block text-primary font-medium mb-[16px]">
            Confirm Password
          </label>
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={formDataHandler}
            placeholder="Confirm Password"
          />
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
