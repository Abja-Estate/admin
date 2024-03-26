"use client"
import Loading from "@/components/Loading"
import MemoNoRecord from "@/components/NoRecord"
import Pagination from "@/components/admin-dashboard/Pagination"
import MemoPriorityBadge from "@/components/admin-dashboard/PriorityBadge"
import ProfileInTD from "@/components/admin-dashboard/ProfileInTD"
import StatusBadge from "@/components/admin-dashboard/StatusBadge"
import {
  AddGreenIcon,
  ArrowGrowthWhiteIcon,
  CalenderOutlineIcon,
  DeleteRedIcon,
  DoubleCheckWhiteIcon,
  FilterGreenIcon,
  InformationIcon,
  MoreVertIcon,
  NotificationOutlineWhiteIcon,
  ProgressiveClockWhiteIcon,
  RequestIcon,
  SearchIcon,
  ShareIcon,
  TagIcon,
  TaskCompleteWhiteIcon,
} from "@/components/svgs"
import { useGetRequestsQuery } from "@/redux/endpoints"
import { months } from "@/utils/constants"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Request() {
  const { data: requests, isLoading: loading } = useGetRequestsQuery("")
  const [fRequests, setFRequests] = useState<any>([])

  useEffect(() => {
    if (requests) {
      setFRequests(
        requests
          .filter((each) => each.requests.length)
          .map((each) => each.requests[0])
      )
    }
  }, [requests])

  // for pagination
  const [itemOffset, setItemOffset] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = fRequests?.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(fRequests?.length / itemsPerPage)
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % fRequests?.length
    setItemOffset(newOffset)
  }

  const cd = new Date()
  const [cdate, setcdate] = useState({
    month: cd.getMonth(),
    year: cd.getFullYear(),
  })
  return (
    <>
      <header>
        <div className="bg-white h-[55px] px-[16px] flex items-center justify-between rounded-t-[10px] mb-[8px]">
          <h1 className="text-[#949494] text-[18px]">Today at a glance</h1>
          <button className="px-[8px] py-[4px] text-[14px] flex gap-[8px] items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
            <AddGreenIcon />
            Add Request
          </button>
        </div>
        <div className="p-[22px] rounded-b-[10px] flex bg-white gap-[16px]">
          <div className="w-[212px] h-[174px] bg-[#BCA8CC] flex flex-col justify-between rounded-[10px] px-[15px] py-[10px]">
            <div className="flex text-white justify-between h-[40px]">
              <h1>Total Number of Requests</h1>
              <RequestIcon className="stroke-white w-[34px] h-[34px]" />
            </div>
            <div className="flex gap-[10px]">
              <h1 className="text-white text-[34px] font-semibold">102</h1>
              <div className="flex items-center gap-[5px] mt-[10px]">
                <ArrowGrowthWhiteIcon />
                <p className="text-white text-[14px] font-semibold">17%</p>
              </div>
            </div>
            <div className="text-white flex justify-between items-center text-[12px]">
              <p>7 Requests made</p>
              <p>View</p>
            </div>
          </div>
          <div className="w-[212px] h-[174px] bg-[#8DBFD8] flex flex-col justify-between rounded-[10px] px-[15px] py-[10px]">
            <div className="flex justify-between text-white h-[40px]">
              <h1>Active Requests</h1>
              <NotificationOutlineWhiteIcon />
            </div>
            <div className="flex gap-[10px]">
              <h1 className="text-white text-[34px] font-semibold">102</h1>
              <div className="flex items-center gap-[5px] mt-[10px]">
                <ArrowGrowthWhiteIcon />
                <p className="text-white text-[14px] font-semibold">17%</p>
              </div>
            </div>
            <div className="text-white flex justify-between items-center text-[12px]">
              <p>7 Requests made</p>
              <p>View</p>
            </div>
          </div>
          <div className="w-[212px] h-[174px] bg-[#B0BEC5] flex flex-col justify-between rounded-[10px] px-[15px] py-[10px]">
            <div className="flex justify-between text-white h-[40px]">
              <h1>Pending Requests</h1>
              <ProgressiveClockWhiteIcon />
            </div>
            <div className="flex gap-[10px]">
              <h1 className="text-white text-[34px] font-semibold">102</h1>
              <div className="flex items-center gap-[5px] mt-[10px]">
                <ArrowGrowthWhiteIcon />
                <p className="text-white text-[14px] font-semibold">17%</p>
              </div>
            </div>
            <div className="text-white flex justify-between items-center text-[12px]">
              <p>8 Requests made</p>
              <p>View</p>
            </div>
          </div>
          <div className="w-[212px] h-[174px] bg-[#A9788C] flex flex-col justify-between rounded-[10px] px-[15px] py-[10px]">
            <div className="flex justify-between text-white h-[40px]">
              <h1>Completed Requests</h1>
              <DoubleCheckWhiteIcon />
            </div>
            <div className="flex gap-[10px]">
              <h1 className="text-white text-[34px] font-semibold">102</h1>
              <div className="flex items-center gap-[5px] mt-[10px]">
                <ArrowGrowthWhiteIcon />
                <p className="text-white text-[14px] font-semibold">17%</p>
              </div>
            </div>
            <div className="text-white flex justify-between items-center text-[12px]">
              <p>8 Requests made</p>
              <p>View</p>
            </div>
          </div>
          <div className="w-[212px] h-[174px] bg-[#958F6F] flex flex-col justify-between rounded-[10px] px-[15px] py-[10px]">
            <div className="flex justify-between text-white h-[40px]">
              <h1>Active Service Providers</h1>
              <TaskCompleteWhiteIcon />
            </div>
            <div className="flex gap-[10px]">
              <h1 className="text-white text-[34px] font-semibold">102</h1>
              <div className="flex items-center gap-[5px] mt-[10px]">
                <ArrowGrowthWhiteIcon />
                <p className="text-white text-[14px] font-semibold">17%</p>
              </div>
            </div>
            <div className="text-white flex justify-between items-center text-[12px]">
              <p>7 Requests made</p>
              <p>View</p>
            </div>
          </div>
        </div>
      </header>
      <div className="w-full flex justify-between py-[12px] px-[22px] bg-white mt-[30px]">
        <div className="w-full max-w-[584px] items-center flex gap-[16px]">
          <SearchIcon />
          <input
            className="flex-1 w-full placeholder-[#828282] text-[14px]"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center gap-[24px]">
          <button className="px-[8px] py-[4px] text-[14px] flex gap-[8px] items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
            <FilterGreenIcon />
            Filter
          </button>
          <button className="px-[8px] py-[4px] text-[14px] flex gap-[8px] items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
            <ShareIcon />
            Export
          </button>
          <button className="px-[8px] py-[4px] text-[14px] flex gap-[8px] items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
            <CalenderOutlineIcon />
            {months[cdate.month].slice(0, 3)} {cdate.year}
          </button>
        </div>
      </div>
      <div className="mt-[30px] text-[14px]">
        {!requests?.length && !loading && (
          <div className="flex h-full gap-3 bg-white rounded-lg px-4 py-10 items-center justify-center flex-col">
            <MemoNoRecord className="w-1/5" />
            <p className="text-primary text-sm lg:text-lg">
              No Requests received yet
            </p>
          </div>
        )}

        {loading && <Loading />}

        <div className="overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary2 text-white">
                <td className="p-3">
                  <div className="border-[1px] border-white rounded-[4px] w-[20px] h-[20px]"></div>
                </td>
                <td className="p-3">ID</td>
                <td className="p-3">Landlord</td>
                <td className="p-3">Address</td>
                <td className="p-3">Tenant</td>
                <td className="p-3">Service Personnel</td>
                <td className="p-3">Service</td>
                <td className="p-3">Request Status</td>
                <td className="p-3">Priority</td>
                <td className="p-3">Action</td>
              </tr>
            </thead>

            <tbody>
              {Array(10)
                .fill(0)
                .map((each, i) => (
                  <tr
                    key={i + "request"}
                    className="bg-white border-y-8 border-bgprimaryfade"
                  >
                    <td className="p-3">
                      <div className="border-[1px] border-[#828282] rounded-[4px] w-[20px] h-[20px]"></div>
                    </td>
                    <td className="p-3">89678</td>
                    <td className="p-3">
                      <ProfileInTD
                        image="/images/landlord-emoji.svg"
                        name="Hello"
                        surname="Lastname"
                        phone="(+256) 567890123"
                      />
                    </td>
                    <td className="p-3">{"request propertyLocation"}</td>
                    <td className="p-3">
                      <ProfileInTD
                        image="/images/tenant-emoji.svg"
                        name="Hello"
                        surname="Lastname"
                        phone="(+256) 567890123"
                      />
                    </td>
                    <td className="p-3">
                      <ProfileInTD
                        image="/images/tenant-emoji.svg"
                        name="Hello"
                        surname="Lastname"
                        phone="(+256) 567890123"
                      />
                    </td>
                    <td className="p-3">Electrician</td>
                    <td className="p-3">
                      <StatusBadge status="ongoing" />
                    </td>
                    <td className="p-3">
                      <MemoPriorityBadge status="Medium Priority" />
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2 h-fit">
                        <InformationIcon />
                        <DeleteRedIcon />
                        <MoreVertIcon />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-2">
          {!loading &&
            requests?.length &&
            currentItems.map((request: any, i: number) => (
              <div
                key={i}
                className="bg-white w-full p-[10px] gap-[20px] grid grid-cols-[20px_60px_1.2fr_1fr_1fr_1.4fr_0.8fr_0.9fr_1fr_0.82fr] mb-2"
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
                    <p className="text-[#4f4f4f]">{request?.fullName}</p>
                  </div>
                  <p className="text-[10px] text-[#949494]">{request?.phone}</p>
                </div>
                <p>{request?.propertyLocation}</p>
                <p>{request?.day}</p>
                <p>{request?.agent}</p>
                <div className="bg-[#B5D0B2] rounded-[8px] px-[8px] py-[4px] flex gap-[8px] items-center h-fit">
                  <span className="h-[4px] w-[4px] bg-primary2 rounded-[100%]"></span>
                  <p className="text-[10px] text-primary2">{request?.status}</p>
                </div>
                <div className="bg-[#FCE6E6] rounded-[8px] px-[8px] py-[4px] flex gap-[8px] items-center h-fit">
                  <TagIcon />
                  <p className="text-[10px] text-[#EB5757]">
                    {request?.priority}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex bg-bgprimaryfade py-3 items-center justify-between">
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      </div>
    </>
  )
}
