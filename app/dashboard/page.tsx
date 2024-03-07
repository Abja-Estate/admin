"use client";
import ActivityOverview from "@/components/admin-dashboard/dashboard/activityOverview";
import NumberOfDownloads from "@/components/admin-dashboard/dashboard/numberDashboard";
import RecentPayments from "@/components/admin-dashboard/dashboard/recentPayments";
import Requests from "@/components/admin-dashboard/dashboard/requests";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/config";
import { fetchAdminRequests } from "@/utils/api";

export default function AdminDashboard() {
  const [properties, setProperties] = useState<any>(null);
  const [landlords, setLandlords] = useState<any>(null);
  const [rents, setRents] = useState<any>(null);
  const [requests, setRequests] = useState<any>(null);

  // useEffect(() => {
  //   const socket = new WebSocket(
  //     "wss://casmara-request-app-api.onrender.com/ws?id=abja2024Admin"
  //   );

  const id = process.env.ID;
  const apiKey = process.env.API_KEY;

  useEffect(() => {
    const ws = new WebSocket(
      `wss://casmara-request-app-api.onrender.com/ws/admin?apiKey=${apiKey}&id=${id}`
    );

    const sendBroadcastData = {
      target_id: "abjaInclusiveness",
      message: "yo, admin",
      sender_id: "abja2024Admin",
    };

    ws.onopen = function (event) {
      ws.send(JSON.stringify(sendBroadcastData));
    };
  }, [apiKey, id]);

  useEffect(() => {
    const fetchRequests = async (
      url: string,
      requestStateSetter: React.Dispatch<any>
    ) => {
      try {
        const response = await fetchAdminRequests(
          `${BASE_URL}/service/admin/${url}`
        );
        if (response.statusCode === 200) {
          console.log("data", response.data);
          requestStateSetter(response.data.data);
        } else {
          console.error("Error fetching admin requests:", response.error);
        }
      } catch (error) {
        console.error("Error fetching admin requests:", error);
      }
    };

    fetchRequests("all_landlords", setLandlords);
    fetchRequests("all_properties", setProperties);
    fetchRequests("all_rents", setRents);
    fetchRequests("all_requests", setRequests);
  }, [BASE_URL]);
  return (
    <>
      <header className="pb-2">
        <h1 className="font-semibold">Activity overview</h1>
      </header>
      <div className="flex flex-col gap-[30px]">
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
  );
}
