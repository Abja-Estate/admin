"use client"
import AvatarStack from "@/components/admin-dashboard/AvatarStack"
import LandlordsHeader from "@/components/admin-dashboard/LandlordsHeader"
import Pagination from "@/components/admin-dashboard/Pagination"
import StatusBadge from "@/components/admin-dashboard/StatusBadge"
import {
  AddGreenIcon,
  ArrowGrowthWhiteIcon,
  ChevronLeftIconIcon,
  ChevronRightGreenIcon,
  DeleteRedIcon,
  HouseWhiteIcon,
  InformationIcon,
  LocationIcon,
  NotificationOutlineWhiteIcon,
  ProgressiveClockWhiteIcon,
  ShareYellowIcon,
} from "@/components/svgs"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import ReactPaginate from "react-paginate"

export default function Tenant({ params }: { params: { landlord: string } }) {
  const [filteredTenants, setfilteredTenants] = useState<any[]>(
    new Array(64).fill(0)
  )

  // for pagination
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 5
  const endOffset = itemOffset + itemsPerPage
  const currentItems = filteredTenants.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(filteredTenants.length / itemsPerPage)
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredTenants.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <LandlordsHeader />
      <div className="my-[24px] flex flex-wrap items-center gap-2">
        <Link href="/dashboard/landlord">
          <span className="text-[22px] whitespace-nowrap">Landlords /</span>
        </Link>
        <Link href="#">
          <span className="text-primary2 whitespace-nowrap font-bold text-[22px]">
            Landlord&rsquo;s Tenant /
          </span>
        </Link>
      </div>
      <div className="w-full flex flex-wrap items-center justify-between py-[16px] px-[22px] bg-white">
        <div className="flex flex-col sm:flex-row gap-[20px]">
          <Image
            src="/images/tenant-profile-img.svg"
            alt="Tenant Profile"
            width={100}
            height={100}
          />
          <div className="py-[8px] text-sm sm:text-base">
            <h1 className="text-textcolor100 text-[18px] font-semibold mb-[12px]">
              Akello Buma
            </h1>
            <div className="flex flex-wrap items-center gap-[19px] text-[#949494] mb-[4.5px]">
              <p>@AkelloBuma</p>
              <div className="bg-textcolor100 w-[1px] h-[19px]"></div>
              <p>(+256) 567890123</p>
            </div>
            <div className="gap-[16px] flex items-center">
              <LocationIcon />
              <p className="text-[#949494] text-[14px]">Kampala, Uganda</p>
            </div>
          </div>
        </div>
        <div>
          <Link
            href={`/dashboard/landlord/${params.landlord}`}
            className="text-white w-[140px] h-[38px] grid place-items-center rounded-[6px] bg-[#2A4C23]"
          >
            View Profile
          </Link>
        </div>
      </div>
      <div className="mt-[30px] text-[14px] overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-primary2 text-white">
              <td className="p-3">
                <div className="border-[1px] border-white rounded-[4px] w-[20px] h-[20px]"></div>
              </td>
              <td className="p-3">Landlord</td>
              <td className="p-3">Address</td>
              <td className="p-3">Email Address</td>
              <td className="p-3">Properties</td>
              <td className="p-3">Tenants</td>
              <td className="p-3">Request Status</td>
              <td className="p-3">Action</td>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((each, i) => (
              <tr
                key={i + "ten"}
                className="bg-white border-y-8 border-bgprimaryfade"
              >
                <td className="p-3">
                  <div className="border-[1px] border-[#828282] rounded-[4px] w-[20px] h-[20px]"></div>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-[5px] mb-[2px]">
                    <Image
                      src="/images/landlord-emoji.svg"
                      alt="Landlord Emoji"
                      width={24}
                      height={24}
                    />
                    <p className="text-[#4f4f4f]">Akello Buma</p>
                  </div>
                  <p className="text-[10px] text-[#949494]">(+256) 567890123</p>
                </td>
                <td className="p-3">Kampala, Uganda</td>
                <td className="p-3">akello.buma@gmail.com</td>
                <td className="p-3">12 Properties</td>
                <td className="p-3">
                  <AvatarStack
                    images={Array(15).fill("/images/tenant-emoji.svg")}
                  />
                </td>
                <td className="p-3">
                  <StatusBadge status="completed" />
                </td>
                <td className="p-3">
                  <span className="flex items-center gap-3">
                    <InformationIcon />
                    <ShareYellowIcon />
                    <DeleteRedIcon />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex bg-bgprimaryfade py-3 items-center justify-between">
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      </div>
    </>
  )
}
