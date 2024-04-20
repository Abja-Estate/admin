import * as React from "react"

function Share(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_1438_6621)">
        <path fill="#F2C94C" fillOpacity={0.2} d="M0 0h24v24H0z" />
        <path
          d="M14.336 6.234l.262-.184-.056-.314A2.75 2.75 0 0117.249 2.5h0a2.75 2.75 0 012.337 1.299l.425-.264-.425.264a2.751 2.751 0 01-4.521 3.12l-.291-.38-.393.274L9.9 9.95l-.346.243.181.382c.169.355.264.754.264 1.176 0 .422-.095.82-.264 1.177l-.181.382.346.242 4.479 3.135.393.274.29-.38a2.75 2.75 0 11-.521 1.184l.056-.314-.262-.184-4.729-3.31v-.001a.263.263 0 01-.022-.018l-.312-.278-.33.257a2.75 2.75 0 110-4.333l.327.255.31-.273a.255.255 0 01.024-.018h0l.002-.001 4.73-3.312zm1.323-2.575a2.25 2.25 0 103.181 3.182 2.25 2.25 0 00-3.181-3.182zM7.249 9.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm10 6.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
          stroke="#F2C94C"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1438_6621">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

const MemoShare = React.memo(Share)
export default MemoShare
