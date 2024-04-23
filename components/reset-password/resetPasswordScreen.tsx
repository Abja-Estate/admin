import Image from "next/image"
import { ChangeEvent, FormEvent, useState } from "react"
import Input from "../inputs/input"
import Button from "../button"
import toast from "react-hot-toast"
import axios from "axios"
import { isBrowser } from "@/utils/helpers"

export default function ResetPasswordScreen({
  changeView,
}: ResetPasswordViewsProps) {
  // const [adminLogin, { isLoading }] = useAdminLoginMutation()
  // const signIn_f = useFormik<AdminLoginT>({
  //   validationSchema: signInSchema,
  //   initialValues: getDefault(signInInputs) as AdminLoginT,
  //   onSubmit: async (values) => {
  //     const ldata: AdminLoginT = {
  //       ...values,
  //     }
  //     // const response: AnyObject = await adminLogin(ldata)

  //     if ("data" in response) {
  //       const data = response.data.data
  //       //save login details if "Remember Me" is checked

  //       // localStorage.setItem("token", response.data.access_token)
  //     }
  //   },
  // })

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
  })

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.email === "") {
      toast.error("email cannot be blank!")
    }

    console.log("fefe")

    setLoading(true)

    try {
      let response = await axios.post("api/reset-password", formData)
      console.log(response)

      if (response.data.statusCode == 200) {
        toast.success(
          "Reset password successful, check your email for the code."
        )

        isBrowser && localStorage.setItem("form_email", formData.email)

        isBrowser && localStorage.setItem("form_id", response.data.data._id)

        changeView("OTP")
      } else {
        toast.error("Reset password not successful")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const isDisabled = !formData.email

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
        <p className="text-textcolor100 font-semibold">
          Enter email address or phone number to receive a one-time password.
        </p>
      </header>
      <form
        className="flex flex-col gap-[32px] w-full max-w-[500px] mx-auto"
        onSubmit={submit}
      >
        <fieldset>
          <label className="inline-block text-primary font-medium mb-[16px]">
            Email
          </label>
          <Input
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={formDataHandler}
          />
        </fieldset>
        <fieldset className="pt-[50px]">
          <Button disabled={isDisabled} loading={loading}>
            Get OTP
          </Button>
        </fieldset>
      </form>
    </div>
  )
}
