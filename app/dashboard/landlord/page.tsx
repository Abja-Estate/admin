"use client"
import * as SVGIcon from "@/components/svgs"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import MemoNoRecord from "@/components/NoRecord"
import Loading from "@/components/Loading"
import {
  useDeleteLandlordMutation,
  useGetLandlordsQuery,
} from "@/redux/endpoints"
import { AreYouSureProps, LandLord } from "@/utils/types"
import MenuLayout from "@/components/MenuLayout"
import { cn } from "@/utils/cn"
import { useRouter } from "next/navigation"
import StatusBadge from "@/components/admin-dashboard/StatusBadge"
import AreYouSure from "@/components/AreYouSure"
import { AnyObject } from "yup"
import toast from "react-hot-toast"
import { months } from "@/utils/constants"
import LandlordsHeader from "@/components/admin-dashboard/LandlordsHeader"
import AvatarStack from "@/components/admin-dashboard/AvatarStack"
import Pagination from "@/components/admin-dashboard/Pagination"
import { canDelete, canEdit } from "@/utils/helpers"
import { useAppSelector } from "@/redux/hooks"

export default function AdminLandord() {
  const { data, isLoading } = useGetLandlordsQuery("")
  const [deleteALandlord] = useDeleteLandlordMutation()
  const router = useRouter()
  const [cDIO, setCDIO] = useState<AreYouSureProps>({ status: false })
  const { profile: user } = useAppSelector((state) => state.admin)
  const [filteredLandLords, setFilteredLandLords] = useState<LandLord[]>([])

  useEffect(() => {
    if (data) {
      setFilteredLandLords(data)
    }
  }, [data])

  const deleteLandlordCaution = (data: any) => {
    setCDIO({
      status: true,
      data,
      type: "deleteUser",
      action: deleteLandlord,
      desc: `Are you sure you want to delete this user?`,
    })
  }

  const deleteLandlord = async (_landlord: any) => {
    const response: AnyObject = await deleteALandlord({
      landlordID: _landlord._id,
    })
    if (response.data) {
      toast.success("Landlord Deleted")
    } else if (response.error) {
    }
  }

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

  const [filterType, setFilterType] = useState<0 | 1 | 2>(0)
  const handleFilter = (type: 1 | 2, val: any) => {}

  const cd = new Date()
  const [cdate, setcdate] = useState({
    month: cd.getMonth(),
    year: cd.getFullYear(),
  })

  return (
    <>
      <LandlordsHeader />
      <div className="my-[24px]">
        <Link href="/dashboard/landlord">
          <span className="text-primary2 font-bold text-[22px]">
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
          {filterType == 0 && (
            <MenuLayout
              itemClassName="px-5"
              className="mt-2"
              yPosition="left"
              triggerEl={
                <button className="px-[8px] py-[4px] text-[14px] whitespace-nowrap flex gap-[8px] items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
                  <SVGIcon.FilterGreenIcon /> Filter
                </button>
              }
              items={[
                {
                  label: "By Request Status",
                  // onClick: (_) => setFilterType(1),
                },
                {
                  label: "By Location",
                  // onClick: (_) => setFilterType(2)
                },
              ]}
            />
          )}

          {filterType == 1 && (
            <MenuLayout
              itemClassName="px-5"
              className="mt-2"
              yPosition="left"
              triggerEl={
                <button className="px-[8px] py-[4px] text-[14px] whitespace-nowrap flex gap-[8px] items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
                  <SVGIcon.FilterGreenIcon /> Filter
                </button>
              }
              items={[
                { label: "pending" },
                { label: "ongoing" },
                { label: "cancelled" },
                { label: "completed" },
                { label: "default" },
              ].map((each) => ({
                // label: (
                //   <span
                //     className={cn("status-badge", statusBadges[each.label])}
                //   >
                //     • <span className="mx-auto"> {each.label} </span>{" "}
                //   </span>
                // ),
                label: "",
                onClick: () => {},
              }))}
            />
          )}

          {filterType == 2 && (
            <MenuLayout
              itemClassName="px-5"
              className="mt-2"
              yPosition="left"
              triggerEl={
                <button className="px-[8px] py-[4px] text-[14px] whitespace-nowrap flex gap-[8px] items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
                  <SVGIcon.FilterGreenIcon /> Filter
                </button>
              }
              items={[
                {
                  label: "By Request Status",
                  onClick: (_) => setFilterType(1),
                },
                { label: "By Location", onClick: (_) => setFilterType(2) },
              ]}
            />
          )}
          <button className="px-[8px] py-[4px] text-[14px] whitespace-nowrap flex gap-[8px] items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
            <SVGIcon.ShareIcon />
            Export
          </button>
          <button className="px-[8px] py-[4px] text-[14px] whitespace-nowrap flex gap-[8px] items-center bg-[#B5D0B2] text-primary2 rounded-[4px]">
            <SVGIcon.CalenderOutlineIcon />
            {months[cdate.month].slice(0, 3)} {cdate.year}
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
                <tr className="bg-primary2 text-left">
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
                  currentItems.map((landlord: LandLord, i: number) => (
                    <tr
                      className="bg-white text-[#4F4F4F] border-t-8 border-bgprimaryfade"
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
                            {landlord.name} {landlord.surname}
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
                          landlord?.history?.filter(
                            (each: any) => each.type == "propertyCreation"
                          ).length
                        }{" "}
                        Properties
                      </td>
                      <td className="p-2">
                        <AvatarStack
                          images={landlord?.history
                            ?.filter((each: any) => each.type == "tenantAdded")
                            .map((each: any) => each.data.selfie)}
                        />
                      </td>
                      <td className="p-2">
                        <StatusBadge
                          status={landlord.active ? "completed" : "failed"}
                          text={landlord.active ? "Active" : "Not active"}
                        />
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2 xl:gap-4 h-fit">
                          {canEdit("landlords", user?.role) && (
                            <Link
                              href={`/dashboard/landlord/${landlord._id}/edit`}
                            >
                              <SVGIcon.EditGreenIcon />
                            </Link>
                          )}
                          <SVGIcon.ShareYellowIcon />
                          {canDelete("landlords", user?.role) && (
                            <button
                              onClick={() => {
                                deleteLandlordCaution(landlord)
                              }}
                            >
                              <SVGIcon.DeleteRedIcon />
                            </button>
                          )}

                          <MenuLayout
                            items={[
                              {
                                label: "View Profile",
                                onClick: () => {
                                  router.push(
                                    `/dashboard/landlord/${landlord._id}`
                                  )
                                },
                              },
                              {
                                label: "View Tenants",
                                onClick: () => {
                                  router.push(
                                    `/dashboard/landlord/${landlord._id}/tenants`
                                  )
                                },
                              },
                            ]}
                            triggerEl={<SVGIcon.MoreVertIcon />}
                          />
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
      </div>

      <AreYouSure aYSD={cDIO} setAYSD={setCDIO} />
    </>
  )
}
