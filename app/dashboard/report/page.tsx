import Button from "@/components/button"
import {
  CalenderIcon,
  CalenderOutlineIcon,
  CancelIcon,
  ChevronLeftIcon,
  ChevronLeftIconIcon,
  ChevronRightGreenIcon,
  ChevronRightIcon,
  DeleteRedIcon,
  MoreVertIcon,
  SearchIcon,
  ShareIcon,
  ShareYellowIcon,
  StarIcon,
} from "@/components/svgs"
import Image from "next/image"

export default function Report() {
  return (
    <>
      <header className="flex gap-[30px]">
        <div className="px-[20px] py-[13px] bg-white w-[590px] rounded-[15px] flex flex-col gap-[12px]">
          <div className="flex justify-between">
            <div className="flex gap-[8px]">
              <Image
                src="/images/ratings-star.svg"
                width={40}
                height={40}
                draggable={false}
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
        <div className="px-[26px] py-[13px] bg-white w-[540px] bg-[url('/images/report-stripes.svg')] rounded-[15px] flex flex-col justify-between gap-[12px]">
          <div className="flex items-center justify-between">
            <p className="text-[#333436] text-[18px] font-semibold">
              Total Service Report
            </p>
            <h1 className="text-[#333436] text-[34px] font-semibold">234</h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#333436] text-[18px] font-semibold">
              Total Reviews
            </p>
            <h1 className="text-[#333436] text-[34px] font-semibold">136</h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#333436] text-[18px] font-semibold">
              Users In The Last 30 Mins
            </p>
            <h1 className="text-[#333436] text-[34px] font-semibold">23</h1>
          </div>
        </div>
      </header>
      <div className="w-full flex justify-between py-[12px] px-[32px] bg-white mt-[30px]">
        <div className="w-full max-w-[584px] items-center flex gap-[16px]">
          <SearchIcon />
          <input
            className="flex-1 w-full placeholder-[#828282] text-[14px]"
            placeholder="Search"
          />
        </div>
        <button className="px-[8px] py-[4px] text-[14px] flex gap-[8px] items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
          <CalenderOutlineIcon />
          Sept 2023
        </button>
      </div>
      <div className="w-full flex justify-between py-[12px] px-[32px] bg-white mt-[30px]">
        <div className="items-center flex gap-5">
          <p className="text-primary2 font-semibold border-b-[1px] border-b-primary2">
            Service Request Payments
          </p>
          <p className="text-[#949494] font-semibold border-b-[1px] border-b-[#949494]">
            Tenancy Payments
          </p>
        </div>
        <button className="px-[8px] py-[4px] text-[14px] flex gap-[8px] items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
          <ShareIcon />
          Export
        </button>
      </div>
      <div className="mt-[30px] text-[14px]">
        <header className="h-[44px] bg-primary2 w-full p-[10px] items-center gap-[20px] text-white grid grid-cols-[20px_1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] mb-2">
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
                    height={24}
                    draggable={false}
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
                <span className="h-[4px] w-[4px] bg-primary2 rounded-[100%]"></span>
                <p className="text-[10px] text-primary2">Tenancy</p>
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
            <button className="w-[27px] h-[27px] rounded-[6px] bg-[#B5D0B2] text-primary2 grid place-items-center">
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
          <button className="text-primary2 bg-[#B5D0B2] rounded-[6px] px-[8px] py-[4px] border-[1px] flex gap-5 items-center">
            Next
            <ChevronRightGreenIcon />
          </button>
        </div>
      </div>
    </>
  )
}

interface RatingsProps {
  percent: string
  ratings: string
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
  )
}
