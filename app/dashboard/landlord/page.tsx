"use client"
import * as SVGIcon from "@/components/svgs"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import MemoNoRecord from "@/components/NoRecord"
import Loading from "@/components/Loading"
import ReactPaginate from "react-paginate"
import {
  useGetLandlordsQuery,
  useGetPropertiesQuery,
  useGetRequestsQuery,
} from "@/redux/endpoints"
import { LandLord } from "@/utils/types"

export default function AdminLandord() {
  const { data, isLoading } = useGetLandlordsQuery("")
  const { data: requests } = useGetRequestsQuery("")
  const { data: properties } = useGetPropertiesQuery("")

  const [filteredLandLords, setFilteredLandLords] = useState<LandLord[]>([])

  useEffect(() => {
    if (data) {
      setFilteredLandLords(data)
    }
  }, [data])

  // for pagination
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 5
  const endOffset = itemOffset + itemsPerPage
  const currentItems = filteredLandLords.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(filteredLandLords.length / itemsPerPage)
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredLandLords.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <header>
        <div className="bg-white h-[55px] px-[16px] flex items-center justify-between rounded-t-[10px] mb-[8px]">
          <h1 className="text-[#949494] text-[18px]">Today at a glance</h1>
          <button className="px-[8px] py-[4px] text-[14px] whitespace-nowrap flex gap-[8px] items-center bg-[#B5D0B2] text-[#47893F] rounded-[4px]">
            <SVGIcon.AddGreenIcon />
            Add Landlord
          </button>
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
      <div className="my-[24px]">
        <Link href="/landlord">
          <span className="text-[#47893F] font-bold text-[22px]">
            Landlords /
          </span>
        </Link>
      </div>
      <div className="w-full flex justify-between py-[12px] px-[22px] bg-white mt-[30px]">
        <div className=" items-center flex gap-[16px]">
          <SVGIcon.SearchIcon />
          <input
            className="flex-1 outline-none w-full placeholder-[#828282] text-[14px]"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-[24px] gap-y-2">
          <button className="px-[8px] py-[4px] text-[14px] whitespace-nowrap flex gap-[8px] items-center bg-[#B5D0B2] text-[#47893F] rounded-[4px]">
            <SVGIcon.FilterGreenIcon />
            Filter
          </button>
          <button className="px-[8px] py-[4px] text-[14px] whitespace-nowrap flex gap-[8px] items-center bg-[#B5D0B2] text-[#47893F] rounded-[4px]">
            <SVGIcon.ShareIcon />
            Export
          </button>
          <button className="px-[8px] py-[4px] text-[14px] whitespace-nowrap flex gap-[8px] items-center bg-[#B5D0B2] text-[#47893F] rounded-[4px]">
            <SVGIcon.CalenderOutlineIcon />
            Sept 2023
          </button>
        </div>
      </div>
      <div className="mt-[30px] bg-white text-[14px]">
        {!data?.length && !isLoading && (
          <div className="flex h-full gap-3 py-10 items-center justify-center flex-col">
            <MemoNoRecord className="w-1/5" />
            <p className="text-primary text-sm lg:text-lg">No Landlord found</p>
          </div>
        )}
        {isLoading && <Loading />}

        {data?.length && (
          <div className="overflow-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="bg-[#47893F] text-left">
                  <td className="p-2">
                    <div className="border-[1px] border-white rounded-[4px] w-[20px] h-[20px]"></div>
                  </td>
                  <td className="p-2 py-3">Landlord</td>
                  <td className="p-2 py-3">Address</td>
                  <td className="p-2 py-3">Email Address</td>
                  <td className="p-2 py-3">Properties</td>
                  <td className="p-2 py-3">Tenants</td>
                  <td className="p-2 py-3">Status</td>
                  <td className="p-2">Action</td>
                </tr>
              </thead>
              <tbody>
                {data &&
                  currentItems.map((landlord: any, i: number) => (
                    <tr
                      className="bg-white text-[#4F4F4F] border-t-8 border-[#EAEDE9]"
                      key={i + "landlord"}
                    >
                      <td className="p-2">
                        <div className="border-[1px] border-[#828282] rounded-[4px] w-[20px] h-[20px]"></div>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-[5px] mb-[2px]">
                          <Image
                            src={landlord.selfie}
                            alt="Landlord Emoji"
                            className="rounded-full object-cover"
                            width={24}
                            height={24}
                          />
                          <p className="text-[#4f4f4f]">
                            {landlord.name} {landlord.name}
                          </p>
                        </div>
                        <p className="text-[10px] text-[#949494]">
                          {landlord.phone}
                        </p>
                      </td>
                      <td className="p-2"></td>
                      <td className="p-2">{landlord.email}</td>
                      <td className="p-2 whitespace-nowrap">
                        {
                          landlord.history.filter(
                            (each: any) => each.type == "propertyCreation"
                          ).length
                        }{" "}
                        Properties
                      </td>
                      <td className="p-2">
                        <Images
                          images={landlord.history
                            .filter((each: any) => each.type == "tenantAdded")
                            .map((each: any) => each.data.selfie)}
                        />
                      </td>
                      <td className="p-2">
                        <span
                          className={`px-3 py-1.5 w-fit min-w-28 transition duration-300 gap-3 group-hover:text-white flex items-center rounded-lg whitespace-nowrap ${
                            landlord.active
                              ? "bg-primaryFade text-[#47893F] group-hover:bg-[#14FF0080]"
                              : "bg-[#D500004D] text-[#D50000] group-hover:bg-[#D5000080]"
                          }`}
                        >
                          •{" "}
                          <span className="mx-auto">
                            {landlord.active ? "Active" : "Not Active"}
                          </span>
                        </span>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2 xl:gap-4 h-fit">
                          <SVGIcon.EditGreenIcon />
                          <SVGIcon.ShareYellowIcon />
                          <SVGIcon.DeleteRedIcon />
                          <SVGIcon.MoreVertIcon />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex mt-3 bg-[#EAEDE9] p-3 items-center justify-between">
          <ReactPaginate
            className="flex text-xs items-center gap-2 npage w-full justify-center"
            breakLabel="..."
            nextLabel={
              <button className="hover:text-[#47893F] hover:bg-[#B5D0B2] bg-white transition border-[#828282] text-[#828282]  rounded-[6px] px-[8px] py-[4px] border-[1px] flex gap-5 items-center">
                Next
                <SVGIcon.ChevronRightGreenIcon />
              </button>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            activeLinkClassName="bg-primaryFade text-[#47893F]"
            pageLinkClassName="hover:text-[#47893F] hover:bg-[#B5D0B2] w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center"
            previousLabel={
              <button className="hover:text-[#47893F] hover:primaryFade border-[#828282] bg-white text-[#828282] rounded-[6px] px-[8px] py-[4px] border-[1px] flex gap-2 items-center">
                <SVGIcon.ChevronLeftIconIcon />
                Previous
              </button>
            }
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  )
}

const Images = ({ images }: { images?: string[] }) => {
  const LIMIT = 3
  return (
    <div className="flex items-center">
      {images
        ?.filter((each, i) => i < LIMIT)
        .map((each) => (
          <SmallAvatar src={each} key={each} />
        ))}
      {images && images?.length > LIMIT && (
        <div className=" grid place-items-center text-sm text-[#949494] pl-3 whitespace-nowrap">
          +{images.length - LIMIT} persons
        </div>
      )}
    </div>
  )
}

const SmallAvatar = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="User"
      width={25}
      height={25}
      className="-ml-[10px] xl:-ml-[14px] 2xl:-ml-[10px] ring-1 ring-white w-[1.65rem] h-[1.65rem] object-cover min-w-[1.65rem] rounded-full"
    />
  )
}
