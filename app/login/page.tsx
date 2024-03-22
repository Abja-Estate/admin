"use client"
import { SearchIcon } from "@/components/svgs"
import Image from "next/image"
import Checkbox from "@/components/checkbox"
import { ChangeEvent, FormEvent, useState } from "react"
import Link from "next/link"
import Input from "@/components/input"
import Button from "@/components/button"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import AuthLayout from "@/components/AuthLayout"
import FormField from "@/components/FormField"
import { signInInputs, signInSchema } from "@/utils/schema"
import { getDefault } from "@/utils/helpers"
import { useAdminLoginMutation } from "@/redux/endpoints"
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../redux/store'; // Import RootState type
// import { login, logout } from '../../redux/authSlice';

export default function AdminLogin() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  // LOAD SAVED LOGIN DETAILS FROM localStorage
  const savedLoginDetails =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("saved-login-details") || "{}")
      : {}

  interface FormData {
    email: string
    password: string
  }

  const [formData, setFormData] = useState<FormData>({
    email: savedLoginDetails.email || "", //use saved email if available
    password: savedLoginDetails.password || "", // use saved password if available
  })

  const [checked, setChecked] = useState<boolean>(
    savedLoginDetails.email !== ""
  )

  const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const toggleHandler = () => {
    setChecked((prev) => !prev)
  }

  const isDisabled = !(formData.email && formData.password)

  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  // const handleLogin = () => {
  //   // Dispatch the login action with user data
  //   dispatch(login({ id: 1, username: 'exampleUser' }));
  // };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    try {
      let response = await axios.post("api/login", formData)
      console.log(response)
      toast.success("Login successful")

      const data = response.data.data

      //save login details if "Remember Me" is checked

      if (checked && typeof window !== "undefined") {
        localStorage.setItem("saved-login-details", JSON.stringify(formData))
      } else {
        // clear saved login details if "remember me" is not checked
        localStorage.removeItem("saved-login-detail")
      }

      localStorage.setItem("active-user", JSON.stringify(data))
      router.push("/dashboard")
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const [adminLogin, { isLoading }] = useAdminLoginMutation()

  const signIn_f = useFormik({
    validationSchema: signInSchema,
    initialValues: getDefault(signInInputs),
    onSubmit: async (values) => {
      const response: AnyObject = await adminLogin(values)
      if ("data" in response) {
        localStorage.setItem("token", response.data.access_token)
        setTimeout(() => {
          // navigate("/admin")
        }, 300)
      } else if (response.error && "data" in response.error) {
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
          <p className="text-[#333436] text-center font-semibold">
            Fill in the details below to login into your Abja Property
            Management account.{" "}
          </p>
        </header>
        <form
          className="flex flex-col mb-10 h-full gap-[32px] w-full max-w-[500px] mx-auto"
          onSubmit={submit}
        >
          {signInInputs.map((each) => (
            <FormField key={each.name} {...each} />
          ))}
          <fieldset>
            <div className="flex items-center gap-[16px] mb-[8px]">
              <Checkbox
                className="h-[1.15rem] cursor-pointer w-[1.15rem] text-primary2"
                checked={checked}
                onClick={toggleHandler}
              />
              <p className="text-[#333436]">Remember Me</p>
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
              <Button disabled={isDisabled} loading={loading}>
                Login
              </Button>
            </fieldset>
          </div>
        </form>
      </>
    </AuthLayout>
  )
}
