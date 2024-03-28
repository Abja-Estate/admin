import CustomImage from "../CustomImage"

const AvatarStack = ({
  images,
  limit = 3,
}: {
  images?: string[]
  limit?: number
}) => {
  return (
    <div className="flex items-center">
      {images
        ?.filter((each, i) => i < limit)
        .map((each, i) => (
          <SmallAvatar src={each} key={each + i} />
        ))}
      {images && images?.length > limit && (
        <div className=" grid place-items-center text-sm text-[#949494] pl-3 whitespace-nowrap">
          +{images.length - limit} persons
        </div>
      )}
    </div>
  )
}

const SmallAvatar = ({ src }: { src: string }) => {
  return (
    <CustomImage
      fallbackSrc="/public/images/landlord-emoji.svg"
      src={src}
      alt="User"
      width={25}
      height={25}
      className="-ml-[10px] xl:-ml-[14px] 2xl:-ml-[10px] ring-1 ring-white w-[1.65rem] h-[1.65rem] object-cover min-w-[1.65rem] rounded-full"
    />
  )
}

export default AvatarStack
