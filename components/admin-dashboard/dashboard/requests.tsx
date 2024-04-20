import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DeleteRedIcon,
  ExpandMoreIcon,
  InformationIcon,
  MoreVertIcon,
  SearchIcon,
  TagIcon,
} from "@/components/svgs"
import { BASE_URL } from "@/config"
import { fetchAdminRequests } from "@/utils/api"
import { months } from "@/utils/constants"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import NoRecord from "../../NoRecord"
import Loading from "@/components/Loading"
import { useGetRequestsQuery } from "@/redux/endpoints"
import { RequestDetails } from "@/utils/types"

export default function Requests() {
  const { data: requests, isLoading: loading } = useGetRequestsQuery("")
  const [fRequests, setFRequests] = useState<RequestDetails[]>([])

  useEffect(() => {
    if (requests) {
      setFRequests(requests)
    }
  }, [requests])

  const cd = new Date()
  const [cdate, setcdate] = useState({
    month: cd.getMonth(),
    year: cd.getFullYear(),
  })

  const nextMonth = () => {
    let month, year
    if (cdate.month == months.length - 1) {
      month = 0
      year = cdate.year + 1
    } else {
      year = cdate.year
      month = cdate.month + 1
    }

    setcdate({ month, year })
  }

  const prevMonth = () => {
    let month, year
    if (cdate.month == 0) {
      month = months.length - 1
      year = cdate.year - 1
    } else {
      year = cdate.year
      month = cdate.month - 1
    }

    setcdate({ month, year })
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

  return (
    <div className="grid grid-cols-12 gap-[27px]">
      <div className="col-span-full md:col-span-8 xl:col-span-9 flex flex-col bg-white rounded-[5px] py-[10px] px-[5px]">
        <header className="py-[8px] px-[16px] flex justify-between items-center">
          <h1 className="text-[22px] font-semibold">Requests</h1>
          <div className="flex gap-[8px] justify-around items-center">
            <button
              onClick={prevMonth}
              className="border-[1px] border-[#7F947B] rounded-[6px] w-[24px] h-[24px] grid place-items-center"
            >
              <ChevronLeftIcon />
            </button>
            <h1 className="text-primary text-center font-semibold w-20">
              {months[cdate.month].slice(0, 3)} {cdate.year}
            </h1>
            <button
              onClick={nextMonth}
              className="border-[1px] border-[#7F947B] rounded-[6px] w-[24px] h-[24px] grid place-items-center"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </header>
        <div className="text-[14px] overflow-x-auto">
          {!requests?.length && !loading && (
            <div className="flex h-full gap-3 items-center justify-center flex-col">
              <NoRecord className="w-1/4" />
              <p className="text-primary text-sm lg:text-lg">
                No request found
              </p>
            </div>
          )}
          {loading && <Loading />}

          {!loading && requests?.length && (
            <table className="w-full">
              <thead>
                <tr className="bg-white80 border-t-4 border-[#D4DBD3] border-b-2">
                  <th className="text-textcolor100 px-3 py-2 font-normal text-left">
                    #
                  </th>
                  <th className="text-textcolor100 px-3 py-2 font-normal text-left">
                    Name of Lanlord
                  </th>
                  <th className="text-textcolor100 px-3 py-2 font-normal text-left">
                    Description
                  </th>
                  <th className="text-textcolor100 px-3 py-2 font-normal text-left">
                    Date
                  </th>
                  <th className="text-textcolor100 px-3 py-2 font-normal text-left">
                    Status
                  </th>
                  <th className="text-textcolor100 px-3 py-2 font-normal text-left">
                    Assigned Personnel
                  </th>
                </tr>
              </thead>
              <tbody>
                {requests &&
                  currentItems.map((each, i: number) => (
                    <tr
                      key={i + "req"}
                      className="hover:bg-[#7F947B] border-[#D4DBD3] border-b-2 text-sm group hover:text-white transition duration-300"
                    >
                      <td className="py-3 px-4">{itemOffset + i + 1}</td>
                      <td className="px-3 py-1">
                        <AvatarWithName
                          name={each.fullName}
                          src={each.tenantPhoto}
                        />
                      </td>
                      <td className="p-3">{each.problems?.join(", ")}</td>
                      <td>{each.day} </td>
                      <td className="px-3">
                        <span
                          className={`px-3 py-1.5 w-fit min-w-28 transition duration-300 gap-3 group-hover:text-white flex items-center rounded-lg whitespace-nowrap ${
                            each.status == "Pending"
                              ? "bg-[#FFBB0C4D] text-[#FFBB0C] group-hover:bg-[#FFBB0C80]"
                              : each.status == "Ongoing"
                              ? "bg-[#26CFDA4D] text-[#26CFDA] group-hover:bg-[#26CFDA80]"
                              : each.status == "Cancelled"
                              ? "bg-[#D500004D] text-[#D50000] group-hover:bg-[#D5000080]"
                              : each.status == "Completed"
                              ? "bg-[#14FF004D] text-[#14FF00] group-hover:bg-[#14FF0080]"
                              : "bg-[#26CFDA4D] text-[#26CFDA] group-hover:bg-[#26CFDA80]"
                          }`}
                        >
                          • <span className="mx-auto">{each.status}</span>
                        </span>
                      </td>
                      <td className="px-3 py-1">
                        <AvatarWithName
                          name={each.fullName}
                          src={each.tenantPhoto}
                        />
                      </td>
                      {/* {JSON.stringify(each)} */}
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="flex gap-3 justify-center text-sm mt-auto items-center px-3 py-2 xl:justify-between flex-wrap text-[#7F947B] border-y-4 border-[#D4DBD3]">
          <div className="flex gap-5 md:gap-7 flex-wrap items-center">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <select
                onChange={({ target }) => {
                  setItemsPerPage(Number(target.value))
                  handlePageClick({ selected: 0 })
                }}
                className="border border-[#3A3A3A66] rounded-lg"
              >
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="10">10</option>
              </select>
              <span>Lines</span>
            </div>
            <div>
              Showing {itemOffset + 1} to{" "}
              {endOffset - (itemsPerPage - currentItems.length)} of{" "}
              {requests?.length} requests
            </div>
          </div>

          <ReactPaginate
            className="flex text-xs items-center gap-2"
            breakLabel="..."
            nextLabel={
              <button className="dbtn">
                Next <ChevronRightIcon />
              </button>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            activeLinkClassName="bg-primary text-white"
            pageLinkClassName="dbtn"
            previousLabel={
              <button className="dbtn">
                <ChevronLeftIcon /> Previous
              </button>
            }
            renderOnZeroPageCount={null}
          />
        </div>
        <div className="flex items-center justify-center pt-2">
          <Link href={"/dashboard/request"} className="text-[#7F947B] w-fit">
            View All Tasks
          </Link>
        </div>
      </div>
      <Messages />
    </div>
  )
}

const Messages = () => {
  const msgs: any[] = [
    // { img: "/images/message-profile-img-1.svg", username: "Susan" },
    // { img: "/images/message-profile-img-2.svg", username: "Akello" },
    // { img: "/images/message-profile-img-3.svg", username: "Bryan" },
    // { img: "/images/message-profile-img-4.svg", username: "Mike" },
    // { img: "/images/message-profile-img-4.svg", username: "Mike" },
  ]
  return (
    <div className="col-span-full flex flex-col md:col-span-4 xl:col-span-3">
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
      <div className="bg-white80 h-full rounded-b-md py-[4px] px-[8px]">
        {!msgs.length && (
          <div className="flex h-full py-10 gap-3 items-center justify-center flex-col">
            <NoRecord className="w-20" />
            <p className="text-primary text-sm">No message yet</p>
          </div>
        )}
        {msgs.map((each) => (
          <MessageOverview key={each.username} {...each} />
        ))}
      </div>
    </div>
  )
}

const AvatarWithName = ({ name, src }: { name: string; src: string }) => {
  return (
    <span className="flex items-center gap-3">
      <Image
        height={100}
        width={100}
        alt="Tenant DP"
        src={src}
        className="w-10 min-w-10 h-10 rounded-full"
      />
      <span className="capitalize">{name}</span>
    </span>
  )
}

interface MessageOverviewProps {
  img: string
  username: string
}

const MessageOverview = ({ img, username }: MessageOverviewProps) => {
  return (
    <div className="flex gap-[11px] hover:text-white transition duration-300 group hover:bg-[#2A4C23] p-2">
      <figure>
        <Image
          src={img}
          alt="User Profile"
          className="w-10 min-w-10"
          width={40}
          height={40}
        />
      </figure>
      <div className="w-full">
        <header className="flex items-center justify-between">
          <h1 className="text-textcolor100 group-hover:text-white font-semibold">
            {username}
          </h1>
          <p className="text-[#949494] group-hover:text-white text-[10px]">
            10/08/2023
          </p>
        </header>
        <p className="text-[#949494] group-hover:text-white text-[12px]">
          Hello, tell me about the progress of the task?
        </p>
      </div>
    </div>
  )
}
