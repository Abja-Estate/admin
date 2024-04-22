"use client"
import FormField from "@/components/inputs/FormField"
import { LandlordProfileHead } from "@/components/admin-dashboard/LandlordProfileHead"
import { EditOutlineIcon } from "@/components/svgs"
import {
  changePasswordSchema,
  editLandlordSchema,
  editlandlordInputs,
  landlordInputs,
} from "@/utils/schema"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { LandLord, LandlordData } from "@/utils/types"
import {
  useGetLandlordMutation,
  useUpdateLandlordMutation,
} from "@/redux/endpoints"
import { useFormik } from "formik"
import { canEdit, getDefault } from "@/utils/helpers"
import { AnyObject } from "yup"
import toast from "react-hot-toast"
import { useAppSelector } from "@/redux/hooks"
import { useRouter } from "next/navigation"

export default function ProfileEdit({
  params,
}: {
  params: { landlord: string }
}) {
  const [landlordData, setLandlordData] = useState<LandlordData | null>(null)
  const [fetchLandlordData] = useGetLandlordMutation()
  const [updateLandlord, { isLoading: updatingLandlord }] =
    useUpdateLandlordMutation()
  const { profile: user } = useAppSelector((state) => state.admin)

  const fetchL = useCallback(async () => {
    const resp = await fetchLandlordData({
      landlordID: params.landlord,
    })
    if ("data" in resp && resp.data.landlordInfo) {
      setLandlordData(resp.data)
      landlord_f.setValues(resp.data?.landlordInfo)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.landlord, fetchLandlordData])

  const router = useRouter()
  useEffect(() => {
    fetchL()
  }, [fetchL])

  useEffect(() => {
    if (!canEdit("landlords", user?.role)) {
      router.push("/dashboard/")
      return
    }
  }, [router, user?.role])

  const landlord_f = useFormik<AnyObject>({
    validationSchema: editLandlordSchema,
    initialValues: getDefault(editlandlordInputs),
    onSubmit: async (values) => {
      const ldata = {
        ...values,
        landlordID: params.landlord,
      }
      const response: AnyObject = await updateLandlord(ldata as LandLord)
      if (response.data) {
        toast.success("Landlord Details Updated")
      } else if (response.error) {
      }
      console.log(ldata)
    },
  })

  const password_f = useFormik<AnyObject>({
    validationSchema: changePasswordSchema,
    initialValues: { password: "", confirmPassword: "" },
    onSubmit: async (values) => {
      const ldata = {
        ...values,
        landlordID: params.landlord,
        ...landlord_f.values,
      }
      password_f.resetForm()
      const response: AnyObject = await updateLandlord(ldata as LandLord)
      if (response.data) {
        toast.success("Landlord Password Updated")
      } else if (response.error) {
      }
    },
  })
  return (
    <div className=" overflow-hidden">
      <div className="lg:-mt-2 flex flex-wrap items-center gap-x-5">
        <Link href="/dashboard/landlord">
          <span className="text-textcolor100 text-[22px]">Landlords /</span>
        </Link>
        <Link href={`/dashboard/landlord/${params.landlord}/`}>
          <span className="text-textcolor100 text-[22px]">
            Landlord&rsquo;s Profile /
          </span>
        </Link>
        <button>
          <span className="text-primary2 font-bold text-[22px]">
            Edit Landlord Profile
          </span>
        </button>
      </div>
      <div className="mt-4 bg-white">
        <LandlordProfileHead landlord={landlordData?.landlordInfo} />
        <div className="grid sm:grid-cols-2 justify-items-center py-5">
          <div className="px-6 md:px-7 w-full py-5 border-r-[0.5px] border-primaryFade">
            <div className=" w-full max-w-xl mx-auto">
              <header className="mb-6">
                <h1 className="text-lg bg-white80 px-3 py-2 font-semibold">
                  Personal Information
                </h1>
              </header>
              <form
                onSubmit={landlord_f.handleSubmit}
                className="w-full flex flex-col gap-8"
              >
                <FormField
                  label="Username"
                  placeholder="@username"
                  name="username"
                  suffix={<EditOutlineIcon />}
                />
                {editlandlordInputs.map((each) => (
                  <FormField
                    formik={landlord_f}
                    key={each.name}
                    {...each}
                    suffix={<EditOutlineIcon />}
                  />
                ))}
                <div className="flex justify-end pt-4">
                  <button
                    disabled={updatingLandlord}
                    className="bg-primary gap-2 flex items-center justify-center text-white rounded-[6px] w-full sm:w-[267px] h-[38px]"
                  >
                    Update Profile
                    {updatingLandlord && (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx={12}
                          cy={12}
                          r={10}
                          stroke="currentColor"
                          strokeWidth={4}
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="px-6 w-full md:px-7 py-5">
            <div className="w-full max-w-xl mx-auto">
              <header className="mb-6">
                <h1 className="text-lg bg-white80 px-3 py-2 font-semibold">
                  Change Password?
                </h1>
              </header>
              <form
                onSubmit={password_f.handleSubmit}
                className=" flex flex-col gap-8"
              >
                <FormField
                  formik={password_f}
                  label="New Password"
                  placeholder="New Password"
                  name="password"
                  type="password"
                />
                <FormField
                  formik={password_f}
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <div className="flex justify-end pt-10">
                  <button
                    disabled={updatingLandlord}
                    className="bg-primary gap-2 flex items-center justify-center text-white rounded-[6px] w-full sm:w-[267px] h-[38px]"
                  >
                    Reset Password
                    {updatingLandlord && (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx={12}
                          cy={12}
                          r={10}
                          stroke="currentColor"
                          strokeWidth={4}
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
