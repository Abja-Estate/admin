"use client"
import AvatarStack from "@/components/admin-dashboard/AvatarStack"
import Pagination from "@/components/admin-dashboard/Pagination"
import StatusBadge from "@/components/admin-dashboard/StatusBadge"
import TenantDetailsDialog from "@/components/admin-dashboard/TenantDetailsDialog"
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
import { useCallback, useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { AreYouSureProps, LandlordData, TenantInfo } from "@/utils/types"
import { AnyObject } from "yup"
import toast from "react-hot-toast"
import {
  appApi,
  useDeleteTenantMutation,
  useGetLandlordMutation,
} from "@/redux/endpoints"
import LandlordsHeader from "@/components/admin-dashboard/LandlordsHeader"
import AreYouSure from "@/components/AreYouSure"
import ProfileInTD from "@/components/admin-dashboard/ProfileInTD"
import CustomImage from "@/components/CustomImage"

export default function Tenant({ params }: { params: { landlord: string } }) {
  const [landlordData, setLandlordData] = useState<LandlordData | null>(null)
  const [fetchLandlordData] = useGetLandlordMutation()

  const fetchL = useCallback(async () => {
    const resp = await fetchLandlordData({
      landlordID: params.landlord,
    })
    if ("data" in resp && resp.data.landlordInfo) {
      setLandlordData(resp.data)
      setfilteredTenants(resp.data.tenants)
    }
  }, [params.landlord, fetchLandlordData])

  useEffect(() => {
    fetchL()
  }, [fetchL])

  const [filteredTenants, setfilteredTenants] = useState<TenantInfo[]>(
    // new Array(64).fill(0)
    []
  )
  const [deleteATenant] = useDeleteTenantMutation()
  const [currentTenant, setCurrentTenant] = useState<TenantInfo | null>(null)
  const [tenantIsOpen, setTenantIsOpen] = useState(false)
  const [cDIO, setCDIO] = useState<AreYouSureProps>({ status: false })

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

  const deleteTenantCaution = (data: any) => {
    setCDIO({
      status: true,
      data,
      type: "deleteUser",
      action: deleteTenant,
      desc: `Are you sure you want to delete this user?`,
    })
  }

  const deleteTenant = async (_tenant: any) => {
    const req = { email: _tenant.email }
    console.log(req)

    const response: AnyObject = await deleteATenant(req)
    if (response.data) {
      toast.success("Tenant Deleted")
      fetchL()
    } else if (response.error) {
    }
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
            Landlords&rsquo;s Tenant /
          </span>
        </Link>
      </div>
      <div className="w-full flex flex-wrap items-center justify-between py-[16px] px-[22px] bg-white">
        <div className="flex flex-col sm:flex-row gap-[20px]">
          <Image
            src={
              landlordData?.landlordInfo.selfie ??
              "/images/tenant-profile-img.svg"
            }
            // fallbackSrc="/images/tenant-profile-img.svg"
            alt="Tenant Profile"
            className="h-24 w-24 rounded-full min-w-24 object-cover"
            width={100}
            height={100}
          />
          <div className="py-[8px] text-sm sm:text-base">
            <h1 className="text-textcolor100 text-[18px] font-semibold mb-[12px]">
              {landlordData?.landlordInfo.name}{" "}
              {landlordData?.landlordInfo.surname}
            </h1>
            <div className="flex flex-wrap items-center gap-[19px] text-[#949494] mb-[4.5px]">
              <p>@{landlordData?.landlordInfo.name.toLowerCase()}</p>
              <div className="bg-textcolor100 w-[1px] h-[19px]"></div>
              <p>{landlordData?.landlordInfo.phone}</p>
            </div>
            <div className="gap-[16px] flex items-center">
              <LocationIcon />
              <p className="text-[#949494] text-[14px]">--</p>
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
              <td className="p-3">Tenant</td>
              <td className="p-3">Unit ID</td>
              <td className="p-3">Email Address</td>
              {/* <td className="p-3">Tenants</td> */}
              <td className="p-3">Move in Date</td>
              <td className="p-3">Due Date</td>
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
                  <ProfileInTD
                    image={each.selfie}
                    name={each.name}
                    surname={each.surname}
                    phone={each.phone}
                  />
                </td>
                <td className="p-3">{each.unitID}</td>
                <td className="p-3">{each.email}</td>
                <td className="p-3">{each.startDate}</td>
                <td className="p-3">{each.endDate}</td>
                <td className="p-3">
                  <span className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setCurrentTenant(each)
                        setTenantIsOpen(true)
                      }}
                    >
                      <InformationIcon />
                    </button>
                    <ShareYellowIcon />
                    <button
                      onClick={() => {
                        deleteTenantCaution(each)
                      }}
                    >
                      <DeleteRedIcon />
                    </button>
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

      <TenantDetailsDialog
        tenant={currentTenant}
        open={tenantIsOpen}
        setOpen={setTenantIsOpen}
      />
      <AreYouSure aYSD={cDIO} setAYSD={setCDIO} />
    </>
  )
}
