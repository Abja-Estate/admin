import * as React from "react"

function Structure(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={13} fill="none" {...props}>
      <path
        d="M1 12.5h12m-1.333 0V9.833m0 0A1.333 1.333 0 0013 8.5V7.167a1.333 1.333 0 00-2.667 0V8.5a1.333 1.333 0 001.334 1.333zM8.333 12.5V3.166a2 2 0 00-2-2H3.667a2 2 0 00-2 2V12.5M5 9.833V12.5m-.667-5.333h1.334M4.333 4.5h1.334"
        stroke="#2A4C23"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoStructure = React.memo(Structure)
export default MemoStructure
