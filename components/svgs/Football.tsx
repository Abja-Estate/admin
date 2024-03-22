import * as React from "react"

function Football(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={32} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d_486_8096)">
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
          d="M16 3a9 9 0 109 9 9.01 9.01 0 00-9-9zm.692 3.408l2.146-1.476a7.651 7.651 0 013.13 2.337L21.277 9.6c-.017 0-.035.009-.052.015l-1.975.641a.655.655 0 00-.087.035l-2.47-1.699V6.408zm-3.527-1.476l2.143 1.476v2.184l-2.472 1.702a.674.674 0 00-.086-.034l-1.975-.642c-.018-.006-.036-.01-.053-.014l-.692-2.332a7.652 7.652 0 013.135-2.34zM12.04 16.104H9.588a7.564 7.564 0 01-1.194-3.728l1.904-1.46a.498.498 0 00.05.019l1.976.642a.677.677 0 00.08.019l.934 2.719c-.013.016-.026.031-.038.048l-1.22 1.68a.686.686 0 00-.04.06zm5.924 3.252a7.631 7.631 0 01-3.928 0l-.87-2.458.034-.041 1.22-1.681a.695.695 0 00.04-.06h3.08c.012.02.025.04.04.06l1.22 1.68c.01.015.023.028.034.042l-.87 2.458zM19.96 16.1a.665.665 0 00-.04-.061l-1.22-1.677-.039-.048.934-2.72a.673.673 0 00.08-.018l1.976-.642a.507.507 0 00.05-.02l1.904 1.461a7.564 7.564 0 01-1.193 3.728L19.96 16.1z"
          fill="#47893F"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_486_8096"
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
            result="effect1_dropShadow_486_8096"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_486_8096"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

const MemoFootball = React.memo(Football)
export default MemoFootball
