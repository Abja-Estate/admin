"use client"
import { settingsNavigationLinksData } from "@/data/admin-links"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div>
      <header className="flex gap-[27px] items-center mb-[40px] overflowed">
        {settingsNavigationLinksData.map((link, i) => {
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
      {children}
    </div>
  )
}
