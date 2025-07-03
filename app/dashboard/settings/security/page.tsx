"use client"

import FormField from "@/components/inputs/FormField"
import Input from "@/components/inputs/input"
import SwitchToggle from "@/components/inputs/switchToggle"
import { useAdminChangePassMutation } from "@/redux/endpoints"
import { useAppSelector } from "@/redux/hooks"
import { changePasswordSchema2 } from "@/utils/schema"
import { useFormik } from "formik"
import { useState } from "react"
import toast from "react-hot-toast"
import { AnyObject } from "yup"

export default function Security() {
  const [enable2FA, setEnable2FA] = useState(false)
  const toggleEnable2FA = () => setEnable2FA((prev) => !prev)
  const { profile: user } = useAppSelector((state) => state.admin)
  const [updatePassword, { isLoading }] = useAdminChangePassMutation()

  const password_f = useFormik<{
    password: string
    confirmPassword: string
    oldPassword: string
  }>({
    validationSchema: changePasswordSchema2,
    initialValues: { oldPassword: "", password: "", confirmPassword: "" },
    onSubmit: async (values) => {
      const response: AnyObject = await updatePassword({
        ...values,
        id: user?.id,
        actor: "admin",
      })
      if (response.data) {
        toast.success("Password Updated successfully")
      }
      password_f.resetForm()
    },
  })

  return (
    <form
      onSubmit={password_f.handleSubmit}
      className="p-[40px] rounded-[10px] border-[1px] border-[#7F947B] bg-white w-full max-w-[672px]"
    >
      <header className="flex items-center justify-between pb-[16px] border-b-[1px] border-b-[#2A4C23] mb-[38px]">
        <div>
          <h1 className="text-[333436] text-[24px] font-semibold mb-[8px]">
            Security
          </h1>
          {/* <p className="text-[#949494] font-semibold">
            Choose a billing plan that caters to you
          </p> */}
        </div>
        <div className="my-auto flex gap-[16px] items-center">
          <button
            type="button"
            className="text-[#949494] bg-transparent border-[1px] border-[#949494] text-[14px] w-[106px] h-[39px] rounded-[8px]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white bg-primary text-[14px] w-[106px] h-[39px] rounded-[10px]"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      </header>
      <div className="mb-[40px]">
        <header className="mb-[16px]">
          <h1 className="text-[18px] font-semibold">Change Password</h1>
        </header>
        <div className="w-full max-w-[425px] flex flex-col gap-10">
          <FormField
            formik={password_f}
            label="Old Password"
            name="oldPassword"
            type="password"
            placeholder="Old Password"
          />
          <FormField
            formik={password_f}
            label="New Password"
            name="password"
            type="password"
            placeholder="New Password Here"
          />
          <FormField
            formik={password_f}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm New Password"
          />
        </div>
      </div>
      <div className="w-full max-w-[425px]">
        <h1 className="text-lg font-semibold mb-[8px]">
          Two-Factor Authentication
        </h1>
        <div className="flex gap-[40px]">
          <p className="text-[#949494]">
            Keep your account extra secure by enabling 2FA. Along with your
            password, you&rsquo;ll need to enter a code.
          </p>
          <div>
            <SwitchToggle isOn={enable2FA} onClick={toggleEnable2FA} />
          </div>
        </div>
      </div>
    </form>
  )
}
