import * as React from "react"

function Wifi(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={32} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d_486_8108)">
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
          d="M12.684 15.412a4.69 4.69 0 016.632 0M9.842 12.57a8.708 8.708 0 0112.316 0M7 9.728c4.97-4.97 13.03-4.97 18 0m-8.527 8.527l-.473.473-.473-.473a.67.67 0 01.946 0z"
          stroke="#47893F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_486_8108"
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
            result="effect1_dropShadow_486_8108"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_486_8108"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

const MemoWifi = React.memo(Wifi)
export default MemoWifi
