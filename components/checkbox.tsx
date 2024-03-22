import clsx from "clsx"

interface CheckboxProps {
  height?: string
  width?: string
  bgColor?: string
  checkedBgColor?: string
  onClick: () => void
  checked: boolean
  tickColor?: string
  borderColor?: string
  checkedBorderColor?: string
  borderRadius?: string
  className?: string
  borderWidth?: string
}

export default function Checkbox(props: CheckboxProps) {
  const {
    height,
    width,
    className,
    checked,
    onClick,
    bgColor,
    checkedBgColor,
    tickColor,
    checkedBorderColor,
    borderColor,
    borderRadius,
    borderWidth,
  } = props

  return (
    <div
      onClick={onClick}
      className={clsx(
        height ?? "h-[24px]",
        width ?? "w-[24px]",
        borderWidth ?? "border-[2px]",
        checked
          ? `${checkedBorderColor ?? "border-current"}`
          : `${borderColor ?? "border-[#949494]"}`,
        checked
          ? `${checkedBgColor ?? "bg-transparent"}`
          : `${bgColor ?? "bg-transparent"}`,
        borderRadius ?? "rounded-[4px]",
        "shrink-0 flex items-center justify-center",
        className
      )}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className={clsx(tickColor ?? "text-current", "h-4")}
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  )
}
