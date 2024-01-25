import Button from "@/components/button";
import { CancelIcon, MoreVertIcon, StarIcon } from "@/components/svgs";
import Image from "next/image";

export default function RecentPayments() {
  return (
    <div className="flex gap-[23px]">
      <div className="w-[562px]">
        <header className="bg-white px-[26px] py-[8px] mb-[8px] text-[22px] font-semibold rounded-t-[5px] text-[#333436]">
          <h1>Recent Payments</h1>
        </header>
        <div className="mb-[8px]">
          <div className="w-full py-[10px] px-[26px] bg-white mb-[2px]">
            <div className="mb-[8px] flex gap-[20px] justify-between">
              <div className="w-[173px] flex items-center gap-[8px]">
                <Image
                  src="/images/payments-profile-img-1.svg"
                  alt="Profile"
                  width={24}
                  height={24}
                  draggable={false}
                />
                <p className="text-[#4F4F4F] text-[14px]">Bryan Umar</p>
              </div>
              <div className="bg-[#FFE8DF] rounded-[8px] px-[8px] py-[4px] flex gap-[8px] items-center">
                <span className="h-[4px] w-[4px] bg-[#FF8B60] rounded-[100%]"></span>
                <p className="text-[10px] text-[#FF8B60]">Tenancy</p>
              </div>
              <p className="text-[14px] text-[#4F4F4F]">$600.00</p>
              <p className="text-[14px] text-[#4F4F4F]">20 Oct, 2023</p>
              <MoreVertIcon />
            </div>
            <p className="text-[#949494] text-[10px]">(+256) 567890123</p>
          </div>
          <div className="w-full py-[10px] px-[26px] bg-white mb-[2px]">
            <div className="mb-[8px] flex gap-[20px] justify-between">
              <div className="w-[173px] flex items-center gap-[8px]">
                <Image
                  src="/images/payments-profile-img-2.svg"
                  alt="Profile"
                  width={24}
                  height={24}
                />
                <p className="text-[#4F4F4F] text-[14px]">Susan Okello</p>
              </div>
              <div className="bg-[#E3D5E6] rounded-[8px] px-[8px] py-[4px] flex gap-[8px] items-center">
                <span className="h-[4px] w-[4px] bg-[#722E83] rounded-[100%]"></span>
                <p className="text-[10px] text-[#722E83]">Service</p>
              </div>
              <p className="text-[14px] text-[#4F4F4F]">$600.00</p>
              <p className="text-[14px] text-[#4F4F4F]">20 Oct, 2023</p>
              <MoreVertIcon />
            </div>
            <p className="text-[#949494] text-[10px]">(+256) 567890123</p>
          </div>
          <div className="w-full py-[10px] px-[26px] bg-white">
            <div className="mb-[8px] flex gap-[20px] justify-between">
              <div className="w-[173px] flex items-center gap-[8px]">
                <Image
                  src="/images/payments-profile-img-3.svg"
                  alt="Profile"
                  width={24}
                  height={24}
                />
                <p className="text-[#4F4F4F] text-[14px]">Akello Umar</p>
              </div>
              <div className="bg-[#E3D5E6] rounded-[8px] px-[8px] py-[4px] flex gap-[8px] items-center">
                <span className="h-[4px] w-[4px] bg-[#722E83] rounded-[100%]"></span>
                <p className="text-[10px] text-[#722E83]">Service</p>
              </div>
              <p className="text-[14px] text-[#4F4F4F]">$600.00</p>
              <p className="text-[14px] text-[#4F4F4F]">20 Oct, 2023</p>
              <MoreVertIcon />
            </div>
            <p className="text-[#949494] text-[10px]">(+256) 567890123</p>
          </div>
        </div>
        <div>
          <Button className="!text-[14px] !h-[35px]">See All Payments</Button>
        </div>
      </div>
      <div className="px-[20px] py-[13px] bg-white rounded-[15px] flex flex-col gap-[12px] flex-1">
        <div className="flex justify-between">
          <div className="flex gap-[8px]">
            <Image
              src="/images/ratings-star.svg"
              width={40}
              height={40}
              alt="Ratings star"
            />
            <div>
              <h1 className="text-[14px] font-semibold text-[#333436]">
                Reviews
              </h1>
              <p className="text-[#949494] text-[10px]">
                Feedback provided by clients and service providers
              </p>
            </div>
          </div>
          <div>
            <CancelIcon />
          </div>
        </div>
        <div className="flex gap-[8px] items-center">
          <h1 className="text-[32px]">4.5</h1>
          <div className="h-[32px] border-l-[#949494] border-l-[1px] pl-[5px]">
            <div className="flex mb-[8px]">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <div className="flex gap-[8px] text-[10px]">
              <p className="font-light">4.5</p>
              <p>5.2K Ratings</p>
              <p className="underline">18 reviews</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <Rating percent="100%" ratings="5.0" />
          <Rating percent="80%" ratings="4.0" />
          <Rating percent="60%" ratings="3.0" />
          <Rating percent="40%" ratings="2.0" />
          <Rating percent="20%" ratings="1.0" />
        </div>
        <div className="mt-auto">
          <Button className="!text-[14px] !h-[35px]">View All Reviews</Button>
        </div>
      </div>
    </div>
  );
}

interface RatingsProps {
  percent: string;
  ratings: string;
}

const Rating = ({ percent, ratings }: RatingsProps) => {
  return (
    <div className="flex items-center gap-[5px]">
      <div className="flex-1 h-[7px] bg-[#EDF2F7] rounded-[29px] overflow-hidden">
        <div
          style={{ width: percent }}
          className="h-[7px] bg-[#FFD600] rounded-[29px]"
        ></div>
      </div>
      <div className="flex items-center gap-[3px]">
        <span className="text-[#333436] text-[10px] font-light">{ratings}</span>
        <div className="-mt-[3.8px]">
          <StarIcon />
        </div>
      </div>
    </div>
  );
};
