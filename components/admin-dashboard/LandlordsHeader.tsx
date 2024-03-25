import React from "react"
import * as SVGIcon from "@/components/svgs"
import LandlordDialog from "./LandlordDialog"
import {
  useGetLandlordsQuery,
  useGetPropertiesQuery,
  useGetRequestsQuery,
} from "@/redux/endpoints"

const LandlordsHeader = () => {
  const { data, isLoading } = useGetLandlordsQuery("")
  const { data: properties } = useGetPropertiesQuery("")
  const { data: requests } = useGetRequestsQuery("")

  return (
    <header>
      <div className="bg-white h-[55px] px-[16px] flex items-center justify-between rounded-t-[10px] mb-[8px]">
        <h1 className="text-[#949494] text-[18px]">Today at a glance</h1>
        <LandlordDialog
          toggle={
            <span className="px-[8px] py-[4px] text-[14px] whitespace-nowrap flex gap-[8px] items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
              <SVGIcon.AddGreenIcon />
              Add Landlord
            </span>
          }
        />
      </div>
      <div className="p-[22px] rounded-b-[10px] grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 bg-white gap-[16px]">
        <div className="h-[174px] bg-[#2F80ED] flex flex-col justify-between rounded-[10px] px-[15px] py-[10px]">
          <div className="flex text-white justify-between h-[40px] gap-[10px]">
            <h1>Total Number of Landlords</h1>
            <SVGIcon.HouseWhiteIcon />
          </div>
          <div className="flex gap-[10px]">
            <h1 className="text-white text-[34px] font-semibold">
              {data && data.length}
            </h1>
            <div className="flex items-center gap-[5px] mt-[10px]">
              <SVGIcon.ArrowGrowthWhiteIcon />
              <p className="text-white text-[14px] font-semibold">17%</p>
            </div>
          </div>
          <div className="text-white flex justify-between items-center text-[12px]">
            <p>7 Requests made</p>
            <p>View</p>
          </div>
        </div>
        <div className="h-[174px] bg-[#6FCF97] flex flex-col justify-between rounded-[10px] px-[15px] py-[10px]">
          <div className="flex justify-between text-white h-[40px] gap-[10px]">
            <h1>Total Number of Properties</h1>
            <SVGIcon.NotificationOutlineWhiteIcon />
          </div>
          <div className="flex gap-[10px]">
            <h1 className="text-white text-[34px] font-semibold">
              {properties && properties.length}
            </h1>
            <div className="flex items-center gap-[5px] mt-[10px]">
              <SVGIcon.ArrowGrowthWhiteIcon />
              <p className="text-white text-[14px] font-semibold">17%</p>
            </div>
          </div>
          <div className="text-white flex justify-between items-center text-[12px]">
            <p>7 Requests made</p>
            <p>View</p>
          </div>
        </div>
        <div className="h-[174px] bg-[#B0BEC5] flex flex-col justify-between rounded-[10px] px-[15px] py-[10px]">
          <div className="flex justify-between text-white h-[40px] gap-[10px]">
            <h1>Total Number of Requests</h1>
            <SVGIcon.ProgressiveClockWhiteIcon />
          </div>
          <div className="flex gap-[10px]">
            <h1 className="text-white text-[34px] font-semibold">
              {requests && requests.length}
            </h1>
            <div className="flex items-center gap-[5px] mt-[10px]">
              <SVGIcon.ArrowGrowthWhiteIcon />
              <p className="text-white text-[14px] font-semibold">17%</p>
            </div>
          </div>
          <div className="text-white flex justify-between items-center text-[12px]">
            <p>8 Requests made</p>
            <p>View</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default LandlordsHeader
