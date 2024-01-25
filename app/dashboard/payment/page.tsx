import Button from "@/components/button";
import {
  ArrowGrowthIcon,
  CalenderOutlineIcon,
  CancelIcon,
  CashBillIcon,
  ChevronLeftIconIcon,
  ChevronRightGreenIcon,
  DeleteRedIcon,
  MoreVertIcon,
  SearchIcon,
  ShareIcon,
  ShareYellowIcon,
  StarIcon,
} from "@/components/svgs";
import Image from "next/image";

export default function AdminPayment() {
  return (
    <>
      <header className="flex gap-[30px]">
        <div className="px-[26px] py-[13px] bg-white w-[408px] h-[308px] bg-[url('/images/report-stripes.svg')] rounded-[20px] flex flex-col gap-[12px]">
          <div className="flex justify-between mb-[20px]">
            <h1 className="text-[#333436] text-[18px]">Payments</h1>
            <CashBillIcon />
          </div>
          <div className="flex mb-[28px]">
            <h1 className="text-[#333436] text-[34px] font-semibold">3001</h1>
            <p className="text-[#47893F] text-[12px] mt-[22px] ml-[2px]">
              Total Payments
            </p>
          </div>
          <div>
            <div className="mb-[12px]">
              <div className="h-[10px] rounded-[20px] bg-[#009A49]"></div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[5px]">
                <h1 className="text-[#333436] text-[22px] font-semibold">
                  $105,090
                </h1>
                <div className="flex items-center gap-[5px]">
                  <ArrowGrowthIcon />
                  <p className="text-[#333436] text-[14px] font-semibold">
                    17%
                  </p>
                </div>
              </div>
              <p className="text-[14px] text-[#47893F] mt-[5px]">
                Last Year: 2023
              </p>
            </div>
          </div>
          <div>
            <div className="mb-[12px]">
              <div className="h-[10px] rounded-[20px] bg-white overflow-hidden">
                <div className="h-full w-[70%] bg-[#6FCF97]"></div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[5px]">
                <h1 className="text-[#333436] text-[22px] font-semibold">
                  $105,090
                </h1>
                <div className="flex items-center gap-[5px]">
                  <ArrowGrowthIcon />
                  <p className="text-[#333436] text-[14px] font-semibold">
                    24%
                  </p>
                </div>
              </div>
              <p className="text-[14px] text-[#47893F] mt-[5px]">
                This Year: 2024
              </p>
            </div>
          </div>
        </div>
        <div className="w-[724px] h-[308px] rounded-[20px] bg-white px-[24px]"></div>
      </header>
      <div className="w-full flex justify-between py-[12px] px-[32px] bg-white mt-[30px]">
        <div className="w-full max-w-[584px] items-center flex gap-[16px]">
          <SearchIcon />
          <input
            className="flex-1 w-full placeholder-[#828282] text-[14px]"
            placeholder="Search"
          />
        </div>
        <button className="px-[8px] py-[4px] text-[14px] flex gap-[8px] items-center bg-[#B5D0B2] text-[#47893F] rounded-[4px]">
          <CalenderOutlineIcon />
          Sept 2023
        </button>
      </div>
      <div className="w-full flex justify-between py-[12px] px-[32px] bg-white mt-[30px]">
        <div className="items-center flex gap-5">
          <p className="text-[#47893F] font-semibold border-b-[1px] border-b-[#47893F]">
            Service Request Payments
          </p>
          <p className="text-[#949494] font-semibold border-b-[1px] border-b-[#949494]">
            Tenancy Payments
          </p>
        </div>
        <button className="px-[8px] py-[4px] text-[14px] flex gap-[8px] items-center bg-[#B5D0B2] text-[#47893F] rounded-[4px]">
          <ShareIcon />
          Export
        </button>
      </div>
      <div className="mt-[30px] text-[14px]">
        <header className="h-[44px] bg-[#47893F] w-full p-[10px] items-center gap-[20px] text-white grid grid-cols-[20px_1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] mb-2">
          <div>
            <div className="border-[1px] border-white rounded-[4px] w-[20px] h-[20px]"></div>
          </div>
          <p>Landlord</p>
          <p>Tenant</p>
          <p>Address</p>
          <p>Unit</p>
          <p>Amount</p>
          <p>Payment Status</p>
          <p>Start Date</p>
          <p>Due Date</p>
          <p>Action</p>
        </header>
        <div className="flex flex-col gap-2">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="bg-white w-full p-[10px] items-center gap-[20px] grid grid-cols-[20px_1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] mb-2"
            >
              <div>
                <div className="border-[1px] border-[#828282] rounded-[4px] w-[20px] h-[20px]"></div>
              </div>
              <div>
                <div className="flex items-center gap-[5px] mb-[2px]">
                  <Image
                    src="/images/landlord-emoji.svg"
                    alt="Landlord Emoji"
                    width={24}
                    draggable={false}
                    height={24}
                  />
                  <p className="text-[#4f4f4f]">Akello Buma</p>
                </div>
                <p className="text-[10px] text-[#949494]">(+256) 567890123</p>
              </div>
              <div>
                <div className="flex items-center gap-[5px] mb-[2px]">
                  <Image
                    src="/images/tenant-emoji.svg"
                    alt="Landlord Emoji"
                    width={24}
                    height={24}
                    draggable={false}
                  />
                  <p className="text-[#4f4f4f]">Eric Smith</p>
                </div>
                <p className="text-[10px] text-[#949494]">(+256) 567890123</p>
              </div>
              <p>Kampala, Uganda</p>
              <p>1391234</p>
              <p>$600.45</p>
              <div className="bg-[#B5D0B2] rounded-[8px] px-[8px] py-[4px] flex gap-[8px] items-center">
                <span className="h-[4px] w-[4px] bg-[#47893F] rounded-[100%]"></span>
                <p className="text-[10px] text-[#47893F]">Tenancy</p>
              </div>
              <p>20 OCT, 2023</p>
              <p>19 OCT, 2024</p>
              <div className="flex items-center gap-2">
                <ShareYellowIcon />
                <DeleteRedIcon />
                <MoreVertIcon />
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-[30px] items-center justify-between">
          <button className="border-[#828282] text-[#828282] rounded-[6px] px-[8px] py-[4px] border-[1px] flex gap-2 items-center">
            <ChevronLeftIconIcon />
            Previous
          </button>
          <div className="flex items-center gap-2">
            <button className="w-[27px] h-[27px] rounded-[6px] bg-[#B5D0B2] text-[#47893F] grid place-items-center">
              1
            </button>
            <button className="w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center">
              2
            </button>
            <button className="w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center">
              3
            </button>
            <button className="w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center">
              ...
            </button>
            <button className="w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center">
              8
            </button>
            <button className="w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center">
              9
            </button>
            <button className="w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center">
              10
            </button>
          </div>
          <button className="text-[#47893F] bg-[#B5D0B2] rounded-[6px] px-[8px] py-[4px] border-[1px] flex gap-5 items-center">
            Next
            <ChevronRightGreenIcon />
          </button>
        </div>
      </div>
    </>
  );
}
