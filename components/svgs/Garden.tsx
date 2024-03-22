import * as React from "react"

function Garden(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={32} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d_486_8123)">
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
          d="M16.217 7.696v.391m0-.391A4.696 4.696 0 0120.913 3h.391v5.087a5.087 5.087 0 01-5.087 5.087m0-5.478A4.696 4.696 0 0011.522 3h-.392v5.087a5.087 5.087 0 005.087 5.087m0 0v7.435m0-7.435v7.043m0 .783h-3.521A4.696 4.696 0 018 16.304h3.522A4.696 4.696 0 0116.217 21zm0 0h3.522a4.696 4.696 0 004.696-4.696h-3.522A4.696 4.696 0 0016.217 21z"
          stroke="#47893F"
          strokeWidth={2}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_486_8123"
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
            result="effect1_dropShadow_486_8123"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_486_8123"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

const MemoGarden = React.memo(Garden)
export default MemoGarden
