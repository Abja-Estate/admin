"use client"
import { CameraIcon, EditOutlineIcon } from "@/components/svgs"
import FormField from "@/components/inputs/FormField"
import {
  adminInputs,
  changePasswordSchema,
  editProfileSchema,
  editlandlordInputs,
  landlordInputs,
} from "@/utils/schema"
import { useAppSelector } from "@/redux/hooks"
import CustomImage from "@/components/CustomImage"
import { useFormik } from "formik"
import { AnyObject } from "yup"
import { getDefault } from "@/utils/helpers"
import {
  useAdminChangePassMutation,
  useUpdateprofileMutation,
} from "@/redux/endpoints"
import toast from "react-hot-toast"

export default function ProfileEdit() {
  const { profile: user } = useAppSelector((state) => state.admin)
  const [updatePassword, { isLoading }] = useAdminChangePassMutation()
  const [updateProfile, { isLoading: savingProfile }] =
    useUpdateprofileMutation()

  const password_f = useFormik<{ password: string; confirmPassword: string }>({
    validationSchema: changePasswordSchema,
    initialValues: { password: "", confirmPassword: "" },
    onSubmit: async (values) => {
      const response: AnyObject = await updatePassword({
        ...values,
        id: user?._id,
        actor: "admin",
      })
      if (response.data) {
        toast.success("Password Updated successfully")
      }
      password_f.resetForm()
    },
  })

  const admin_f = useFormik<AnyObject>({
    validationSchema: editProfileSchema,
    initialValues: getDefault(editlandlordInputs, user),
    onSubmit: async (values) => {
      const response: AnyObject = await updateProfile({
        ...values,
        id: user?._id,
      })
      if (response.data) {
        toast.success("Profile Updated successfully")
      }
    },
  })

  return (
    <div className=" overflow-hidden">
      <header className="h-[212px] grid place-items-center w-full bg-[url(/images/profile-cover-img.svg)] bg-cover py-10 px-14">
        <div className="flex justify-between w-full">
          <CustomImage
            src={user?.selfie ?? "/images/landlord-emoji.svg"}
            fallbackSrc="/images/landlord-emoji.svg"
            alt="Admin User 1"
            className="h-28 w-28 min-w-38 rounded-full object-cover"
            width={100}
            height={100}
          />
          <button className="h-fit flex items-center gap-[5px] rounded-[4px] bg-[#B5D0B2] px-[8px] py-[4px]">
            <CameraIcon />
            <p className="text-primary2">Change Cover</p>
          </button>
        </div>
      </header>
      <div className="pt-12 pb-8 px-10 w-full p-[24px] bg-white">
        <div className="grid sm:grid-cols-2 gap-10 lg:gap-20 xl:px-8">
          <div>
            <header className="mb-6">
              <h1 className="text-[18px] font-semibold">
                Personal Information
              </h1>
            </header>
            <form
              onSubmit={admin_f.handleSubmit}
              className="w-full flex flex-col gap-8"
            >
              {adminInputs.map((each) => (
                <FormField
                  key={each.name}
                  formik={admin_f}
                  {...each}
                  suffix={<EditOutlineIcon />}
                />
              ))}

              <div className="flex justify-end pt-10">
                <button
                  disabled={savingProfile}
                  className="bg-primary grid place-items-center text-white rounded-[6px] w-[267px] h-[38px]"
                >
                  {savingProfile ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
          <div>
            <header className="mb-6">
              <h1 className="text-[18px] font-semibold">Change Password?</h1>
            </header>
            <form
              onSubmit={password_f.handleSubmit}
              className="w-full flex flex-col gap-8"
            >
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
              <div className="flex justify-end pt-10">
                <button
                  disabled={isLoading}
                  className="bg-primary grid place-items-center text-white rounded-[6px] w-[267px] h-[38px]"
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
