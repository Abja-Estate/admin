import Image from "next/image"
import { EditGreenIcon, LocationIcon } from "../svgs"
import Link from "next/link"
import { LandlordInfo } from "@/utils/types"
import CustomImage from "../CustomImage"

export const LandlordProfileHead = ({
  showEditbtn,
  landlord,
}: {
  landlord?: LandlordInfo
  showEditbtn?: boolean
}) => {
  return (
    <div className="w-full border-b border-primary flex items-center justify-between py-[16px] px-5 bg-white">
      <div className="flex gap-[20px]">
        <CustomImage
          src={landlord?.selfie ?? "/images/tenant-profile-img.svg"}
          fallbackSrc="/images/tenant-profile-img.svg"
          alt="Tenant Profile"
          width={100}
          className="h-24 w-24 min-w-24 rounded-full object-cover"
          height={100}
        />
        <div className="py-[8px]">
          <h1 className="text-textcolor100 font-semibold mb-[12px]">
            {landlord?.name} {landlord?.surname}
          </h1>
          <div className="flex text-sm items-center gap-[19px] text-[#949494] mb-[4.5px]">
            <p>{landlord?.name}</p>
            <div className="bg-textcolor100 w-[1px] h-[19px]"></div>
            <p>{landlord?.phone}</p>
          </div>
          <div className="gap-[16px] flex items-center">
            <LocationIcon />
            <p className="text-[#949494] text-[14px]">--</p>
          </div>
        </div>
      </div>
      <div>
        {showEditbtn && (
          <Link
            href={`/dashboard/landlord/${landlord?._id}/edit`}
            className="flex bg-primaryFade text-primary2 text-sm items-center gap-3 justify-center rounded-md py-1.5 px-2"
          >
            <EditGreenIcon />
            Edit Profile
          </Link>
        )}
      </div>
    </div>
  )
}
