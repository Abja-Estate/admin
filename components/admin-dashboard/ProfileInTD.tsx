import React from "react"
import CustomImage from "../CustomImage"

const ProfileInTD = (props: {
  name?: string
  surname?: string
  image?: string
  phone?: string
  fullname?: string
}) => {
  return (
    <span className="whitespace-nowrap">
      <span className="flex  items-center gap-[5px] mb-[2px]">
        <CustomImage
          fallbackSrc="/images/circle.svg"
          src={props?.image ?? ""}
          alt={props?.name}
          width={24}
          className="h-6 w-6 min-w-6 rounded-full object-cover"
          height={24}
        />
        <span className="text-[#4f4f4f]">
          {props.fullname ? (
            <>{props.fullname}</>
          ) : (
            <>
              {props?.name && props?.name != "" ? props?.name : "---"}{" "}
              {props?.surname}
            </>
          )}
        </span>
      </span>
      <p className="text-[10px] text-[#949494]">
        {props?.phone && props?.phone != "" ? props?.phone : "--"}
      </p>
    </span>
  )
}

export default ProfileInTD
