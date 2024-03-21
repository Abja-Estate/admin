"use client"
import AdminDashboardFooter from "@/components/admin-dashboard/footer"
import AdminDashboardSideNavigation from "@/components/admin-dashboard/sideNavigation"
import AdminDashboardTopNavigation from "@/components/admin-dashboard/topNavigation"
import { useState } from "react"

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <div className="flex flex-col h-[100vh]">
      <AdminDashboardTopNavigation setMenuIsOpen={setMenuIsOpen} />
      <div className="flex flex-1 sticky top-40">
        <div
          className={`transition duration-300 flex fixed lg:sticky top-16 md:top-24 z-20 w-screen lg:w-fit h-screen ${
            menuIsOpen
              ? "bg-black/50"
              : "pointer-events-none lg:pointer-events-auto"
          }`}
        >
          <div
            className={`transition duration-300 ${
              menuIsOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }`}
          >
            <AdminDashboardSideNavigation setMenuIsOpen={setMenuIsOpen} />
          </div>
          <div
            className={`w-full h-full lg:hidden `}
            onClick={() => setMenuIsOpen(false)}
          ></div>
        </div>
        <main className="flex-1 w-full py-[30px] bg-[#EAEDE9] overflow-x-auto">
          <div className="px-[20px] w-full inline-block">{children}</div>
        </main>
      </div>
      <AdminDashboardFooter />
    </div>
  )
}
