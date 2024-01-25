import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExpandMoreIcon,
  MoreVertIcon,
  SearchIcon,
} from "@/components/svgs";
import Image from "next/image";

export default function Requests() {
  return (
    <div className="flex gap-[27px]">
      <div className="flex-1 bg-white rounded-[5px] py-[10px] px-[5px]">
        <header className="py-[8px] px-[16px] flex justify-between items-center">
          <h1 className="text-[22px] font-semibold">Requests</h1>
          <div className="flex gap-[8px] items-center">
            <button className="border-[1px] border-[#7F947B] rounded-[6px] w-[24px] h-[24px] grid place-items-center">
              <ChevronLeftIcon />
            </button>
            <h1 className="text-primary font-semibold">Aug 2023</h1>
            <button className="border-[1px] border-[#7F947B] rounded-[6px] w-[24px] h-[24px] grid place-items-center">
              <ChevronRightIcon />
            </button>
          </div>
        </header>
        <div className="bg-[#F6F8F6] h-[38px] border-t-[6px] border-b-[4px] border-t-[#d4dbd3] border-b-[#d4dbd3] grid grid-cols-[12px"></div>
      </div>
      <Messages />
    </div>
  );
}

const Messages = () => {
  return (
    <div className="w-[253px]">
      <header className="bg-white px-[4px] py-[5px] flex rounded-t-[5px] items-center box-shadow mb-[5px]">
        <div className="flex-1">
          <ExpandMoreIcon />
        </div>
        <h1 className="text-primary font-semibold">Messages</h1>
        <div className="flex-1 flex justify-end gap-[8px]">
          <SearchIcon />
          <MoreVertIcon />
        </div>
      </header>
      <div className="bg-white py-[4px] px-[8px]">
        <MessageOverview
          img="/images/message-profile-img-1.svg"
          username="Susan"
        />
        <MessageOverview
          img="/images/message-profile-img-2.svg"
          username="Akello"
        />
        <MessageOverview
          img="/images/message-profile-img-3.svg"
          username="Bryan"
        />
        <MessageOverview
          img="/images/message-profile-img-4.svg"
          username="Mike"
        />
        <MessageOverview
          img="/images/message-profile-img-4.svg"
          username="Mike"
        />
      </div>
    </div>
  );
};

interface MessageOverviewProps {
  img: string;
  username: string;
}

const MessageOverview = ({ img, username }: MessageOverviewProps) => {
  return (
    <div className="flex gap-[11px] p-[4px]">
      <figure>
        <Image src={img} alt="User Profile" width={40} height={40} />
      </figure>
      <div>
        <header className="flex items-center justify-between">
          <h1 className="text-[#333436] font-semibold">{username}</h1>
          <p className="text-[#949494] text-[10px]">10/08/2023</p>
        </header>
        <p className="text-[#949494] text-[12px]">
          Hello, tell me about the progress of the task?
        </p>
      </div>
    </div>
  );
};
