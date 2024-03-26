"use client"
import Input from "@/components/inputs/input"
import { CameraIcon, EditGreenIcon, EditOutlineIcon } from "@/components/svgs"
import TextArea from "@/components/inputs/textArea"
import Image from "next/image"

export default function ProfileEdit() {
  return (
    <div className="w-[1156px] overflow-hidden">
      <header className="h-[212px] grid place-items-center w-full bg-[url(/images/profile-cover-img.svg)] bg-cover py-10 px-14">
        <div className="flex justify-between w-full">
          <Image
            src="/images/admin-user-img-1.svg"
            alt="Admin User 1"
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
        <div className="grid grid-cols-2 gap-10">
          <div>
            <header className="mb-6">
              <h1 className="text-[18px] font-semibold">
                Personal Information
              </h1>
            </header>
            <form className="w-full max-w-[425px] flex flex-col gap-[24px]">
              <fieldset>
                <label className="mb-[8px] inline-block">Full Name</label>
                <Input
                  type="text"
                  defaultValue="Michael Ibaro"
                  className="border-b-[2px]"
                  trailing={<EditOutlineIcon />}
                />
              </fieldset>
              <fieldset>
                <label className="mb-[8px] inline-block">UserName</label>
                <Input
                  type="text"
                  defaultValue="@Michaelibaro"
                  className="border-b-[2px]"
                  trailing={<EditOutlineIcon />}
                />
              </fieldset>
              <fieldset>
                <label className="mb-[8px] inline-block">Email Address</label>
                <Input
                  type="email"
                  defaultValue="micheal.ibaro@gmail.com"
                  className="border-b-[2px]"
                  trailing={<EditOutlineIcon />}
                />
              </fieldset>
              <fieldset>
                <label className="mb-[8px] inline-block">Phone Number</label>
                <Input
                  type="text"
                  defaultValue="(+256) 567890123"
                  className="border-b-[2px]"
                  trailing={<EditOutlineIcon />}
                />
              </fieldset>
              <fieldset>
                <label className="mb-[8px] inline-block">Bio</label>
                <TextArea
                  defaultValue="Super Admin of Abja Property Management Admin Dashboard, has 10+ years of experience in the industry. He oversees the entire operation of the dashboard, including managing user accounts, setting up permissions, and resolving technical issues. Michael is passionate about helping property owners and is always available to assist users."
                  className="border-b-[2px]"
                  trailing={<EditOutlineIcon />}
                />
              </fieldset>
            </form>
          </div>
          <div>
            <header className="mb-6">
              <h1 className="text-[18px] font-semibold">Change Password?</h1>
            </header>
            <form className="w-full max-w-[425px] flex flex-col gap-[24px]">
              <fieldset>
                <label className="mb-[8px] inline-block">
                  Current Password
                </label>
                <Input
                  type="password"
                  placeholder="Password"
                  className="border-b-[2px]"
                />
              </fieldset>
              <fieldset>
                <label className="mb-[8px] inline-block">New Password</label>
                <Input
                  type="password"
                  placeholder="Password"
                  className="border-b-[2px]"
                />
              </fieldset>
              <fieldset>
                <label className="mb-[8px] inline-block">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="border-b-[2px]"
                />
              </fieldset>
            </form>
          </div>
        </div>
        <div className="flex justify-end pt-10">
          <button className="bg-primary grid place-items-center text-white rounded-[6px] w-[267px] h-[38px]">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
