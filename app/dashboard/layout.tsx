"use client"
import AdminDashboardFooter from "@/components/admin-dashboard/footer"
import AdminDashboardSideNavigation from "@/components/admin-dashboard/sideNavigation"
import AdminDashboardTopNavigation from "@/components/admin-dashboard/topNavigation"

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-[100vh]">
      <AdminDashboardTopNavigation />
      <div className="flex flex-1 sticky top-40">
        <AdminDashboardSideNavigation />
        <main className="flex-1 w-full py-[30px] bg-[#EAEDE9] overflow-x-auto">
          <div className="mx-[20px] inline-block">{children}</div>
        </main>
      </div>
      <AdminDashboardFooter />
    </div>
  )
}
