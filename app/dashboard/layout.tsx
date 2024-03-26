"use client"
import AdminDashboardFooter from "@/components/admin-dashboard/footer"
import AdminDashboardSideNavigation from "@/components/admin-dashboard/sideNavigation"
import AdminDashboardTopNavigation from "@/components/admin-dashboard/topNavigation"
import { useState } from "react"
import StoreProvider from "../StoreProvider"
import AdminAuthGuard from "@/components/AdminAuthGuard"
import SuccessDialog from "@/components/admin-dashboard/SuccessDialog"

function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-[100vh] relative">
      <AdminDashboardTopNavigation setMenuIsOpen={setMenuIsOpen} />
      <div className="flex flex-1">
        <div
          className={`transition duration-300 flex fixed lg:sticky top-16 md:top-24 z-20 lg:z-0 w-screen lg:w-fit h-screen ${
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
        <main className="flex-1 w-full py-[30px] bg-bgprimaryfade overflow-x-auto">
          <div className="px-[20px] w-full inline-block">{children}</div>
        </main>
      </div>
      <AdminDashboardFooter />

      {/* <SuccessDialog /> */}
    </div>
  )
}

export default function AuthD({ children }: { children: React.ReactNode }) {
  return (
    // <StoreProvider>
    <AdminAuthGuard Component={() => AdminDashboardLayout({ children })} />
    // </StoreProvider>
  )
}
