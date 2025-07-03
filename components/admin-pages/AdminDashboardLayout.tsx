"use client"
import AdminDashboardFooter from "@/components/admin-dashboard/footer"
import AdminDashboardSideNavigation from "@/components/admin-dashboard/sideNavigation"
import AdminDashboardTopNavigation from "@/components/admin-dashboard/topNavigation"
import { useEffect, useState } from "react"
import AdminAuthGuard from "@/components/AdminAuthGuard"
import SuccessDialog from "@/components/admin-dashboard/SuccessDialog"
import nProgress from "nprogress"
import { setAdminProfile } from "@/redux/adminSlice"
import { isBrowser } from "@/utils/helpers"
import { useAppDispatch } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import { useGetAnAdminMutation } from "@/redux/endpoints"

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const dispatch = useAppDispatch()
  const router = useRouter()
  const [getAdminDetails] = useGetAnAdminMutation()

  const [cv, setcv] = useState(false)

  useEffect(() => {
    const data = isBrowser ? localStorage.getItem("active-user") ?? "{}" : "{}"

    const fetchData = (adminID: string) => {
      getAdminDetails({ adminID }).then((resp) => {
        if ("data" in resp) {
          dispatch(setAdminProfile({ ...resp.data }))
          setcv(true)
        } else {
          dispatch(setAdminProfile(null))
          router.push("/auth/login")
        }
      })
    }

    try {
      if (data) {
        const parsed = JSON.parse(data)
        console.log(parsed)
        if (parsed.email && parsed.id) {
          fetchData(parsed.id)
          // dispatch(setAdminProfile(parsed))
          // setcv(<Component />)
        } else {
          throw Error(`Can't find details: ${data}`)
        }
      } else {
        throw Error(`Can't find details: ${data}`)
      }
    } catch (error) {
      dispatch(setAdminProfile(null))
      router.push("/auth/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return cv ? (
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
  ) : (
    <span className="h-screen flex items-center justify-center text-sm">
      Loading...
    </span>
  )
}
