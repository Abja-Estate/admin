"use client";
import { ArrowLeftIcon, SearchIcon } from "@/components/svgs";
import authImage1 from "/public/images/auth-img-1.png";
import authImage2 from "/public/images/auth-img-2.svg";
import authImage3 from "/public/images/auth-img-3.svg";
import Image from "next/image";
import Checkbox from "@/components/checkbox";
import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import Input from "@/components/input";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  interface FormData {
    email: string;
    password: string | any;
  }

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [checked, setChecked] = useState<boolean>(false);

  const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleHandler = () => {
    setChecked((prev) => !prev);
  };

  const isDisabled = !(formData.email && formData.password);

  const backwardNavigate = () => router.back();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      let response = await axios.post("api/login", formData);
      console.log(response);
      toast.success("Login successful");
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
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
        <div className="px-[24px] pb-[230px]">
          <header className="grid place-items-center gap-[24px] pb-[32px]">
            <Image
              src="/images/abj-logo.svg"
              alt="Abj logo"
              width={70}
              height={100}
              draggable={false}
            />
            <h1 className="text-primary text-[32px] font-bold">
              Welcome Back!
            </h1>
            <p className="text-[#333436] font-semibold">
              Fill in the details below to login into your Abja Property
              Management account.{" "}
            </p>
          </header>
          <form
            className="flex flex-col gap-[32px] w-full max-w-[500px] mx-auto"
            onSubmit={submit}
          >
            <fieldset>
              <label className="inline-block text-primary font-medium mb-[16px]">
                Email or Phone number
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={formDataHandler}
                placeholder="Enter phone number or email"
              />
            </fieldset>
            <fieldset>
              <label className="inline-block text-primary font-medium mb-[16px]">
                Password
              </label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={formDataHandler}
                placeholder="Password"
              />
            </fieldset>
            <fieldset>
              <div className="flex gap-[16px] mb-[8px]">
                <Checkbox checked={checked} onClick={toggleHandler} />
                <p className="text-[#333436]">Remember Me</p>
              </div>
              <p className="text-fade">Save my login details for next time.</p>
            </fieldset>
            <fieldset className="pt-[18px] text-center">
              <p>
                Forgot Password?&nbsp;
                <Link href="/admin/reset-password">
                  <span className="text-[#0174C7]">Tap Here</span>
                </Link>
              </p>
            </fieldset>
            <fieldset className="pt-[134px]">
              <div className="flex gap-2 items-center">
                <div className="h-[1px] flex-1 bg-[#949494]"></div>
                <span className="font-semibold">Or</span>
                <div className="h-[1px] flex-1 bg-[#949494]"></div>
              </div>
              <div className="grid place-items-center">
                <div className="flex gap-2">
                  <SearchIcon />
                  <p className="text-[#949494] font-medium">Find my account</p>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <Button disabled={isDisabled} loading={loading}>
                Login
              </Button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
