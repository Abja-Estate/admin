"use client"
import ActivityOverview from "@/components/admin-dashboard/dashboard/activityOverview"
import NumberOfDownloads from "@/components/admin-dashboard/dashboard/numberDashboard"
import RecentPayments from "@/components/admin-dashboard/dashboard/recentPayments"
import Requests from "@/components/admin-dashboard/dashboard/requests"
import {
  useGetLandlordsQuery,
  useGetMobileAppUsageDataQuery,
  useGetPropertiesQuery,
  useGetRentsQuery,
  useGetRequestsQuery,
} from "@/redux/endpoints"

const Dashboard = () => {
  // useEffect(() => {
  //   const socket = new WebSocket(
  //     "wss://casmara-request-app-api.onrender.com/ws?id=abja2024Admin"
  //   );

  const { data: landlords } = useGetLandlordsQuery("")
  const { data: rents } = useGetRentsQuery("")
  const { data: requests } = useGetRequestsQuery("")
  const { data: properties } = useGetPropertiesQuery("")
  const {data: mobileAppUsage} = useGetMobileAppUsageDataQuery("")
  return (
   
    <>
      <header className="">
        <h1 className="font-semibold">Activity overview</h1>
      </header>
      <div className="flex flex-col w-full gap-[30px]">
        <ActivityOverview
          requests={requests}
          landlords={landlords}
          properties={properties}
          rents={rents}
        />
        <NumberOfDownloads 
        mobileAppUsage={mobileAppUsage}
         />
        <Requests />
        <RecentPayments />
      </div>
    </>
  )
}

export default Dashboard
