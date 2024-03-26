import React from "react"
import CustomImage from "../CustomImage"

const ProfileInTD = (props: {
  name?: string
  surname?: string
  image?: string
  phone?: string
}) => {
  return (
    <>
      <div className="flex items-center gap-[5px] mb-[2px]">
        <CustomImage
          fallbackSrc="/images/circle.svg"
          src={props?.image ?? ""}
          alt={props?.name}
          width={24}
          height={24}
        />
        <p className="text-[#4f4f4f]">
          {props?.name ?? "---"} {props?.surname}
        </p>
      </div>
      <p className="text-[10px] text-[#949494]">{props?.phone ?? "--"}</p>
    </>
  )
}

export default ProfileInTD
