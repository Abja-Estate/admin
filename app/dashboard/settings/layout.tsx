"use client"
import { settingsNavigationLinksData } from "@/data/admin-links"
import { useAppSelector } from "@/redux/hooks"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Suspense } from "react"

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { profile: user } = useAppSelector((state) => state.admin)

  return (
    <div>
      <header className="flex gap-[27px] items-center mb-[40px] overflowed">
        {user &&
          settingsNavigationLinksData
            .filter((each) => !each.roles || each.roles.includes(user?.role))
            .map((link, i) => {
              const isActiveRoute = pathname === link.href

              return (
                <Link key={i} href={link.href}>
                  <div
                    className={clsx(
                      "flex items-center whitespace-nowrap gap-[16px] py-[8px] px-[16px] border-b-[2px]  font-semibold",
                      isActiveRoute && "border-b-primary text-primary",
                      !isActiveRoute && "border-b-transparent text-[#949494]"
                    )}
                  >
                    <link.leading />
                    <span>{link.linkText}</span>
                  </div>
                </Link>
              )
            })}
      </header>
      <Suspense fallback="Loading...">{children}</Suspense>
    </div>
  )
}
