import * as React from "react"

function Power(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={32} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d_486_8135)">
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
          d="M21.625 12.42v0a6.231 6.231 0 00-.822-3.085 6.16 6.16 0 00-1.99-2.108V6.19a7.091 7.091 0 013.687 6.23c0 3.907-3.146 7.079-7 7.079s-7-3.172-7-7.08a7.091 7.091 0 013.688-6.229v1.036a6.159 6.159 0 00-1.992 2.108 6.23 6.23 0 00-.821 3.085v0c0 3.407 2.742 6.185 6.125 6.185s6.125-2.778 6.125-6.184z"
          stroke="#47893F"
        />
        <path d="M15.062 2.5h.875v8.474h-.875V2.5z" stroke="#47893F" />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_486_8135"
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
            result="effect1_dropShadow_486_8135"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_486_8135"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

const MemoPower = React.memo(Power)
export default MemoPower
