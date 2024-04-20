import { cn } from "@/utils/cn"
import { memo } from "react"

const PriorityBadge = ({
  status,
  text,
  className,
}: {
  status: string
  text?: string
  className?: string
}) => {
  status = status.toLowerCase().trim()
  return (
    <span
      className={cn(
        `px-3 py-1 text-[.7rem] w-fit min-w-32 transition duration-300 gap-2 flex items-center rounded-lg whitespace-nowrap `,
        className,
        status == "medium" || status == "medium priority"
          ? "bg-[#F2994A26] text-[#F2994A]"
          : status == "low" || status == "low priority"
          ? "bg-[#FDF7E4] text-[#F2C94C]"
          : status == "ongoing"
          ? "bg-[#D5EBF8] text-[#0174C7]"
          : status == "high" || status == "high priority"
          ? "bg-[#FCE6E6] text-[#EB5757]"
          : status == "completed"
          ? "bg-primaryFade text-primary2"
          : "bg-[#EAEAEA] text-[#949494]"
      )}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.333984 2.33398C0.333984 1.80355 0.544698 1.29484 0.919771 0.919771C1.29484 0.544698 1.80355 0.333984 2.33398 0.333984H6.44865C6.97881 0.334274 7.48716 0.545049 7.86198 0.919984L13.1953 6.25332C13.5703 6.62837 13.7809 7.13699 13.7809 7.66732C13.7809 8.19765 13.5703 8.70626 13.1953 9.08132L9.08198 13.196C8.89626 13.3817 8.67577 13.5291 8.4331 13.6296C8.19042 13.7301 7.93032 13.7819 7.66765 13.7819C7.40498 13.7819 7.14488 13.7301 6.90221 13.6296C6.65953 13.5291 6.43904 13.3817 6.25332 13.196L0.919984 7.86265C0.544886 7.48767 0.334098 6.97904 0.333984 6.44865V2.33398ZM3.66732 3.00065C3.49051 3.00065 3.32094 3.07089 3.19591 3.19591C3.07089 3.32094 3.00065 3.49051 3.00065 3.66732C3.00065 3.84413 3.07089 4.0137 3.19591 4.13872C3.32094 4.26375 3.49051 4.33398 3.66732 4.33398C3.84413 4.33398 4.01436 4.26375 4.13939 4.13872C4.26441 4.0137 4.33465 3.84413 4.33465 3.66732C4.33465 3.49051 4.26441 3.32094 4.13939 3.19591C4.01436 3.07089 3.84413 3.00065 3.66732 3.00065Z"
          className="fill-current"
        />
      </svg>
      <span className=" capitalize">{text ?? status}</span>
    </span>
  )
}
const MemoPriorityBadge = memo(PriorityBadge)
export default MemoPriorityBadge
