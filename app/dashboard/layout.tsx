"use client"
import AdminDashboardFooter from "@/components/admin-dashboard/footer"
import AdminDashboardSideNavigation from "@/components/admin-dashboard/sideNavigation"
import AdminDashboardTopNavigation from "@/components/admin-dashboard/topNavigation"
import { useEffect, useState } from "react"
import StoreProvider from "../StoreProvider"
import AdminAuthGuard from "@/components/AdminAuthGuard"
import SuccessDialog from "@/components/admin-dashboard/SuccessDialog"
import { useAppDispatch } from "@/redux/hooks"
import { setAdminProfile } from "@/redux/adminSlice"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-[100vh] relative">
      <AdminDashboardTopNavigation setMenuIsOpen={setMenuIsOpen} />
      <div className="flex flex-1">
        <div
          className={`transition duration-300 flex fixed lg:sticky top-16 md:top-24 z-20 lg:z-0 w-screen lg:w-fit h-[calc(100vh_-_64px)] lg:h-[calc(100vh_-_96px)] ${
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
  const [isActive, setIsActive] = useState(true)
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout

    const resetTimer = () => {
      clearTimeout(inactivityTimer)
      inactivityTimer = setTimeout(() => {
        setIsActive(false)
        toast("You are logged out due to inactivity")
        dispatch(setAdminProfile(null))
        localStorage.removeItem("token")
        localStorage.removeItem("active-user")
        router.push("/auth/login")
      }, 10 * 60 * 1000) // 10 minutes in milliseconds
    }

    const handleActivity = () => {
      if (!isActive) {
        setIsActive(true)
      }
      resetTimer()
    }

    // Set up event listeners
    window.addEventListener("mousemove", handleActivity)
    window.addEventListener("keypress", handleActivity)

    // Initial timer start
    resetTimer()

    // Clean up event listeners
    return () => {
      clearTimeout(inactivityTimer)
      window.removeEventListener("mousemove", handleActivity)
      window.removeEventListener("keypress", handleActivity)
    }
  }, [isActive, dispatch, router])

  return (
    // <StoreProvider>
    <AdminAuthGuard Component={() => AdminDashboardLayout({ children })} />
    // </StoreProvider>
  )
}
