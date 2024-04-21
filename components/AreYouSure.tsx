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
      <>
        {aYSD.type == "deleteUser" && (
          <div className="flex flex-col items-center px-5 justify-center">
            <div className="text-center mb-5 text-fade max-w-[12rem]">
              {aYSD.desc}
            </div>

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
        )}

        {aYSD.type == "successResp" && (
          <>
            <div className="flex flex-col gap-4 pb-3 justify-center items-center w-[80vw] max-w-[20rem]">
              <button onClick={() => {}} className="ml-auto mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
                    fill="#3A3A3A"
                  />
                </svg>
              </button>

              <svg
                width="84"
                height="84"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M75.334 41.9999C75.334 50.8404 71.8221 59.3189 65.5709 65.5701C59.3197 71.8213 50.8412 75.3332 42.0006 75.3332C33.1601 75.3332 24.6816 71.8213 18.4304 65.5701C12.1792 59.3189 8.66732 50.8404 8.66732 41.9999C8.66732 33.1593 12.1792 24.6808 18.4304 18.4296C24.6816 12.1784 33.1601 8.66653 42.0006 8.66653C45.1673 8.66653 48.2506 9.12486 51.1673 9.95819L57.709 3.41653C52.7269 1.36472 47.3887 0.316898 42.0006 0.333195C36.5289 0.333195 31.1107 1.41094 26.0555 3.50488C21.0003 5.59883 16.407 8.66797 12.5379 12.5371C4.72385 20.3511 0.333984 30.9492 0.333984 41.9999C0.333984 53.0505 4.72385 63.6486 12.5379 71.4626C16.407 75.3317 21.0003 78.4009 26.0555 80.4949C31.1107 82.5888 36.5289 83.6665 42.0006 83.6665C53.0513 83.6665 63.6494 79.2767 71.4634 71.4626C79.2774 63.6486 83.6673 53.0505 83.6673 41.9999M24.959 33.9999L19.084 39.9165L37.834 58.6665L79.5006 16.9999L73.6256 11.0832L37.834 46.8749L24.959 33.9999Z"
                  fill="#19D015"
                />
              </svg>

              <div className="text-center mb-5 text-[#19D015] max-w-[12rem]">
                {aYSD.desc}
              </div>
            </div>
          </>
        )}
      </>
    </DialogLayout>
  )
}

export default AreYouSure
