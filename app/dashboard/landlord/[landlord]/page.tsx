"use client"
import Loading from "@/components/Loading"
import MemoNoRecord2 from "@/components/NoRecord2"
import { LandlordProfileHead } from "@/components/admin-dashboard/LandlordProfileHead"
import ProfileInTD from "@/components/admin-dashboard/ProfileInTD"
import PropertyDialog from "@/components/admin-dashboard/PropertyDialog"
import StatusBadge from "@/components/admin-dashboard/StatusBadge"
import UnitDialog from "@/components/admin-dashboard/UnitDialog"
import { EditGreenIcon, LocationIcon } from "@/components/svgs"
import MemoGreenCheck from "@/components/svgs/GreenCheck"
import { useGetLandlordMutation } from "@/redux/endpoints"
import { formatDateTime } from "@/utils/helpers"
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
  const [fetchLandlordData, { isLoading }] = useGetLandlordMutation()

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

  const logsIcon = {
    propertyCreation: (
      <svg
        width="19"
        height="17"
        viewBox="0 0 19 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.969671 15.5303L0.546089 15.9539L0.96967 15.5303C0.829017 15.3897 0.75 15.1989 0.75 15V8.25H4.5V15C4.5 15.1989 4.42098 15.3897 4.28033 15.5303C4.13968 15.671 3.94891 15.75 3.75 15.75H1.5C1.30109 15.75 1.11032 15.671 0.969671 15.5303ZM11.25 9.75H7.5V0.75H11.25V9.75ZM14.25 0.75H18V5.25H14.25V0.75ZM14.25 8.25H18V12C18 12.1989 17.921 12.3897 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75H15C14.8011 12.75 14.6103 12.671 14.4697 12.5303C14.329 12.3897 14.25 12.1989 14.25 12V8.25ZM0.75 0.75H4.5V5.25H0.75V0.75Z"
          stroke="#2F80ED"
          strokeWidth="1.5"
        />
      </svg>
    ),

    tenantAdded: (
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 0.75H9.75V6.147C9.75 6.47852 9.8817 6.79646 10.1161 7.03088C10.3505 7.2653 10.6685 7.397 11 7.397H15.25V17C15.25 17.5967 15.0129 18.169 14.591 18.591C14.169 19.0129 13.5967 19.25 13 19.25H3C2.40326 19.25 1.83097 19.0129 1.40901 18.591C0.987053 18.169 0.75 17.5967 0.75 17V3C0.75 2.40326 0.987053 1.83097 1.40901 1.40901C1.83097 0.987053 2.40326 0.75 3 0.75ZM11.8839 10.1161C11.6495 9.8817 11.3315 9.75 11 9.75H5C4.66848 9.75 4.35054 9.8817 4.11612 10.1161C3.8817 10.3505 3.75 10.6685 3.75 11C3.75 11.3315 3.8817 11.6495 4.11612 11.8839C4.35054 12.1183 4.66848 12.25 5 12.25H11C11.3315 12.25 11.6495 12.1183 11.8839 11.8839C12.1183 11.6495 12.25 11.3315 12.25 11C12.25 10.6685 12.1183 10.3505 11.8839 10.1161ZM11.8839 14.1161C11.6495 13.8817 11.3315 13.75 11 13.75H5C4.66848 13.75 4.35054 13.8817 4.11612 14.1161C3.8817 14.3505 3.75 14.6685 3.75 15C3.75 15.3315 3.8817 15.6495 4.11612 15.8839C4.35054 16.1183 4.66848 16.25 5 16.25H11C11.3315 16.25 11.6495 16.1183 11.8839 15.8839C12.1183 15.6495 12.25 15.3315 12.25 15C12.25 14.6685 12.1183 14.3505 11.8839 14.1161Z"
          stroke="#219653"
        />
      </svg>
    ),

    request: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9375 2.3125V3.0625H14.6875H18.625V18.625H1.375V3.0625H5.3125H6.0625V2.3125V1.375H6.25V2.3125V3.0625H7H13H13.75V2.3125V1.375H13.9375V2.3125ZM17.6875 18.4375H18.4375V17.6875V8.78125V8.03125H17.6875H2.3125H1.5625V8.78125V17.6875V18.4375H2.3125H17.6875ZM1.5625 7.1875V7.9375H2.3125H17.6875H18.4375V7.1875V4V3.25H17.6875H14.6875H13.9375V4V4.5625H13.75V4V3.25H13H7H6.25V4V4.5625H6.0625V4V3.25H5.3125H2.3125H1.5625V4V7.1875Z"
          stroke="#B8139D"
          strokeWidth="1.5"
        />
      </svg>
    ),
  }

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
        {isLoading && (
          <div className="flex min-h-[80vh] items-center flex-col justify-center">
            <Loading />
          </div>
        )}

        {!isLoading && landlordData && (
          <div className="fade">
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
                        <MemoGreenCheck /> Active
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
                    {landlordData?.landlordInfo.history.length == 0 && (
                      <div className="flex py-20 items-center justify-center gap-3 flex-col">
                        <MemoNoRecord2 className="w-1/4" />
                        No Record found
                      </div>
                    )}

                    {landlordData?.landlordInfo.history
                      .slice(0, 10)
                      .map((each, i: number) => (
                        <div
                          className="flex items-center gap-3"
                          key={i + "log"}
                        >
                          {logsIcon[each.type]}

                          <p>
                            {each.type == "propertyCreation" && (
                              <>Newly listed property added</>
                            )}

                            {each.type == "tenantAdded" && (
                              <>Added new tenant to property</>
                            )}

                            {each.type == "request" && (
                              <span className="flex items-center flex-wrap gap-2">
                                <span>
                                  Request service provider: {each.data.agent}
                                </span>
                                <StatusBadge status={each.data.status} />
                              </span>
                            )}
                          </p>
                          <p className="ml-auto text-sm text-fade">
                            {formatDateTime(each.data.created_at)}
                          </p>
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
                              <td className="p-3 font-semibold ">
                                {each.name}
                              </td>
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
                                    (each_f) =>
                                      each_f.propertyID == each.propertyID
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
                              <td className="p-3">
                                {each.problems.join(", ")}
                              </td>
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
        )}
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
