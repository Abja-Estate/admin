"use client"
import CustomImage from "@/components/CustomImage"
import FormField from "@/components/inputs/FormField"
import {
  ArrowDropDown,
  CalenderIcon,
  EditIcon,
  NigeriaFlagIcon,
} from "@/components/svgs"
import { useAppSelector } from "@/redux/hooks"
import { getDefault } from "@/utils/helpers"
import {
  adminInputs,
  adminProfileSchema,
  adminSettingInputs1,
  adminSettingInputs3,
} from "@/utils/schema"
import { useFormik } from "formik"
import Image from "next/image"
import { AnyObject } from "yup"

export default function Settings() {
  const { profile: user } = useAppSelector((state) => state.admin)
  const admin_f = useFormik<AnyObject>({
    validationSchema: adminProfileSchema,
    initialValues: getDefault(adminInputs, user),
    onSubmit: async (values) => {
      const ldata: AnyObject = {
        ...values,
        actor: "admin",
      }
      console.log(ldata)
    },
  })

  const getProps = (name: string) => {
    return (
      adminSettingInputs3.find((each) => each.name == name) ??
      adminSettingInputs3[0]
    )
  }

  return (
    <div className="p-[40px] rounded-[10px] border-[1px] border-[#7F947B] bg-white flex flex-col gap-[40px]">
      <header>
        <h1 className="text-[333436] text-[24px] font-semibold mb-[16px]">
          My Account
        </h1>
        <div className="flex flex-wrap gap-x-7 gap-y-2 pb-[16px] border-b-[1px] border-b-[#949494]">
          <div>
            <CustomImage
              src={user?.selfie}
              fallbackSrc="/images/circle.svg"
              alt="User Profile"
              width={60}
              className="w-20 h-20 rounded-full object-cover min-w-20"
              height={60}
            />
            <div className="pt-[5px]">
              <button className="text-[14px] font-semibold text-[#00000066]">
                Edit image
              </button>
            </div>
          </div>
          <div className="my-auto flex gap-[16px] items-center">
            <button className="text-white bg-primary text-[14px] w-[109px] h-[39px] rounded-[10px]">
              Upload New
            </button>
            <button className="text-[#949494] bg-transparent border-[1px] border-[#949494] text-[14px] w-[106px] h-[39px] rounded-[8px]">
              Delete
            </button>
          </div>
        </div>
      </header>
      <div className="p-[16px] rounded-[10px] shadow-[0px_4px_16px_0px_#00000040]">
        <header className="flex items-center justify-between mb-[24px]">
          <h1 className="text-[18px] font-semibold">Personal Information</h1>
          <div className="flex items-center p-[10px] gap-[16px]">
            Edit
            <EditIcon />
          </div>
        </header>
        <form className="grid md:grid-cols-2 gap-x-[80px] gap-y-[16px]">
          {adminSettingInputs1.map((each, i) => (
            <FormField
              t
              formik={admin_f}
              key={i + "input1"}
              {...each}
              suffix={
                i == 3 ? (
                  <span className="-ml-10 pointer-events-none">
                    <CalenderIcon />
                  </span>
                ) : (
                  <span></span>
                )
              }
            />
          ))}
        </form>
      </div>
      <div className="p-[16px] rounded-[10px] shadow-[0px_4px_16px_0px_#00000040]">
        <header className="flex items-center justify-between mb-[24px]">
          <h1 className="text-[18px] font-semibold">Contact Information</h1>
          <div className="flex items-center p-[10px] gap-[16px]">
            Edit
            <EditIcon />
          </div>
        </header>
        <form className="grid md:grid-cols-2 gap-x-[80px] gap-y-[16px]">
          <FormField formik={admin_f} t {...getProps("phone")} />
          <FormField formik={admin_f} t {...getProps("email")} />
          <FormField formik={admin_f} t {...getProps("city")} />
          <FormField formik={admin_f} t {...getProps("state")} />
          <FormField formik={admin_f} t {...getProps("country")} />
          <FormField
            formik={admin_f}
            t
            {...getProps("address")}
            className="col-span-full"
          />
        </form>
      </div>
    </div>
  )
}
