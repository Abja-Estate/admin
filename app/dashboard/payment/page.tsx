"use client"

import MemoNoRecord from "@/components/NoRecord"
import Pagination from "@/components/admin-dashboard/Pagination"
import PaymentChart from "@/components/admin-dashboard/PaymentChart"
import ProfileInTD from "@/components/admin-dashboard/ProfileInTD"
import StatusBadge from "@/components/admin-dashboard/StatusBadge"
import Button from "@/components/button"
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
} from "@/components/svgs"
import { months } from "@/utils/constants"
import Image from "next/image"
import { useState } from "react"

export default function AdminPayment() {
  const cd = new Date()
  const [cdate, setcdate] = useState({
    month: cd.getMonth(),
    year: cd.getFullYear(),
  })

  const data: any[] = []

  // for pagination
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 5
  const endOffset = itemOffset + itemsPerPage
  const currentItems = data.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(data.length / itemsPerPage)
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <header className="grid md:grid-cols-5 gap-x-7 gap-y-4">
        <div className="px-[26px] py-[13px] md:col-span-2 bg-white h-[308px] bg-[url('/images/report-stripes.svg')] rounded-[20px] flex flex-col gap-[12px]">
          <div className="flex justify-between mb-[20px]">
            <h1 className="text-textcolor100 text-[18px]">Payments</h1>
            <CashBillIcon />
          </div>
          <div className="flex mb-[28px]">
            <h1 className="text-textcolor100 text-[34px] font-semibold">--</h1>
            <p className="text-primary2 text-[12px] mt-[22px] ml-[2px]">
              Total Payments
            </p>
          </div>
          <div>
            <div className="mb-[12px]">
              <div className="h-[10px] rounded-[20px] bg-[#009A49]"></div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[5px]">
                <h1 className="text-textcolor100 text-[22px] font-semibold">
                  $0
                </h1>
                <div className="flex items-center gap-[5px]">
                  <ArrowGrowthIcon />
                  <p className="text-textcolor100 text-[14px] font-semibold">
                    0%
                  </p>
                </div>
              </div>
              <p className="text-[14px] text-primary2 mt-[5px]">
                Last Year: {cd.getFullYear() - 1}
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
                <h1 className="text-textcolor100 text-[22px] font-semibold">
                  $0
                </h1>
                <div className="flex items-center gap-[5px]">
                  <ArrowGrowthIcon />
                  <p className="text-textcolor100 text-[14px] font-semibold">
                    0%
                  </p>
                </div>
              </div>
              <p className="text-[14px] text-primary2 mt-[5px]">
                This Year: {cd.getFullYear()}
              </p>
            </div>
          </div>
        </div>
        <div className="h-[308px] md:col-span-3 rounded-[20px] bg-white px-[24px]">
          <PaymentChart />
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
      {!data?.length && (
        <div className="flex bg-white h-full gap-3 py-10 items-center justify-center flex-col">
          <MemoNoRecord className="w-1/5" />
          <p className="text-primary text-sm lg:text-lg">No Payment found</p>
        </div>
      )}
      {/* {isLoading && <Loading />} */}

      {data.length && (
        <div className="mt-[30px] text-[14px] w-full overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary2 text-white">
                <td className="p-3">
                  <div className="border-[1px] border-white rounded-[4px] w-[20px] h-[20px]"></div>
                </td>
                <td className="p-3">Landlord</td>
                <td className="p-3">Tenant</td>
                <td className="p-3">Address</td>
                <td className="p-3">Unit</td>
                <td className="p-3">Amount</td>
                <td className="p-3">Payment Status</td>
                <td className="p-3">Start Date</td>
                <td className="p-3">Due Date</td>
                <td className="p-3">Action</td>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((each, idx) => (
                <tr
                  key={idx + "paymtn"}
                  className="bg-white border-y-8 border-bgprimaryfade"
                >
                  <td className="p-3">
                    <div className="border-[1px] border-[#828282] rounded-[4px] w-[20px] h-[20px]"></div>
                  </td>
                  <td className="p-3">
                    <ProfileInTD
                      fullname="Akello Buma"
                      phone="(+256) 567890123"
                    />
                  </td>
                  <td className="p-3">
                    <ProfileInTD
                      fullname="Akello Buma"
                      phone="(+256) 567890123"
                    />
                  </td>
                  <td className="p-3">Kampala, Uganda</td>
                  <td className="p-3">1391234</td>
                  <td className="p-3">$600.45</td>
                  <td className="p-3">
                    <StatusBadge status="Recieved" />
                  </td>
                  <td className="p-3">20 OCT, 2023</td>
                  <td className="p-3">19 OCT, 2024</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <ShareYellowIcon />
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

      <div className="flex mt-3 bg-bgprimaryfade p-3 items-center justify-between">
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
    </>
  )
}
