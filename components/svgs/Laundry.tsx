import * as React from "react"

function Laundry(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={32} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d_486_8114)">
        <rect
          x={4.25}
          y={0.25}
          width={23.5}
          height={23.5}
          rx={3.75}
          stroke="#949494"
          strokeWidth={0.5}
          shapeRendering="crispEdges"
        />
        <path
          d="M22.77 4H9.23C8.552 4 8 4.551 8 5.23v13.54c0 .679.551 1.23 1.23 1.23h13.54c.679 0 1.23-.551 1.23-1.23V5.23C24 4.552 23.449 4 22.77 4z"
          stroke="#47893F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17.538a4.308 4.308 0 100-8.615 4.308 4.308 0 000 8.615zM8 7.692h3.692m8.616 0H24m-8 5.502v4.308m0-4.308l-3.692-2.179M16 13.194l3.692-2.179"
          stroke="#47893F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_486_8114"
          x={0}
          y={0}
          width={32}
          height={32}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_486_8114"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_486_8114"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

const MemoLaundry = React.memo(Laundry)
export default MemoLaundry
