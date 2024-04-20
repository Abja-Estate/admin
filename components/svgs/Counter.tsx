import * as React from "react"

function Counter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_1438_5997)">
        <path fill="#FFCEF7" d="M0 0h24v24H0z" />
        <path
          d="M8.063 9.375h-4.5A.563.563 0 013 8.812v-4.5a.563.563 0 111.125 0v2.744C5.475 5.414 8.095 3 11.813 3c3.937 0 6.299 2.317 6.397 2.415a.562.562 0 01-.794.796c-.022-.024-2.149-2.086-5.604-2.086-3.6 0-6.116 2.707-7.185 4.125h3.436a.563.563 0 110 1.125zm12 4.875h-4.5a.562.562 0 100 1.125h3.435c-1.07 1.418-3.585 4.125-7.186 4.125-3.454 0-5.581-2.063-5.603-2.086a.562.562 0 00-.794.796c.098.098 2.46 2.415 6.397 2.415 3.719 0 6.337-2.414 7.688-4.056v2.744a.562.562 0 101.125 0v-4.5a.562.562 0 00-.563-.563z"
          fill="#FF0CD8"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1438_5997">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

const MemoCounter = React.memo(Counter)
export default MemoCounter
