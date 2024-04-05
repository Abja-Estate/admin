"use client"
import MemoNoRecord2 from "@/components/NoRecord2"
import { LandlordProfileHead } from "@/components/admin-dashboard/LandlordProfileHead"
import ProfileInTD from "@/components/admin-dashboard/ProfileInTD"
import PropertyDialog from "@/components/admin-dashboard/PropertyDialog"
import StatusBadge from "@/components/admin-dashboard/StatusBadge"
import UnitDialog from "@/components/admin-dashboard/UnitDialog"
import { EditGreenIcon, LocationIcon } from "@/components/svgs"
import { useGetLandlordMutation } from "@/redux/endpoints"
import { LandlordData } from "@/utils/types"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { AnyObject } from "yup"

export default function Profile({ params }: { params: { landlord: string } }) {
  const [propertyDialog, setPropertyDialog] = useState(false)
  const [unitDialog, setUnitDialog] = useState(false)
  const [currentProperty, setCurrentProperty] = useState<any>(null)
  const [landlordData, setLandlordData] = useState<LandlordData | null>(null)
  const [fetchLandlordData] = useGetLandlordMutation()

  const fetchL = useCallback(async () => {
    const resp = await fetchLandlordData({
      landlordID: params.landlord,
    })
    if ("data" in resp && resp.data.landlordInfo) {
      setLandlordData(resp.data)
    }
  }, [params.landlord, fetchLandlordData])

  useEffect(() => {
    fetchL()
  }, [fetchL])

  const logs = [
    { message: "Newly listed property added", time: "9:50 AM" },
    {
      message: "Request service provider: Electrician ",
      time: "9:41AM",
    },
    {
      message: "1 Unit added to property and 1 tenant onboarded",
      time: "8:42 AM",
    },
    {
      message: "Updated subscription plan to Bronze Plan",
      time: "yesterday",
    },
    {
      message: "Added new tenant to property",
      time: "2 days ago",
    },
  ]

  return (
    <div>
      <div className="lg:-mt-2 flex flex-wrap items-center gap-x-5">
        <Link href="/dashboard/landlord">
          <span className="text-textcolor100 text-[22px]">Landlords /</span>
        </Link>
        <button>
          <span className="text-primary2 font-bold text-[22px]">
            Landlord&rsquo;s Profile /
          </span>
        </button>
      </div>
      <div className="bg-white mt-4 ">
        <LandlordProfileHead
          showEditbtn
          landlord={landlordData?.landlordInfo}
        />
        <div className="grid grid-cols-1 xl:grid-cols-2 ">
          <div className="xl:border-r flex flex-col border-primary py-5 px-6">
            <div className="flex flex-col gap-4">
              <DetailLine
                title="Properties"
                value={landlordData?.landlordInfo.properties.length}
              />
              <DetailLine
                title="Units"
                value={landlordData?.landlordInfo.properties.reduce(
                  (totalUnits, property) => {
                    return totalUnits + property.unitData.length
                  },
                  0
                )}
              />
              <DetailLine
                title="Tenants"
                value={landlordData?.tenants.length}
              />
              <DetailLine
                title="Service Requests"
                value={landlordData?.requestData.all.requests.length}
              />
              <DetailLine
                title={
                  <span className="flex flex-col">
                    <span>Subscription Plan</span>
                    <span className="text-fade text-xs">
                      {/* Bronze Plan : $20/month */}
                      --
                    </span>
                  </span>
                }
                value={
                  <span className="flex gap-2">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0008 0.5L12.6274 2.41602L15.8786 2.40983L16.8774 5.50385L19.5113 7.40985L18.5008 10.5L19.5113 13.5901L16.8774 15.4961L15.8786 18.5902L12.6274 18.584L10.0008 20.5L7.37415 18.584L4.12295 18.5902L3.12415 15.4961L0.490234 13.5901L1.5008 10.5L0.490234 7.40985L3.12415 5.50385L4.12295 2.40983L7.37415 2.41602L10.0008 0.5Z"
                        fill="#47893F"
                        stroke="#333436"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.5 10.5L9 13L14 8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Active
                  </span>
                }
              />
              <DetailLine
                title="Onboarded Date"
                value={
                  <span className="text-sm text-textcolor100">
                    {landlordData
                      ? new Date(
                          landlordData?.landlordInfo.created
                        ).toDateString()
                      : "--"}
                  </span>
                }
              />
            </div>

            <div className="my-auto py-8 lg:py-14">
              <div className="flex justify-between gap-2 flex-wrap items-center">
                <h3 className="text-[#4F4F4F] text-lg flex gap-2 items-center">
                  Recent Activity Log
                  <span className="bg-primary text-xs text-white h-6 w-6 rounded-md flex items-center justify-center">
                    0
                  </span>
                </h3>
                <span className="text-sm text-primary2">View All</span>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex py-20 items-center justify-center gap-3 flex-col">
                  <MemoNoRecord2 className="w-1/4" />
                  No Record found
                </div>
                {[].map((each: any) => (
                  <div className="flex items-center gap-3" key={each.message}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0947 11.205C12.0947 11.205 12.0948 11.2051 12.0949 11.2051L12.0947 11.205ZM12.0947 11.205C12.0946 11.2049 12.0945 11.2048 12.0945 11.2047L12.0947 11.205ZM2.75039 11.3996C2.75039 11.8372 2.92423 12.2569 3.23366 12.5663C3.5431 12.8758 3.96278 13.0496 4.40039 13.0496C4.838 13.0496 5.25768 12.8758 5.56711 12.5663C5.87655 12.2569 6.05039 11.8372 6.05039 11.3996C6.05039 10.962 5.87655 10.5423 5.56712 10.2329C5.25768 9.92345 4.838 9.74961 4.40039 9.74961C3.96278 9.74961 3.5431 9.92345 3.23367 10.2329C2.92423 10.5423 2.75039 10.962 2.75039 11.3996ZM0.95039 16.7996C0.95039 17.3374 1.16153 17.8715 1.65591 18.284C2.15876 18.7036 3.02038 19.0496 4.40039 19.0496C5.78114 19.0496 6.64269 18.7047 7.14525 18.2859C7.63887 17.8746 7.85039 17.3409 7.85039 16.7996C7.85039 16.5211 7.73977 16.2541 7.54285 16.0571C7.34594 15.8602 7.07887 15.7496 6.80039 15.7496H2.00039C1.72191 15.7496 1.45484 15.8602 1.25793 16.0571C1.06102 16.2541 0.95039 16.5211 0.95039 16.7996Z"
                        stroke="#9B51E0"
                        strokeWidth="1.5"
                      />
                    </svg>

                    <p>{each.message}</p>
                    <p className="ml-auto text-sm text-fade">{each.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="py-5 px-6">
            <h4 className="font-semibold text-textcolor100 text-lg">
              Property Information:
            </h4>
            <div className="flex flex-col gap-4 py-5">
              <div className="bg-white80 px-4 py-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Add Property</h3>
                <button onClick={() => setPropertyDialog(true)}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
                      fill="#47893F"
                    />
                    <path
                      d="M10.9983 6.11133V15.8891M15.8872 11.0002H6.10938"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-white80 px-4 py-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Add Unit</h3>
              </div>

              <div className="my-3 overflow-auto text-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary2 text-white">
                      <td className="p-3">Property Name</td>
                      <td className="p-3">Location</td>
                      <td className="p-3 text-center">Total Units</td>
                      <td className="p-3 text-center">Available Units</td>
                      <td className="p-3 text-center">Tenants</td>
                      <td className="p-3 text-center">Add Unit</td>
                    </tr>
                  </thead>
                  <tbody>
                    {landlordData?.landlordInfo.properties
                      .slice(0, 2)
                      .map((each) => (
                        <tr
                          key={each.name}
                          className="border-t-8 text-[#4F4F4F] border-white80"
                        >
                          <td className="p-3 font-semibold ">{each.name}</td>
                          <td className="p-3 min-w-40">{each.location}</td>
                          <td className="p-3 text-center">
                            {each.unitData.length}
                          </td>
                          <td className="p-3 text-center">
                            {each.unitData.length - Number(each.unitTaken)}
                          </td>
                          <td className="p-3 text-center">
                            {
                              landlordData.propertyInfo.find(
                                (each_f) => each_f.propertyID == each.propertyID
                              )?.totalTenants
                            }
                          </td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => {
                                setCurrentProperty(each)
                                setUnitDialog(true)
                              }}
                            >
                              <svg
                                width="14"
                                height="15"
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.7798 7.36982L8.99981 1.36982C8.91728 1.26709 8.81527 1.18169 8.69964 1.11852C8.584 1.05534 8.45702 1.01564 8.32599 1.0017C8.19496 0.987766 8.06247 0.99986 7.93613 1.03729C7.80979 1.07472 7.69209 1.13675 7.58981 1.21982C7.48708 1.30234 7.40168 1.40435 7.3385 1.51999C7.27533 1.63563 7.23563 1.76261 7.22169 1.89364C7.20775 2.02467 7.21985 2.15716 7.25728 2.2835C7.29471 2.40984 7.35674 2.52753 7.43981 2.62982L11.7098 7.99982L7.22981 13.3698C7.1456 13.4709 7.08217 13.5875 7.04312 13.7131C7.00408 13.8387 6.99019 13.9708 7.00227 14.1018C7.01435 14.2328 7.05214 14.3601 7.11349 14.4764C7.17485 14.5928 7.25855 14.6959 7.35981 14.7798C7.54109 14.9253 7.76739 15.0031 7.99981 14.9998C8.14672 15.0001 8.29188 14.9679 8.42496 14.9057C8.55804 14.8435 8.67578 14.7527 8.76981 14.6398L13.7698 8.63982C13.9183 8.46205 14.0005 8.23824 14.0023 8.00661C14.0041 7.77498 13.9255 7.54991 13.7798 7.36982Z"
                                  fill="#47893F"
                                />
                                <path
                                  d="M1.99981 1.36976C1.83272 1.15626 1.58767 1.01788 1.31855 0.98506C1.04944 0.952241 0.778307 1.02767 0.564807 1.19476C0.351308 1.36184 0.212928 1.6069 0.180109 1.87601C0.14729 2.14513 0.222721 2.41626 0.389807 2.62976L4.70981 7.99976L0.229807 13.3598C0.145605 13.4608 0.0821654 13.5775 0.0431209 13.7031C0.00407645 13.8287 -0.00980557 13.9608 0.0022703 14.0917C0.0143462 14.2227 0.0521425 14.35 0.113494 14.4664C0.174846 14.5827 0.258549 14.6858 0.359808 14.7698C0.53972 14.9188 0.766155 15.0002 0.999807 14.9998C1.14672 15 1.29188 14.9679 1.42496 14.9056C1.55804 14.8434 1.67578 14.7526 1.76981 14.6398L6.76981 8.63976C6.91689 8.46083 6.9973 8.23638 6.9973 8.00476C6.9973 7.77313 6.91689 7.54869 6.76981 7.36976L1.99981 1.36976Z"
                                  fill="#47893F"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-3">
                <h3 className="text-textcolor100 font-medium text-lg">
                  Service Request Information:
                </h3>
              </div>
              <div className="mb-3 overflow-auto text-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary2 text-white">
                      <td className="p-3">Service</td>
                      <td className="p-3">Service Provider</td>
                      <td className="p-3">Problems</td>
                      <td className="p-3">Date</td>
                      <td className="p-3">Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    {landlordData?.requestData.all.requests
                      .slice(0, 2)
                      .map((each, i) => (
                        <tr
                          key={"each.service" + i}
                          className="border-t-8 text-[#4F4F4F] border-white80"
                        >
                          <td className="p-3 ">{each.agent}</td>
                          <td className="p-3 min-w-40">
                            <ProfileInTD image="/erer" />
                          </td>
                          <td className="p-3">{each.problems.join(", ")}</td>
                          <td className="p-3">{each.day}</td>
                          <td className="p-3 text-center">
                            <StatusBadge status={each.status} />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PropertyDialog isOpen={propertyDialog} setIsOpen={setPropertyDialog} />
      <UnitDialog
        property={currentProperty}
        isOpen={unitDialog}
        setIsOpen={setUnitDialog}
      />
    </div>
  )
}

const DetailLine = ({ title, value }: { title: any; value: any }) => {
  return (
    <div className="flex text-textcolor100 text-lg font-semibold items-center justify-between gap-2">
      <h3 className="">{title}</h3>
      <span className="">{value}</span>
    </div>
  )
}
