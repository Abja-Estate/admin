import * as React from "react"

function Update(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path fill="#DAE7D9" d="M0 0h24v24H0z" />
      <path
        d="M7.714 7.714h-.857A1.714 1.714 0 005.143 9.43v7.714a1.714 1.714 0 001.714 1.714h7.714a1.714 1.714 0 001.714-1.714v-.857"
        stroke="#47893F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.428 6l2.571 2.571m1.187-1.212a1.8 1.8 0 00-2.545-2.546L9.428 12v2.572h2.571l7.187-7.213z"
        stroke="#47893F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoUpdate = React.memo(Update)
export default MemoUpdate
