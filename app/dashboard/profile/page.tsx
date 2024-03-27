"use client"
import CustomImage from "@/components/CustomImage"
import { BriefCaseIcon, CameraIcon, LocationIcon } from "@/components/svgs"
import { useAppSelector } from "@/redux/hooks"
import { getGreeting } from "@/utils/helpers"
import Image from "next/image"
import Link from "next/link"

export default function Profile({}: {}) {
  const { profile: user } = useAppSelector((state) => state.admin)

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[32px]">
      <div className="col-span-1 lg:col-span-2 flex flex-col rounded-se-[100px] bg-white">
        <div className="p-[24px] h-[300px] border-b-[1px] border-b-primary2 w-full">
          <figure>
            <CustomImage
              src={user?.selfie}
              fallbackSrc="/images/circle.svg"
              className="h-24 w-24 min-w-24 rounded-full object-cover"
              width={100}
              height={100}
              alt="Admin"
            />
            <figcaption className="text-textcolor100 text-[18px] font-semibold pt-5">
              {user?.name} {user?.surname}
            </figcaption>
          </figure>
          <div className="flex gap-2 items-center text-[14px] text-[#949494] pt-4">
            <p>@{user?.name}</p>
            <div className="w-[1px] h-[15px] bg-primary2"></div>
            <p>{user?.phone ?? "--"}</p>
          </div>
          <p className="text-[#949494] pt-2">{user?.email}</p>
          <div className="flex gap-2 pt-2">
            <LocationIcon />
            <p className="text-[#949494]">--</p>
          </div>
        </div>
        <div className="flex flex-col px-[24px] py-[24px] h-[500px] gap-10">
          <div>
            <h1 className="text-textcolor100 text-[18px] font-semibold">Bio</h1>
            <p className="text-[#949494]">
              {user?.about && user?.about !== "" ? user?.about : "--"}
            </p>
          </div>
          <div className="mt-auto">
            <Link href="/dashboard/profile/edit">
              <button className="bg-primary text-white rounded-[6px] h-[38px] w-full grid place-items-center">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-4 rounded-tl-[100px] overflow-hidden">
        <header className="h-[300px] flex flex-col justify-between w-full bg-[url(/images/profile-cover-img.svg)] bg-cover py-10 px-[24px]">
          <div className="pt-5 flex items-center justify-between">
            <h1 className="text-[28px] text-textcolor100 font-semibold">
              Good {getGreeting()} {user?.name},
            </h1>
            <button className="flex items-center gap-[5px] rounded-[4px] bg-[#B5D0B2] px-[8px] py-[4px]">
              <CameraIcon />
              <p className="text-primary2">Change Cover</p>
            </button>
          </div>
          <div className="flex justify-between gap-5">
            <div className="rounded-[20px] bg-[#EB5757] px-4 w-[166px] h-[91px] grid place-items-center box-shadow-inner">
              <div className="w-full flex gap-2 items-center justify-between">
                <p className="text-white">Onboarding Landlords</p>
                <h1 className="text-[40px] text-textcolor100">7</h1>
              </div>
            </div>
            <div className="rounded-[20px] bg-[#FF7440] px-4 w-[166px] h-[91px] grid place-items-center box-shadow-inner">
              <div className="w-full flex gap-2 items-center justify-between">
                <p className="text-white">Request Approvals</p>
                <h1 className="text-[40px] text-textcolor100">32</h1>
              </div>
            </div>
            <div className="rounded-[20px] bg-[#5F9AB7] px-4 w-[166px] h-[91px] grid place-items-center box-shadow-inner">
              <div className="w-full gap-2 flex items-center justify-between">
                <p className="text-white">Activity Logs</p>
                <h1 className="text-[40px] text-textcolor100">89</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="h-[500px] w-full p-[24px] bg-white">
          <div className="flex items-center justify-between mb-[24px]">
            <h1 className="text-[18px] text-textcolor100 font-semibold">
              Recent Activity Log
            </h1>
            <span className="underline text-primary2">View All</span>
          </div>
          <div className="flex flex-col gap-5 text-[14px]">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="flex gap-5 items-center">
                <div className="flex gap-2 items-center">
                  <div className="bg-[#CFD9E9] h-[24px] w-[24px] grid place-items-center">
                    <BriefCaseIcon />
                  </div>
                  <p className="text-[#949494]">Service Personnel: </p>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <p className="text-[#4f4f4f]">Electrician </p>
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/images/tenant-emoji.svg"
                      alt="Tenant Emoji"
                      width={24}
                      height={24}
                      draggable={false}
                    />
                    <p className="text-[#4f4f4f]">Okello Smith</p>
                  </div>
                  <p className="text-[#4f4f4f]">Electrician </p>
                  <p className="text-[#4f4f4f]">was assigned to </p>
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/images/tenant-emoji.svg"
                      alt="Tenant Emoji"
                      width={24}
                      height={24}
                      draggable={false}
                    />
                    <p className="text-[#4f4f4f]">Okello Buma</p>
                  </div>
                </div>
                <p className="text-[#828282]">8:00 AM</p>
                <p className="text-[#828282]">7 NOV 2023</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
