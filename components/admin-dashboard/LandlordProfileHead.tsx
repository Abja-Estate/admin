import Image from "next/image"
import { EditGreenIcon, LocationIcon } from "../svgs"
import Link from "next/link"

export const LandlordProfileHead = (details: {
  id: string
  showEditbtn?: boolean
}) => {
  return (
    <div className="w-full border-b border-primary flex items-center justify-between py-[16px] px-5 bg-white">
      <div className="flex gap-[20px]">
        <Image
          src="/images/tenant-profile-img.svg"
          alt="Tenant Profile"
          width={100}
          height={100}
        />
        <div className="py-[8px]">
          <h1 className="text-textcolor100 font-semibold mb-[12px]">
            Akello Buma
          </h1>
          <div className="flex text-sm items-center gap-[19px] text-[#949494] mb-[4.5px]">
            <p>@AkelloBuma</p>
            <div className="bg-textcolor100 w-[1px] h-[19px]"></div>
            <p>(+256) 567890123</p>
          </div>
          <div className="gap-[16px] flex items-center">
            <LocationIcon />
            <p className="text-[#949494] text-[14px]">Kampala, Uganda</p>
          </div>
        </div>
      </div>
      <div>
        {details.showEditbtn && (
          <Link
            href={`/dashboard/landlord/${details.id}/edit`}
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
