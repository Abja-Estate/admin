import { BriefCaseIcon, CameraIcon, LocationIcon } from "@/components/svgs";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="flex gap-[32px]">
      <div className="w-[315px] flex flex-col rounded-se-[100px] bg-white">
        <div className="p-[24px] h-[300px] border-b-[1px] border-b-[#47893F] w-full">
          <figure>
            <Image
              src="/images/admin-user-img-1.svg"
              width={100}
              height={100}
              alt="Admin"
            />
            <figcaption className="text-[#333436] text-[18px] font-semibold pt-5">
              Micheal Ibaro
            </figcaption>
          </figure>
          <div className="flex gap-2 items-center text-[14px] text-[#949494] pt-4">
            <p>@michealibaro</p>
            <div className="w-[1px] h-[15px] bg-[#47893F]"></div>
            <p>(+256) 567890123</p>
          </div>
          <p className="text-[#949494] pt-2">micheal.ibaro@gmail.com</p>
          <div className="flex gap-2 pt-2">
            <LocationIcon />
            <p className="text-[#949494]">Kampala, Uganda</p>
          </div>
        </div>
        <div className="flex flex-col px-[24px] py-[24px] h-[500px] gap-10 h-[35]">
          <div>
            <h1 className="text-[#333436] text-[18px] font-semibold">Bio</h1>
            <p className="text-[#949494]">
              Super Admin of Abja Property Management Admin Dashboard, has 10+
              years of experience in the industry. He oversees the entire
              operation of the dashboard, including managing user accounts,
              setting up permissions, and resolving technical issues. Michael is
              passionate about helping property owners and is always available
              to assist users.
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
      <div className="rounded-tl-[100px] w-[900px] overflow-hidden">
        <header className="h-[300px] flex flex-col justify-between w-full bg-[url(/images/profile-cover-img.svg)] bg-cover py-10 px-[24px]">
          <div className="pt-5 flex items-center justify-between">
            <h1 className="text-[28px] text-[#333436] font-semibold">
              Good Morning Micheal,
            </h1>
            <button className="flex items-center gap-[5px] rounded-[4px] bg-[#B5D0B2] px-[8px] py-[4px]">
              <CameraIcon />
              <p className="text-[#47893F]">Change Cover</p>
            </button>
          </div>
          <div className="flex justify-between gap-5">
            <div className="rounded-[20px] bg-[#EB5757] px-4 w-[166px] h-[91px] grid place-items-center box-shadow-inner">
              <div className="w-full flex gap-2 items-center justify-between">
                <p className="text-white">Onboarding Landlords</p>
                <h1 className="text-[40px] text-[#333436]">7</h1>
              </div>
            </div>
            <div className="rounded-[20px] bg-[#FF7440] px-4 w-[166px] h-[91px] grid place-items-center box-shadow-inner">
              <div className="w-full flex gap-2 items-center justify-between">
                <p className="text-white">Request Approvals</p>
                <h1 className="text-[40px] text-[#333436]">32</h1>
              </div>
            </div>
            <div className="rounded-[20px] bg-[#5F9AB7] px-4 w-[166px] h-[91px] grid place-items-center box-shadow-inner">
              <div className="w-full gap-2 flex items-center justify-between">
                <p className="text-white">Activity Logs</p>
                <h1 className="text-[40px] text-[#333436]">89</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="h-[500px] w-full p-[24px] bg-white">
          <div className="flex items-center justify-between mb-[24px]">
            <h1 className="text-[18px] text-[#333436] font-semibold">
              Recent Activity Log
            </h1>
            <span className="underline text-[#47893F]">View All</span>
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
  );
}
