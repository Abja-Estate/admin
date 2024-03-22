import * as React from "react"

function NoRecord2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 337 150" fill="none" {...props}>
      <rect x={0.5} width={336} height={150} rx={20} fill="#F7F8F7" />
      <path fill="#fff" d="M18.5 34H281v26.875H18.5z" />
      <path fill="#B5D0B2" d="M18.5 34H21v26.875h-2.5z" />
      <mask id="prefix__a" fill="#fff">
        <path d="M36 34h245v26.875H36V34z" />
      </mask>
      <path
        d="M281 60.563H36v.624h245v-.624z"
        fill="#D9D9D9"
        mask="url(#prefix__a)"
      />
      <g clipPath="url(#prefix__clip0_1195_15345)">
        <path fill="#D9D9D9" d="M36 34h15v15H36z" />
        <path fill="#B5D0B2" d="M36 34h15v15H36z" />
      </g>
      <path
        fill="#B5D0B2"
        d="M58.5 34h158.75v11.875H58.5zM36 51.5h63.125v6.875H36z"
      />
      <path fill="#fff" d="M56.5 90H319v26.875H56.5z" />
      <path fill="#B5D0B2" d="M56.5 90H59v26.875h-2.5z" />
      <mask id="prefix__b" fill="#fff">
        <path d="M74 90h245v26.875H74V90z" />
      </mask>
      <path
        d="M319 116.563H74v.625h245v-.625z"
        fill="#D9D9D9"
        mask="url(#prefix__b)"
      />
      <g clipPath="url(#prefix__clip1_1195_15345)">
        <path fill="#D9D9D9" d="M74 90h15v15H74z" />
        <path fill="#B5D0B2" d="M74 90h15v15H74z" />
      </g>
      <path
        fill="#B5D0B2"
        d="M96.5 90h158.75v11.875H96.5zM74 107.5h63.125v6.875H74z"
      />
      <defs>
        <clipPath id="prefix__clip0_1195_15345">
          <path fill="#fff" transform="translate(36 34)" d="M0 0h15v15H0z" />
        </clipPath>
        <clipPath id="prefix__clip1_1195_15345">
          <path fill="#fff" transform="translate(74 90)" d="M0 0h15v15H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

const MemoNoRecord2 = React.memo(NoRecord2)
export default MemoNoRecord2
