import React from "react"

const StatusBadge = ({ status, text }: { status: string; text?: string }) => {
  status = status.toLowerCase()
  return (
    <span
      className={`px-3 py-1 w-fit min-w-20 transition duration-300 gap-3 flex items-center rounded-lg whitespace-nowrap ${
        status == "pending"
          ? "bg-[#FFBB0C4D] text-[#FFBB0C]"
          : status == "ongoing"
          ? "bg-[#26CFDA4D] text-[#26CFDA]"
          : status == "cancelled" || status == "failed"
          ? "bg-[#D500004D] text-[#D50000]"
          : status == "completed"
          ? "bg-primaryFade text-primary2"
          : "bg-[#26CFDA4D] text-[#26CFDA]"
      }`}
    >
      • <span className="mx-auto capitalize">{text ?? status}</span>
    </span>
  )
}

export default StatusBadge
