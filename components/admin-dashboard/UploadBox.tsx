import { memo } from "react"
import MemoUploadIcon from "../svgs/UploadIcon"

const UploadBox = () => {
  return (
    <div className="rounded-2xl text-sm m-auto rounded-uploadbox p-6 w-fit place-self-center flex flex-col items-center justify-center">
      <MemoUploadIcon />
      <p className="mt-3">Choose a file to upload</p>
      <p className="text-fade mb-3">JPEG and PNG formats, up to 50MB.</p>
      <button type="button" className="py-1 border text-xs rounded-md px-2">
        Browse File
      </button>
    </div>
  )
}

const MemoUploadBox = memo(UploadBox)
export default MemoUploadBox
