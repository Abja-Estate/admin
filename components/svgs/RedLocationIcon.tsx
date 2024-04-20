import * as React from "react"

function RedLocationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={15} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_900_9390)" fill="#D90001">
        <path d="M7.001.5c-2.29 0-4.165 1.87-4.165 4.153 0 .885.282 1.707.76 2.382l2.897 5.007c.405.53.675.43 1.012-.028L10.7 6.578c.064-.117.115-.241.159-.368a4.099 4.099 0 00.307-1.557C11.166 2.37 9.29.5 7 .5zm0 1.946c1.233 0 2.213.978 2.213 2.207 0 1.23-.98 2.207-2.213 2.207a2.197 2.197 0 01-2.213-2.207c0-1.229.98-2.207 2.213-2.207z" />
        <path d="M9.647 7.347l-.006.018.005-.016.001-.002zM4.761 10.168c-1.977.28-3.36.948-3.36 1.932 0 1.325 2.31 2.4 5.6 2.4 3.288 0 5.6-1.075 5.6-2.4 0-.984-1.384-1.653-3.361-1.932l-.274.466c1.49.207 2.514.642 2.514 1.146 0 .707-2.005 1.28-4.48 1.28-2.474 0-4.48-.573-4.48-1.28 0-.502 1.018-.937 2.513-1.144l-.272-.468z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_900_9390">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

const MemoRedLocationIcon = React.memo(RedLocationIcon)
export default MemoRedLocationIcon
