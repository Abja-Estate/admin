import * as React from "react"

function GreenCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={21} viewBox="0 0 21 21" height={21} fill="none" {...props}>
      <path
        d="M10 .5l2.627 1.916 3.252-.006.998 3.094 2.634 1.906-1.01 3.09 1.01 3.09-2.634 1.906-.998 3.094-3.252-.006-2.626 1.916-2.627-1.916-3.251.006-.999-3.094L.49 13.59 1.5 10.5.49 7.41l2.634-1.906.999-3.094 3.251.006L10.001.5z"
        fill="#47893F"
        stroke="#333436"
      />
      <path d="M6.5 10.5L9 13l5-5" stroke="#fff" />
    </svg>
  )
}

const MemoGreenCheck = React.memo(GreenCheck)
export default MemoGreenCheck
