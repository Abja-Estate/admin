"use client";
import { adminSideNavigationLinksData } from "@/data/admin-links";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminDashboardSideNavigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="w-[220px] pl-[20px] py-[24px] flex flex-col gap-[24px] shadow-[1px_0px_2px_0px_#00000040]">
      <div className="flex flex-col gap-[24px]">
        {adminSideNavigationLinksData.map((link, i) => {
          const isDashboardActiveRoute = pathname === link.href;

          const isActiveRoute = pathname.includes(link.href);

          const navItem =
            link.href === "/dashboard" ? (
              <Link key={i} href={link.href}>
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
              <Link key={i} href={link.href}>
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
            );

          return navItem;
        })}
      </div>
    </nav>
  );
}
