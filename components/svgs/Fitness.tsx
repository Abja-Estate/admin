import * as React from "react"

function Fitness(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={32} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d_486_9323)">
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
          d="M19.298 19.02l-.588-.588 1.224-1.225.566-.566.142-.141.565-.566 1.225-1.224.588.588.566.566-1.202 1.202-.624.623-.071.071-.623.624-1.202 1.202-.566-.566zM11.5 7.36l-.142.141-.565.566L9.568 9.29l-.588-.588-.566-.566 1.202-1.202.624-.623.071-.071.623-.624 1.202-1.202.566.566.588.588-1.224 1.225-.566.566z"
          stroke="#47893F"
          strokeWidth={2}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_486_9323"
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
            result="effect1_dropShadow_486_9323"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_486_9323"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

const MemoFitness = React.memo(Fitness)
export default MemoFitness
