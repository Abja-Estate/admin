"use client"
import * as SVGIcon from "@/components/svgs"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import MemoNoRecord from "@/components/NoRecord"
import Loading from "@/components/Loading"
import ReactPaginate from "react-paginate"
import {
  useDeleteAdminMutation,
  useDeleteLandlordMutation,
  useGetLandlordsQuery,
  useGetPropertiesQuery,
  useGetRequestsQuery,
} from "@/redux/endpoints"
import { AreYouSureProps, LandLord } from "@/utils/types"
import LandlordDialog from "@/components/admin-dashboard/LandlordDialog"
import MenuLayout from "@/components/MenuLayout"
import { cn } from "@/utils/cn"
import { useRouter } from "next/navigation"
import StatusBadge from "@/components/admin-dashboard/StatusBadge"
import AreYouSure from "@/components/AreYouSure"
import { AnyObject } from "yup"
import toast from "react-hot-toast"
import { months } from "@/utils/constants"
import LandlordsHeader from "@/components/admin-dashboard/LandlordsHeader"

export default function AdminLandord() {
  const { data, isLoading } = useGetLandlordsQuery("")
  const [deleteALandlord] = useDeleteLandlordMutation()
  const router = useRouter()
  const [cDIO, setCDIO] = useState<AreYouSureProps>({ status: false })

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
    const response: AnyObject = await deleteALandlord(_landlord._id)
    if (response.data) {
      // dispatch(
      //   openRespDialog({
      //     self: false,
      //     type: "success",
      //     desc: response.data.message,
      //     title: "Deleted!",
      //   })
      // )
      toast.success("Landlord Deleted")
    } else if (response.error) {
      toast.error("An error occured")
      // dispatch(
      //   openRespDialog({
      //     self: false,
      //     type: "error",
      //     desc: response.error.message,
      //     title: "Oops!",
      //   })
      // )
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
        <Link href="/landlord">
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
                          landlord?.history?.filter(
                            (each: any) => each.type == "propertyCreation"
                          ).length
                        }{" "}
                        Properties
                      </td>
                      <td className="p-2">
                        <Images
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
                          <Link
                            href={`/dashboard/landlord/${landlord._id}/edit`}
                          >
                            <SVGIcon.EditGreenIcon />
                          </Link>
                          <SVGIcon.ShareYellowIcon />

                          <button
                            onClick={() => {
                              deleteLandlordCaution(landlord)
                            }}
                          >
                            <SVGIcon.DeleteRedIcon />
                          </button>

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

        <div className="flex mt-3 bg-[#EAEDE9] p-3 items-center justify-between">
          <ReactPaginate
            className="flex text-xs items-center gap-2 npage w-full justify-center"
            breakLabel="..."
            nextLabel={
              <button className="hover:text-primary2 hover:bg-[#B5D0B2] bg-white transition border-[#828282] text-[#828282]  rounded-[6px] px-[8px] py-[4px] border-[1px] flex gap-5 items-center">
                Next
                <SVGIcon.ChevronRightGreenIcon />
              </button>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            activeLinkClassName="bg-primaryFade text-primary2"
            pageLinkClassName="hover:text-primary2 hover:bg-[#B5D0B2] w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center"
            previousLabel={
              <button className="hover:text-primary2 hover:primaryFade border-[#828282] bg-white text-[#828282] rounded-[6px] px-[8px] py-[4px] border-[1px] flex gap-2 items-center">
                <SVGIcon.ChevronLeftIconIcon />
                Previous
              </button>
            }
            renderOnZeroPageCount={null}
          />
        </div>
      </div>

      <AreYouSure aYSD={cDIO} setAYSD={setCDIO} />
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
