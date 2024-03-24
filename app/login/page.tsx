"use client"
import { SearchIcon } from "@/components/svgs"
import Image from "next/image"
import Checkbox from "@/components/checkbox"
import { useState } from "react"
import Link from "next/link"
import Button from "@/components/button"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import AuthLayout from "@/components/AuthLayout"
import FormField from "@/components/FormField"
import { signInInputs, signInSchema } from "@/utils/schema"
import { getDefault } from "@/utils/helpers"
import { useAdminLoginMutation } from "@/redux/endpoints"
import { useFormik } from "formik"
import { AnyObject } from "yup"
import { AdminLoginT } from "@/utils/types"

export default function AdminLogin() {
  const router = useRouter()

  // LOAD SAVED LOGIN DETAILS FROM localStorage
  const savedLoginDetails =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("saved-login-details") || "{}")
      : {}

  const formData = {
    email: savedLoginDetails.email || "", //use saved email if available
    password: savedLoginDetails.password || "", // use saved password if available
  }

  const [checked, setChecked] = useState<boolean>(
    savedLoginDetails.email !== ""
  )

  const toggleHandler = () => {
    setChecked((prev) => !prev)
  }

  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  // const handleLogin = () => {
  //   // Dispatch the login action with user data
  //   dispatch(login({ id: 1, username: 'exampleUser' }));
  // };

  const [adminLogin, { isLoading }] = useAdminLoginMutation()

  const signIn_f = useFormik<AdminLoginT>({
    validationSchema: signInSchema,
    initialValues: getDefault(signInInputs) as AdminLoginT,
    onSubmit: async (values) => {
      const response: AnyObject = await adminLogin({
        ...values,
        actor: "admin",
      })
      console.log(response.json())

      if ("data" in response) {
        const data = response.data.data

        //save login details if "Remember Me" is checked

        if (checked && typeof window !== "undefined") {
          localStorage.setItem("saved-login-details", JSON.stringify(values))
        } else {
          // clear saved login details if "remember me" is not checked
          localStorage.removeItem("saved-login-detail")
        }

        localStorage.setItem("active-user", JSON.stringify(data))
        // router.push("/dashboard")

        // localStorage.setItem("token", response.data.access_token)
      } else if (response.error) {
        if (response.error.status == "FETCH_ERROR") {
          toast.error("Please, check your connection.")
        }
        // dispatch(
        //   openRespDialog({
        //     self: true,
        //     type: "error",
        //     desc: response.error.data.message,
        //     title: "Oops!",
        //   })
        // )
      }
    },
  })

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
