import * as React from "react"

function Edit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={18} height={19} fill="none" {...props}>
      <path
        d="M2 16.89h1.414l9.314-9.314-1.414-1.414L2 15.476v1.414zm16 2H0v-4.243L13.435 1.212a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414L6.243 16.89H18v2zM12.728 4.748l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"
        fill="#2A4C23"
      />
    </svg>
  )
}

const MemoEdit = React.memo(Edit)
export default MemoEdit
