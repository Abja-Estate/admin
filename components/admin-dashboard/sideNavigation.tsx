"use client"
import { adminSideNavigationLinksData } from "@/data/admin-links"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LogoutIcon } from "../svgs"
import { useAppDispatch } from "@/redux/hooks"
import { setAdminProfile } from "@/redux/adminSlice"
import { cn } from "@/utils/cn"
import { useEffect, useState } from "react"
import { useGetRequestsQuery } from "@/redux/endpoints"
import { isBrowser } from "@/utils/helpers"
import { RequestDetails } from "@/utils/types"

export default function AdminDashboardSideNavigation({
  setMenuIsOpen,
}: {
  setMenuIsOpen: Function
}) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const pathname = usePathname()
  const handleLogout = () => {
    isBrowser && localStorage.removeItem("active-user")
    dispatch(setAdminProfile(null))
    isBrowser && localStorage.removeItem("token")
    router.push("/auth/login")
  }

  const { data: requests } = useGetRequestsQuery("")
  const [fRequests, setFRequests] = useState<RequestDetails[]>([])

  useEffect(() => {
    if (requests) {
      setFRequests(requests)
    }
  }, [requests])

  return (
    <nav className="w-[220px] min-w-[13.8rem] bg-white h-screen overflow-auto sticky top-0 pl-[20px] py-[24px] flex flex-col gap-[24px] shadow-[1px_0px_1px_0px_#00000040]">
      <div className="flex h-full flex-col gap-[24px]">
        {adminSideNavigationLinksData.map((link, i) => {
          const isDashboardActiveRoute = pathname === link.href

          const isActiveRoute = pathname.includes(link.href)

          const navItem =
            link.href === "/dashboard" ? (
              <Link
                onClick={() => setMenuIsOpen(false)}
                key={i}
                href={link.href}
              >
                <div
                  className={cn(
                    "h-[40px] px-[16px] flex items-center group hover:bg-[#7F947B] hover:text-white gap-[24px] font-semibold rounded-[5px]",
                    isDashboardActiveRoute && "text-white bg-primary"
                  )}
                >
                  <link.leading
                    className={
                      isDashboardActiveRoute
                        ? "fill-white"
                        : "fill-primary group-hover:fill-white"
                    }
                  />
                  <span>{link.linkText}</span>
                </div>
              </Link>
            ) : (
              <Link
                onClick={() => setMenuIsOpen(false)}
                key={i}
                href={link.href}
              >
                <div
                  className={cn(
                    "h-[40px] px-[16px] flex items-center group hover:bg-[#7F947B] hover:text-white gap-[24px] font-semibold rounded-[5px]",
                    isActiveRoute && "text-white bg-primary"
                  )}
                >
                  <link.leading
                    className={cn(
                      isActiveRoute
                        ? "stroke-white"
                        : "stroke-primary group-hover:stroke-white"
                    )}
                  />
                  <span>{link.linkText}</span>
                  {i == 2 &&
                    Boolean(
                      fRequests.filter((each) => each.status == "Pending")
                        .length
                    ) && (
                      <span className="flex items-center rounded-full justify-center h-6 min-w-6 ml-auto w-6 bg-[#D90001] text-white text-sm">
                        {
                          fRequests.filter((each) => each.status == "Pending")
                            .length
                        }
                      </span>
                    )}
                </div>
              </Link>
            )

          return navItem
        })}

        <button
          className={cn(
            "h-[40px] px-[16px] mt-auto mb-20 flex items-center group hover:bg-[#7F947B] hover:text-white gap-[24px] font-semibold rounded-[5px]"
          )}
          onClick={handleLogout}
        >
          <LogoutIcon />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  )
}
