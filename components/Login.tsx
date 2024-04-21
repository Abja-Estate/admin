"use client"
import { SearchIcon } from "@/components/svgs"
import Image from "next/image"
import Checkbox from "@/components/inputs/checkbox"
import { useEffect, useState } from "react"
import Link from "next/link"
import Button from "@/components/button"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import AuthLayout from "@/components/AuthLayout"
import FormField from "@/components/inputs/FormField"
import { signInInputs, signInSchema } from "@/utils/schema"
import { getDefault, isBrowser } from "@/utils/helpers"
import { useAdminLoginMutation } from "@/redux/endpoints"
import { useFormik } from "formik"
import { AnyObject } from "yup"
import { AdminLoginT } from "@/utils/types"
import { useAppDispatch } from "@/redux/hooks"
import { setAuth } from "@/redux/adminSlice"

export default function AdminLoginComp() {
  const router = useRouter()
  const [checked, setChecked] = useState<boolean>(false)
  const toggleHandler = () => {
    setChecked((prev) => !prev)
  }

  const [adminLogin, { isLoading }] = useAdminLoginMutation()
  const dispatch = useAppDispatch()
  const signIn_f = useFormik<AdminLoginT>({
    validationSchema: signInSchema,
    initialValues: getDefault(signInInputs) as AdminLoginT,
    onSubmit: async (values) => {
      const ldata: AdminLoginT = {
        ...values,
      }
      const response: AnyObject = await adminLogin(ldata)
      dispatch(setAuth(ldata))

      if ("data" in response) {
        const data = response.data.data
        //save login details if "Remember Me" is checked
        if (checked) {
          isBrowser &&
            localStorage.setItem("saved-login-details", JSON.stringify(ldata))
        } else {
          isBrowser && localStorage.removeItem("saved-login-detail")
        }

        isBrowser && localStorage.setItem("active-user", JSON.stringify(data))
        router.push("/dashboard")

        // localStorage.setItem("token", response.data.access_token)
      } else if (response.error) {
        if (response.error.status == "FETCH_ERROR") {
          toast.error("Please, check your connection.")
        }

        if (response.error.data) {
          const { statusCode, error } = response.error.data
          if (statusCode == 400 && error.includes("activated yet")) {
            router.push("/auth/otp")
          }
        }
      }
    },
  })

  useEffect(() => {
    const details = JSON.parse(
      (isBrowser && localStorage.getItem("saved-login-details")) || "{}"
    )
    signIn_f.setValues({
      email: details?.email,
      password: details?.password,
    })
    setChecked(details?.email && details?.email !== "")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthLayout>
      <>
        <header className="grid place-items-center gap-[24px] pb-[32px]">
          <Image
            src="/images/abj-logo.svg"
            alt="Abj logo"
            width={70}
            height={100}
            draggable={false}
          />
          <h1 className="text-primary text-[32px] font-bold">Welcome Back!</h1>
          <p className="text-textcolor100 text-center font-semibold">
            Fill in the details below to login into your Abja Property
            Management account.{" "}
          </p>
        </header>
        <form
          className="flex flex-col mb-10 h-full gap-[32px] w-full max-w-[500px] mx-auto"
          onSubmit={signIn_f.handleSubmit}
        >
          {/* {JSON.stringify(signIn_f)} */}
          {signInInputs.map((each) => (
            <FormField formik={signIn_f} key={each.name} {...each} />
          ))}

          <fieldset>
            <div className="flex items-center gap-[16px] mb-[8px]">
              <Checkbox
                className="h-[1.15rem] cursor-pointer w-[1.15rem] text-primary2"
                checked={checked}
                onClick={toggleHandler}
              />
              <p className="text-textcolor100">Remember Me</p>
            </div>
            <p className="text-fade">Save my login details for next time.</p>
          </fieldset>
          <fieldset className="pt-[18px] text-center">
            <p>
              Forgot Password?&nbsp;
              <Link href="/reset-password">
                <span className="text-[#0174C7] hover:text-[#0174C7]/70">
                  Tap Here
                </span>
              </Link>
            </p>
          </fieldset>
          <div className="my-auto">
            <fieldset className="mb-[32px]">
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
              <Button
                type="submit"
                // disabled={!signIn_f.isValid}
                loading={isLoading}
              >
                Login
              </Button>
            </fieldset>
          </div>
        </form>
      </>
    </AuthLayout>
  )
}
