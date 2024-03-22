import Image from "next/image"
import React, { useState } from "react"

const CustomImage: React.FC<{
  src: string
  fallbackSrc: string
  className?: string
  alt?: string
  width: number
  height: number
}> = ({ src, fallbackSrc, className, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState<string>(src)

  const handleImageError = () => {
    setImgSrc(fallbackSrc)
  }

  return (
    <Image
      {...props}
      loading="lazy"
      className={className}
      src={imgSrc}
      draggable={false}
      onError={handleImageError}
      alt={alt ?? ""}
    />
  )
}
export default CustomImage
