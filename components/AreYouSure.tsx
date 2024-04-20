import { AreYouSureProps } from "@/utils/types"
import DialogLayout from "./DialogLayout"
import Image from "next/image"
import CustomImage from "./CustomImage"
import placeholderImg from "@/public/images/landlord-emoji.svg"

const AreYouSure = ({
  aYSD,
  setAYSD,
}: {
  aYSD: AreYouSureProps
  setAYSD: (e: AreYouSureProps) => void
}) => {
  return (
    <DialogLayout
      noToggle
      isOpen={aYSD.status}
      setIsOpen={(status: boolean) => setAYSD({ ...aYSD, status })}
    >
      <div className="flex flex-col items-center px-5 justify-center">
        <div className="text-center mb-5 text-fade max-w-[12rem]">
          {aYSD.desc}
        </div>

        {aYSD.type == "deleteUser" && (
          <div className="flex items-center gap-[5px] mb-[2px]">
            <CustomImage
              src={aYSD?.data?.selfie}
              fallbackSrc={placeholderImg}
              alt="Landlord Emoji"
              className="rounded-full object-cover"
              width={24}
              height={24}
            />
            <p className="text-[#4f4f4f]">
              {aYSD?.data?.name} {aYSD?.data?.surname}
            </p>
          </div>
        )}

        <div className="flex w-full mt-5 flex-row-reverse justify-between items-center gap-3 sm:gap-8">
          <button
            onClick={() => {
              aYSD.action && aYSD.action(aYSD.data)
              setAYSD({ ...aYSD, status: false })
            }}
            className="filledbtn text-xs h-6 max-w-fit"
          >
            Proceed
          </button>
          <button
            onClick={() => {
              setAYSD({ ...aYSD, status: false })
            }}
            className="outlinebtn text-xs h-6 max-w-fit"
          >
            Cancel
          </button>
        </div>
      </div>
    </DialogLayout>
  )
}

export default AreYouSure
