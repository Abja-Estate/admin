import { cn } from "@/utils/cn"
import React from "react"

const StatusBadge = ({
  status,
  text,
  className,
}: {
  status: string
  text?: string
  className?: string
}) => {
  status = status.toLowerCase()
  return (
    <span
      className={cn(
        `px-3 py-1 text-xs w-fit min-w-20 transition duration-300 gap-2 flex items-center rounded-lg whitespace-nowrap`,
        className,
        status == "arriving"
          ? "bg-[#D6B5DE] text-[#750790]"
          : status == "pending"
          ? "bg-[#FFBB0C4D] text-[#FFBB0C]"
          : status == "ongoing"
          ? "bg-[#D5EBF8] text-[#0174C7]"
          : status == "cancelled" || status == "failed"
          ? "bg-[#D500004D] text-[#D50000]"
          : status == "completed" || status == "recieved"
          ? "bg-primaryFade text-primary2"
          : "bg-[#EAEAEA] text-[#949494]"
      )}
    >
      • <span className="mx-auto capitalize">{text ?? status}</span>
    </span>
  )
}

export default StatusBadge
