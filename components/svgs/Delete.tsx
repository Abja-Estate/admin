import * as React from "react"

function Delete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path fill="#EB5757" fillOpacity={0.2} d="M0 0h24v24H0z" />
      <mask id="prefix__a" fill="#fff">
        <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12z" />
      </mask>
      <path
        d="M15.5 4l-.707.707.293.293h.414V4zm-1-1l.707-.707L14.914 2H14.5v1zm-5 0V2h-.414l-.293.293L9.5 3zm-1 1v1h.414l.293-.293L8.5 4zM5 4V3H4v1h1zm0 2H4v1h1V6zm1 13H5h1zM18 7h1V6h-1v1zM6 7V6H5v1h1zm13-4h-3.5v2H19V3zm-2.793.293l-1-1-1.414 1.414 1 1 1.414-1.414zM14.5 2h-5v2h5V2zm-5.707.293l-1 1 1.414 1.414 1-1-1.414-1.414zM8.5 3H5v2h3.5V3zM4 4v2h2V4H4zm1 3h14V5H5v2zm0 12a3 3 0 00.879 2.121l1.414-1.414A1 1 0 017 19H5zm.879 2.121A3 3 0 008 22v-2a1 1 0 01-.707-.293l-1.414 1.414zM8 22h8v-2H8v2zm8 0a3 3 0 002.121-.879l-1.414-1.414A1 1 0 0116 20v2zm2.121-.879A3 3 0 0019 19h-2a1 1 0 01-.293.707l1.414 1.414zM19 19V7h-2v12h2zM18 6H6v2h12V6zM5 7v12h2V7H5z"
        fill="#EB5757"
        mask="url(#prefix__a)"
      />
    </svg>
  )
}

const MemoDelete = React.memo(Delete)
export default MemoDelete
