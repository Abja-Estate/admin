import * as React from "react"

function Process(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path fill="#D4DBD3" d="M0 0h24v24H0z" />
      <path
        d="M14.75 13.35h-.4V17.9H21.15V13.35h-6.4zM8 15.65h3.35v.7H8c-.606 0-1.1-.494-1.1-1.1v-2.6h.7v3H8zM4.25 2.1h-.4V6.65H10.65V2.1h-6.4zm8.65 18.8h9.7v.7h-9.7v-.7zm7.85-2.3h-6c-.606 0-1.1-.494-1.1-1.1v-3.75c0-.606.494-1.1 1.1-1.1h6c.606 0 1.1.494 1.1 1.1v3.75c0 .606-.494 1.1-1.1 1.1zM2.4 9.65h9.7v.7H2.4v-.7zm7.85-2.3h-6c-.606 0-1.1-.494-1.1-1.1V2.5c0-.606.494-1.1 1.1-1.1h6c.606 0 1.1.494 1.1 1.1v3.75c0 .606-.494 1.1-1.1 1.1z"
        stroke="#2A4C23"
        strokeWidth={0.8}
      />
    </svg>
  )
}

const MemoProcess = React.memo(Process)
export default MemoProcess
