"use client"
import { adminSideNavigationLinksData } from "@/data/admin-links"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AdminDashboardSideNavigation({
  setMenuIsOpen,
}: {
  setMenuIsOpen: Function
}) {
  const pathname = usePathname()
  return (
    <nav className="w-[220px] min-w-[13.8rem] bg-white h-screen overflow-auto sticky top-0 pl-[20px] py-[24px] flex flex-col gap-[24px] shadow-[1px_0px_1px_0px_#00000040]">
      <div className="flex flex-col gap-[24px]">
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
                  className={clsx(
                    "h-[40px] px-[16px] flex items-center gap-[24px] font-semibold rounded-[5px]",
                    isDashboardActiveRoute && "text-white bg-primary"
                  )}
                >
                  <link.leading
                    className={
                      isDashboardActiveRoute ? "fill-white" : "fill-primary"
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
                  className={clsx(
                    "h-[40px] px-[16px] flex items-center gap-[24px] font-semibold rounded-[5px]",
                    isActiveRoute && "text-white bg-primary"
                  )}
                >
                  <link.leading
                    className={
                      isActiveRoute ? "stroke-white" : "stroke-primary"
                    }
                  />
                  <span>{link.linkText}</span>
                </div>
              </Link>
            )

          return navItem
        })}
      </div>
    </nav>
  )
}
