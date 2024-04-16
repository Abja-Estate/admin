"use client"
import ActivityOverview from "@/components/admin-dashboard/dashboard/activityOverview"
import NumberOfDownloads from "@/components/admin-dashboard/dashboard/numberDashboard"
import RecentPayments from "@/components/admin-dashboard/dashboard/recentPayments"
import Requests from "@/components/admin-dashboard/dashboard/requests"
import { useEffect, useState } from "react"
import { BASE_URL } from "@/config"
import { fetchAdminRequests } from "@/utils/api"
import AdminAuthGuard from "@/components/AdminAuthGuard"
import StoreProvider from "../StoreProvider"
import {
  useGetLandlordsQuery,
  useGetPropertiesQuery,
  useGetRentsQuery,
  useGetRequestsQuery,
  useGetTenantsQuery,
} from "@/redux/endpoints"
import SuccessDialog from "@/components/admin-dashboard/SuccessDialog"
import { useAppSelector } from "@/redux/hooks"

export default function AdminDashboard() {
  // useEffect(() => {
  //   const socket = new WebSocket(
  //     "wss://casmara-request-app-api.onrender.com/ws?id=abja2024Admin"
  //   );

  const { data: landlords } = useGetLandlordsQuery("")
  const { data: rents } = useGetRentsQuery("")
  const { data: requests } = useGetRequestsQuery("")
  const { data: properties } = useGetPropertiesQuery("")
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
        <NumberOfDownloads />
        <Requests />
        <RecentPayments />
      </div>
    </>
  )
}
