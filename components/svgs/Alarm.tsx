import * as React from "react"

function Alarm(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path fill="#B71C1C" fillOpacity={0.2} d="M0 0h24v24H0z" />
      <path
        d="M12.123 21.674a8.082 8.082 0 100-16.164 8.082 8.082 0 000 16.163z"
        stroke="#B71C1C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.572 5.51a12.769 12.769 0 013.674-2.939m15.428 2.94a12.768 12.768 0 00-3.673-2.94m-5.878 6.613v4.408h3.674"
        stroke="#B71C1C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoAlarm = React.memo(Alarm)
export default MemoAlarm
