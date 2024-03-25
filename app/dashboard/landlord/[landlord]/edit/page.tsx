"use client"
import FormField from "@/components/FormField"
import { LandlordProfileHead } from "@/components/admin-dashboard/LandlordProfileHead"
import Input from "@/components/input"
import { CameraIcon, EditGreenIcon, EditOutlineIcon } from "@/components/svgs"
import TextArea from "@/components/textArea"
import { landlordInputs } from "@/utils/schema"
import Image from "next/image"
import Link from "next/link"

export default function ProfileEdit({
  params,
}: {
  params: { landlord: string }
}) {
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
        <LandlordProfileHead id={params.landlord} />
        <div className="grid sm:grid-cols-2 justify-items-center py-5">
          <div className="px-6 md:px-7 w-full py-5 border-r-[0.5px] border-primaryFade">
            <div className=" w-full max-w-xl mx-auto">
              <header className="mb-6">
                <h1 className="text-lg bg-white80 px-3 py-2 font-semibold">
                  Personal Information
                </h1>
              </header>
              <form className="w-full flex flex-col gap-8">
                <FormField
                  label="Username"
                  placeholder="@username"
                  name="username"
                  suffix={<EditOutlineIcon />}
                />
                {landlordInputs
                  .filter(
                    (each) => each.name != "start_date" && each.name != "plan"
                  )
                  .map((each) => (
                    <FormField
                      key={each.name}
                      {...each}
                      suffix={<EditOutlineIcon />}
                    />
                  ))}
                <FormField
                  label="Bio"
                  placeholder="Bio"
                  type="textarea"
                  name="bio"
                  suffix={<EditOutlineIcon />}
                />
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
              <form className=" flex flex-col gap-8">
                <FormField
                  label="Current Password"
                  placeholder="Current Password"
                  name="current_password"
                  type="password"
                />
                <FormField
                  label="New Password"
                  placeholder="New Password"
                  name="new_password"
                  type="password"
                />
                <FormField
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  name="confirm_password"
                  type="password"
                />
                <div className="flex justify-end pt-10">
                  <button className="bg-primary grid place-items-center text-white rounded-[6px] w-full sm:w-[267px] h-[38px]">
                    Reset Password
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
