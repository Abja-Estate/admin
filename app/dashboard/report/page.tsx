"use client"
import MemoNoRecord from "@/components/NoRecord"
import Button from "@/components/button"
import {
  CalenderOutlineIcon,
  CancelIcon,
  SearchIcon,
  StarIcon,
} from "@/components/svgs"
import { months } from "@/utils/constants"
import Image from "next/image"
import { useState } from "react"

export default function Report() {
  const cd = new Date()
  const [cdate, setcdate] = useState({
    month: cd.getMonth(),
    year: cd.getFullYear(),
  })

  return (
    <>
      <header className="grid md:grid-cols-2 gap-[30px]">
        <div className="px-[20px] py-[13px] bg-white rounded-[15px] flex flex-col gap-[12px]">
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
                <h1 className="text-[14px] font-semibold text-textcolor100">
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
            <h1 className="text-[32px]">0</h1>
            <div className="h-[32px] border-l-[#949494] border-l-[1px] pl-[5px]">
              <div className="flex mb-[8px]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <div className="flex gap-[8px] text-[10px]">
                <p className="font-light">0</p>
                <p>0 Ratings</p>
                <p className="underline">0 reviews</p>
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
        <div className="px-[26px] py-[13px] bg-cover bg-white bg-[url('/images/report-stripes.svg')] rounded-[15px] flex flex-col justify-between gap-[12px]">
          <div className="flex items-center justify-between">
            <p className="text-textcolor100 text-[18px] font-semibold">
              Total Service Report
            </p>
            <h1 className="text-textcolor100 text-[34px] font-semibold">--</h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-textcolor100 text-[18px] font-semibold">
              Total Reviews
            </p>
            <h1 className="text-textcolor100 text-[34px] font-semibold">--</h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-textcolor100 text-[18px] font-semibold">
              Users In The Last 30 Mins
            </p>
            <h1 className="text-textcolor100 text-[34px] font-semibold">--</h1>
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
          {months[cdate.month].slice(0, 3)} {cdate.year}
        </button>
      </div>

      <div className="flex h-full gap-3 bg-white rounded-lg px-4 py-10 items-center justify-center flex-col">
        <MemoNoRecord className="w-1/5" />
        <p className="text-primary text-sm lg:text-lg">No report yet</p>
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
        <span className="text-textcolor100 text-[10px] font-light">
          {ratings}
        </span>
        <div className="-mt-[3.8px]">
          <StarIcon />
        </div>
      </div>
    </div>
  )
}
