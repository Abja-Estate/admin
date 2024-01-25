import Image from "next/image";
import {
  ExpandMoreIcon,
  MessageIcon,
  MicIcon,
  NotificationIcon,
  SearchIcon,
} from "../svgs";

export default function AdminDashboardTopNavigation() {
  return (
    <nav className="relative z-[10] flex items-center justify-between px-[20px] py-[7px] shadow-[0px_4px_4px_0px_#00000040] bg-white">
      <figure>
        <Image
          src="/images/abj-logo.svg"
          alt="Abj logo"
          width={70}
          height={100}
          draggable={false}
        />
      </figure>
      <div className="flex items-center gap-[114px]">
        <div>
          <div className="h-[40px] rounded-[10px] bg-[#EAEDE9] w-[500px] border-[1px] border-[#3A3A3A] px-[16px] flex items-center gap-[16px]">
            <SearchIcon />
            <input
              className="w-full flex-1 bg-transparent placeholder-[#3A3A3A] outline-none"
              placeholder="Search"
            />
            <MicIcon />
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="h-[38px] w-[38px] bg-[#2A4C2333] rounded-[100%] relative grid place-items-center">
            <NotificationIcon />
            <span className="absolute h-[12px] w-[12px] grid place-items-center bg-[#D90001] text-white text-[7px] font-semibold rounded-[100%] top-[6px] right-[8px]">
              8
            </span>
          </div>
          <div className="h-[38px] w-[38px] bg-[#2A4C2333] rounded-[100%] relative grid place-items-center">
            <MessageIcon />
            <span className="absolute h-[12px] w-[12px] grid place-items-center bg-[#D90001] text-white text-[7px] font-semibold rounded-[100%] top-[6px] right-[8px]">
              4
            </span>
          </div>
          <div className="ml-[8px] flex items-center gap-[16px]">
            <Image
              src="/images/admin-user-img-1.svg"
              alt="Abj logo"
              width={60}
              height={60}
            />
            <div>
              <h1 className="text-[14px]">Micheal Ibaro</h1>
              <p className="text-[14px] text-[#2A4C23] font-bold">Admin</p>
            </div>
            <ExpandMoreIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
