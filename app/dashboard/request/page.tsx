"use client"
import Loading from "@/components/Loading"
import MemoNoRecord from "@/components/NoRecord"
import AddRequestDialog from "@/components/admin-dashboard/AddRequestDialog"
import Pagination from "@/components/admin-dashboard/Pagination"
import MemoPriorityBadge from "@/components/admin-dashboard/PriorityBadge"
import ProfileInTD from "@/components/admin-dashboard/ProfileInTD"
import RequestDialog from "@/components/admin-dashboard/RequestDialog"
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
} from "@/components/svgs"
import { useGetRequestsQuery } from "@/redux/endpoints"
import { cn } from "@/utils/cn"
import { months } from "@/utils/constants"
import { filter } from "@/utils/helpers"
import { RequestDetails } from "@/utils/types"
import { useEffect, useState } from "react"

export default function Request() {
  const { data: requests, isLoading: loading } = useGetRequestsQuery("")
  const [rRequests, setRRequests] = useState<RequestDetails[]>([])
  const [fRequests, setFRequests] = useState<RequestDetails[]>([])

  useEffect(() => {
    if (requests) {
      setRRequests(requests)
      setFRequests(requests)
    }
  }, [requests])

  const filterData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFRequests(filter(rRequests, e.target.value, "requests"))
    handlePageClick({ selected: 0 })
  }

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

  const [addrequestDialog, setaddRequestDialog] = useState(false)
  const [requestDialog, setRequestDialog] = useState(false)
  const [currentRequest, setCurrentRequest] = useState<any | null>(null)
  const cards = [
    {
      color: "#BCA8CC",
      icon: <RequestIcon className="stroke-white w-[34px] h-[34px]" />,
      title: "Total Number of Requests",
    },
    {
      color: "#8DBFD8",
      icon: <NotificationOutlineWhiteIcon />,
      title: "Active Requests",
    },
    {
      color: "#B0BEC5",
      icon: <ProgressiveClockWhiteIcon />,
      title: "Pending Requests",
    },
    {
      color: "#A9788C",
      icon: <DoubleCheckWhiteIcon />,
      title: "Completed Requests",
    },
    {
      color: "#958F6F",
      icon: <ProgressiveClockWhiteIcon />,
      title: "Active Service Providers",
    },
  ]
  return (
    <>
      <header>
        <div className="bg-white h-[55px] px-[16px] flex items-center justify-between rounded-t-[10px] mb-[8px]">
          <h1 className="text-[#949494] text-[18px]">Today at a glance</h1>
          <button
            onClick={() => setaddRequestDialog(true)}
            className="px-2 py-1 text-sm flex gap-2 items-center bg-[#B5D0B2] text-primary2 rounded-[4px]"
          >
            <AddGreenIcon />
            Add Request
          </button>
        </div>
        <div className="p-[22px] rounded-b-[10px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-sm bg-white gap-[16px]">
          {[
            { value: rRequests.length },
            { value: "--" },
            { value: "--" },
            { value: "--" },
            { value: "--" },
          ].map((each, i) => (
            <div
              key={i + "cards"}
              style={{ backgroundColor: cards[i].color }}
              className={cn(
                "md:min-h-[174px] flex flex-col justify-between rounded-[10px] px-[15px] py-[10px]",
                // i == 3 && "sm:col-span-2 md:col-span-1",
                i == 0 && "col-span-2 lg:col-span-1"
              )}
            >
              <div className="flex gap-2 text-white justify-between min-h-[40px]">
                <h1>{cards[i].title}</h1>
                <span className="hidden sm:inline"> {cards[i].icon}</span>
              </div>
              <div className="flex gap-[10px] mt-3">
                <h1 className="text-white text-[34px] font-semibold">
                  {each.value}
                </h1>
                <div className="flex items-center gap-[5px] mt-[10px]">
                  <ArrowGrowthWhiteIcon />
                  <p className="text-white text-sm font-semibold">0%</p>
                </div>
              </div>
              <div className="text-white flex justify-between items-center text-[12px]">
                <p>{rRequests.length} Requests made</p>
                <p>View</p>
              </div>
            </div>
          ))}
        </div>
      </header>
      <div className="w-full flex justify-between py-[12px] px-[22px] bg-white mt-[30px]">
        <div className="max-w-[584px] items-center flex gap-[16px]">
          <SearchIcon />
          <input
            onChange={filterData}
            className=" placeholder-[#828282] text-sm outline-none"
            placeholder="Search"
          />
        </div>
        <div className="flex w-fit items-center gap-x-6 flex-wrap gap-y-1.5">
          <button className="px-2 py-1 text-sm flex gap-2 items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
            <FilterGreenIcon />
            Filter
          </button>
          <button className="px-2 py-1 text-sm flex gap-2 items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
            <ShareIcon />
            Export
          </button>
          <button className="px-2 whitespace-nowrap py-1 text-sm flex gap-2 items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
            <CalenderOutlineIcon />
            {months[cdate.month].slice(0, 3)} {cdate.year}
          </button>
        </div>
      </div>
      <div className="mt-[30px] text-sm">
        {!requests?.length && !loading && (
          <div className="flex h-full gap-3 bg-white rounded-lg px-4 py-10 items-center justify-center flex-col">
            <MemoNoRecord className="w-1/5" />
            <p className="text-primary text-sm lg:text-lg">
              No Requests received yet
            </p>
          </div>
        )}
        {loading && <Loading />}
        {!loading && requests?.length && (
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
                {currentItems.map((each: any, i: number) => (
                  <tr
                    key={i + "request"}
                    className="bg-white border-y-8 border-bgprimaryfade"
                  >
                    <td className="p-3">
                      <div className="border-[1px] border-[#828282] rounded-[4px] w-[20px] h-[20px]"></div>
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      {each?.ticket}
                      <div className="text-xs">{each?.day}</div>
                    </td>
                    <td className="p-3">
                      <ProfileInTD
                        image=""
                        fullname={each.from == "landlord" ? each?.fullName : ""}
                        phone={each.from == "landlord" ? each?.phone : ""}
                      />
                    </td>
                    <td className="p-3">{each?.propertyLocation}</td>
                    <td className="p-3">
                      <ProfileInTD
                        image={each?.tenantPhoto}
                        fullname={each.from == "tenant" ? each?.fullName : ""}
                        phone={each.from == "tenant" ? each?.phone : ""}
                      />
                    </td>
                    <td className="p-3">
                      <ProfileInTD
                        image={each?.servicePersonnelPhoto}
                        name={each?.servicePersonnelName}
                        phone={each?.servicePersonnelPhone}
                      />
                    </td>
                    <td className="p-3">{each?.agent}</td>
                    <td className="p-3">
                      <StatusBadge status={each?.status} />
                    </td>
                    <td className="p-3">
                      <MemoPriorityBadge status={each?.priority} />
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2 h-fit">
                        <button
                          onClick={() => {
                            setCurrentRequest(each)
                            setRequestDialog(true)
                          }}
                        >
                          <InformationIcon />
                        </button>
                        <DeleteRedIcon />
                        <MoreVertIcon />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="flex bg-bgprimaryfade py-3 items-center justify-between">
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      </div>

      <RequestDialog
        isOpen={requestDialog}
        setIsOpen={setRequestDialog}
        request={currentRequest}
      />
      <AddRequestDialog
        isOpen={addrequestDialog}
        setIsOpen={setaddRequestDialog}
      />
    </>
  )
}
