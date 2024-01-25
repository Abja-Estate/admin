"use client";
import RadioInput from "@/components/inputs/radioInput";
import { DeleteIcon } from "@/components/svgs";
import SwitchToggle from "@/components/switchToggle";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function UserActivity() {
  return (
    <div className="p-[40px] rounded-[10px] border-[1px] border-[#7F947B] bg-white w-full max-w-[940px] flex flex-col gap-[40px]">
      <header className="flex items-center justify-between pb-[16px] border-b-[1px] border-b-[#2A4C23]">
        <div>
          <h1 className="text-[333436] text-[24px] font-semibold mb-[8px]">
            Users Activity
          </h1>
          <p className="text-[#949494] font-semibold">
            Get notified on what&rsquo;s happening at the moment. You can turn
            off at any time.
          </p>
        </div>
        <div className="my-auto flex gap-[16px] items-center">
          <button className="text-[#949494] bg-transparent border-[1px] border-[#949494] text-[14px] w-[106px] h-[39px] rounded-[8px]">
            Cancel
          </button>
          <button className="text-white bg-primary text-[14px] w-[106px] h-[39px] rounded-[10px]">
            Save
          </button>
        </div>
      </header>
      <Admin />
      <Landlords />
      <ServiceProviders />
      <PendingAdminInvites />
    </div>
  );
}

const Admin = () => {
  return (
    <div>
      <header className="flex gap-5 items-center mb-[24px] px-[16px]">
        <div className="flex-1">
          <h1 className="text-[18px] font-semibold">Admins</h1>
          <p className="text-[#00000066] font-semibold">
            Get access to organize users, grant access and remove users.
          </p>
        </div>
        <div>
          <button className="text-primary bg-transparent border-[1px] border-primary w-[160px] h-[41px] rounded-[8px] font-semibold">
            Cancel
          </button>
        </div>
      </header>
      <div className="flex flex-col p-[16px]">
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-1.svg"
              alt="User Admin"
              width={48}
              height={48}
              draggable={false}
            />
            <figcaption className="text-[#333436] text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-[#333436] text-[14px]">Admin 1</p>
          <p className="text-[#333436] text-[14px]">07 Aug 2022</p>
          <p className="text-[#333436] text-[14px]">2 days ago</p>
          <p className="text-[#333436] text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-2.svg"
              alt="User Admin"
              width={48}
              height={48}
              draggable={false}
            />
            <figcaption className="text-[#333436] text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-[#333436] text-[14px]">Admin 2</p>
          <p className="text-[#333436] text-[14px]">07 Aug 2022</p>
          <p className="text-[#333436] text-[14px]">2 days ago</p>
          <p className="text-[#333436] text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-3.svg"
              alt="User Admin"
              width={48}
              height={48}
              draggable={false}
            />
            <figcaption className="text-[#333436] text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-[#333436] text-[14px]">Admin 3</p>
          <p className="text-[#333436] text-[14px]">07 Aug 2022</p>
          <p className="text-[#333436] text-[14px]">2 days ago</p>
          <p className="text-[#333436] text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="flex justify-end pb-[16px]">
        <button className="text-white bg-primary text-[14px] w-[106px] h-[39px] rounded-[10px]">
          See More
        </button>
      </div>
    </div>
  );
};

const Landlords = () => {
  return (
    <div className="border-t-[1px] border-t-primary pt-[12px]">
      <header className="flex gap-5 items-center mb-[24px] px-[16px]">
        <div className="flex-1">
          <h1 className="text-[18px] font-semibold">LandLords</h1>
          <p className="text-[#00000066] font-semibold">
            Get access to organize users, grant access and remove users.
          </p>
        </div>
        <div>
          <button className="text-primary bg-transparent border-[1px] border-primary w-[160px] h-[41px] rounded-[8px] font-semibold">
            Invite
          </button>
        </div>
      </header>
      <div className="flex flex-col p-[16px]">
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-1.svg"
              alt="User Admin"
              width={48}
              height={48}
              draggable={false}
            />
            <figcaption className="text-[#333436] text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-[#333436] text-[14px]">Admin 1</p>
          <p className="text-[#333436] text-[14px]">07 Aug 2022</p>
          <p className="text-[#333436] text-[14px]">2 days ago</p>
          <p className="text-[#333436] text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-2.svg"
              alt="User Admin"
              width={48}
              height={48}
            />
            <figcaption className="text-[#333436] text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-[#333436] text-[14px]">Admin 2</p>
          <p className="text-[#333436] text-[14px]">07 Aug 2022</p>
          <p className="text-[#333436] text-[14px]">2 days ago</p>
          <p className="text-[#333436] text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-3.svg"
              alt="User Admin"
              width={48}
              height={48}
              draggable={false}
            />
            <figcaption className="text-[#333436] text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-[#333436] text-[14px]">Admin 3</p>
          <p className="text-[#333436] text-[14px]">07 Aug 2022</p>
          <p className="text-[#333436] text-[14px]">2 days ago</p>
          <p className="text-[#333436] text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceProviders = () => {
  return (
    <div className="border-t-[1px] border-t-primary pt-[12px]">
      <header className="flex gap-5 items-center mb-[24px] px-[16px]">
        <div className="flex-1">
          <h1 className="text-[18px] font-semibold">Service Providers</h1>
          <p className="text-[#00000066] font-semibold">
            Get access to organize users, grant access and remove users.
          </p>
        </div>
        <div>
          <button className="text-primary bg-transparent border-[1px] border-primary w-[160px] h-[41px] rounded-[8px] font-semibold">
            Invite
          </button>
        </div>
      </header>
      <div className="flex flex-col p-[16px]">
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-1.svg"
              alt="User Admin"
              width={48}
              height={48}
            />
            <figcaption className="text-[#333436] text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-[#333436] text-[14px]">Admin 1</p>
          <p className="text-[#333436] text-[14px]">07 Aug 2022</p>
          <p className="text-[#333436] text-[14px]">2 days ago</p>
          <p className="text-[#333436] text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-2.svg"
              alt="User Admin"
              width={48}
              height={48}
              draggable={false}
            />
            <figcaption className="text-[#333436] text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-[#333436] text-[14px]">Admin 2</p>
          <p className="text-[#333436] text-[14px]">07 Aug 2022</p>
          <p className="text-[#333436] text-[14px]">2 days ago</p>
          <p className="text-[#333436] text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-3.svg"
              alt="User Admin"
              width={48}
              height={48}
              draggable={false}
            />
            <figcaption className="text-[#333436] text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-[#333436] text-[14px]">Admin 3</p>
          <p className="text-[#333436] text-[14px]">07 Aug 2022</p>
          <p className="text-[#333436] text-[14px]">2 days ago</p>
          <p className="text-[#333436] text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const PendingAdminInvites = () => {
  return (
    <div>
      <header className="mb-[24px] px-[16px]">
        <h1 className="text-[18px] font-semibold">Pending Admin Invites</h1>
        <p className="text-[#00000066] font-semibold">
          Users yet to make confirmation from their mail-box.
        </p>
      </header>
      <div className="flex flex-col p-[16px]">
        <div className="px-[16px] pt-[24px] pb-[12px] grid grid-cols-3 items-center">
          <div className="flex gap-[24px]">
            <div className="w-[48px] h-[48px] rounded-[100%] bg-[#0CFFE2] grid place-items-center font-semibold">
              KO
            </div>
            <div>
              <h1 className="text-[18px] font-semibold">Kierian Okeke</h1>
              <p className="text-[12px] text-[#333436]">kieokeke@gmail.com</p>
            </div>
          </div>
          <div className="bg-[#FFBB0C4D] w-[120px] h-[29px] rounded-[8px] px-[14px] py-[4px] flex gap-[16px] items-center">
            <span className="h-[4px] w-[4px] bg-[#FFBB0C] rounded-[100%]"></span>
            <p className="text-[12px] text-[#FFBB0C]">Pending</p>
          </div>
          <div className="flex justify-end">
            <div className="my-auto flex gap-[16px] items-center">
              <button className="text-[#949494] bg-transparent border-[1px] border-[#949494] text-[14px] w-[106px] h-[39px] rounded-[8px]">
                Cancel
              </button>
              <button className="text-white bg-primary text-[14px] w-[106px] h-[39px] rounded-[10px]">
                Recend Invite
              </button>
            </div>
          </div>
        </div>
        <div className="px-[16px] pt-[24px] pb-[12px] grid grid-cols-3 items-center border-t-[1px] border-[#949494]">
          <div className="flex gap-[24px]">
            <div className="w-[48px] h-[48px] rounded-[100%] bg-[#FF0CD8] grid place-items-center font-semibold">
              AR
            </div>
            <div>
              <h1 className="text-[18px] font-semibold">Adam Ramsey</h1>
              <p className="text-[12px] text-[#333436]">adamramsey@gmail.com</p>
            </div>
          </div>
          <div className="bg-[#FFBB0C4D] w-[120px] h-[29px] rounded-[8px] px-[14px] py-[4px] flex gap-[16px] items-center">
            <span className="h-[4px] w-[4px] bg-[#FFBB0C] rounded-[100%]"></span>
            <p className="text-[12px] text-[#FFBB0C]">Pending</p>
          </div>
          <div className="flex justify-end">
            <div className="my-auto flex gap-[16px] items-center">
              <button className="text-[#949494] bg-transparent border-[1px] border-[#949494] text-[14px] w-[106px] h-[39px] rounded-[8px]">
                Cancel
              </button>
              <button className="text-white bg-primary text-[14px] w-[106px] h-[39px] rounded-[10px]">
                Recend Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
