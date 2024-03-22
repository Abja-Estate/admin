import * as React from "react"

function ProfileAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path fill="#EADAFF" d="M0 0h24v24H0z" />
      <path
        d="M16.287 10.286h2.571m0 0h2.571m-2.571 0V7.715m0 2.57v2.572m-16.286 6V18a6 6 0 016-6m0 0a6 6 0 016 6v.857m-6-6.857a3.428 3.428 0 100-6.856 3.428 3.428 0 000 6.856z"
        stroke="#9747FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoProfileAdd = React.memo(ProfileAdd)
export default MemoProfileAdd
