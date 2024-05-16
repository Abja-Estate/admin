"use client"
import React, { useRef, useEffect, useMemo } from "react"
import * as d3 from "d3"
import {
  CalculatorIcon,
  ClockRewindIcon,
  HomeIcon,
  HouseHoldIcon,
  MoneyHandIcon,
  ProgressIcon,
  PropertyIcon,
  RequestIcon,
} from "@/components/svgs"
import Image from "next/image"
import CustomImage from "@/components/CustomImage"

interface ActivityOverviewProps {
  requests?: any[]
  properties?: any[]
  landlords?: any[]
  rents?: any[]
}

const ActivityOverview: React.FC<ActivityOverviewProps> = ({
  requests,
  properties,
  landlords,
  rents,
}) => {
  return (
    <>
      <section className="grid grid-cols-12 gap-[27px]">
        <div className="grid grid-cols-2 md:grid-cols-4 col-span-full xl:col-span-7 2xl:col-span-8 gap-[24px] p-[10px] md:p-3 bg-white rounded-[16px] mt-5">
          {[
            {
              title: "Properties",
              value: `${properties ? properties.length : ""} Properties`,
              icon: <PropertyIcon />,
              images: properties?.map((each) => each.properties[0]?.photo),
            },
            {
              title: "Landlords",
              value: `${landlords ? landlords.length : ""} Landlords`,
              icon: <HouseHoldIcon />,
              images: landlords?.map((each) => each?.selfie),
            },
            {
              title: "Rents",
              value: `${rents ? rents.length : ""} Rents`,
              icon: <HouseHoldIcon />,
              images: rents?.map((each) => each.properties[0]?.photo),
            },
            {
              title: "Requests",
              value: `${requests ? requests.length : ""} Requests`,
              icon: <RequestIcon />,
              images: requests?.map((each) => each?.tenantPhoto),
            },
          ].map((each) => (
            <InfoBox key={each.title} {...each} />
          ))}
        </div>
        <div className="px-[20px] col-span-full xl:col-span-5 2xl:col-span-4 py-[16px] flex items-center gap-[24px] justify-between box-glass-effect">
          <div className="flex flex-col gap-[10px]">
            {[
              { icon: <CalculatorIcon />, text: `0 Total Projects` },
              { icon: <ProgressIcon />, text: `0 In-Progress Tasks` },
              { icon: <ClockRewindIcon />, text: `0 Pending Requests` },
              { icon: <MoneyHandIcon />, text: `Rent Collection` },
              { icon: <HomeIcon />, text: `Others` },
            ].map((each) => (
              <GraphItem key={each.text} {...each} />
            ))}
          </div>
          <div className="p-2 donut-circle rounded-[100%]">
            <DonutChart />
          </div>
        </div>
      </section>
    </>
  )
}

const DonutChart: React.FC<{}> = () => {
  const data = useMemo(() => [30, 10, 40, 20, 10], [])
  const colors = useMemo(
    () => ["#FF00E5", "#FF4906", "#39CEF3", "#47893F", "#FAFF00"],
    []
  )

  const chartRef = useRef(null)

  useEffect(() => {
    const width = 130
    const height = 130
    const radius = Math.min(width, height) / 2
    const innerRadius = radius * 0.6
    const padAngle = 0.04 // Angle between sections

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`)

    const colorScale = d3.scaleOrdinal().range(colors)

    const pie = d3
      .pie<number>()
      .value((d) => d)
      .sort(null)

    const arc: d3.Arc<any, number> = d3
      .arc<d3.DefaultArcObject, number>()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .padAngle(padAngle)
      .cornerRadius(6) // Set the corner radius for rounded edges

    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "100%")

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#FF00E5")
      .attr("stop-opacity", 1)

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#FF007A")
      .attr("stop-opacity", 1)

    const arcs = pie(data)

    svg
      .selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", (d: any) => arc(d) as string)
      .attr("fill", (_, i: number) =>
        i === 8 ? "url(#gradient)" : (colorScale(String(i)) as string)
      )

    svg
      .append("text")
      .text("0%")
      .attr("text-anchor", "middle")
      .attr("dy", "0em")
      .style("font-size", "16px")
      .style("fill", "#949494")

    svg
      .append("text")
      .text("Completed")
      .attr("text-anchor", "middle")
      .attr("dy", "1.3em")
      .style("font-size", "12px")
      .style("fill", "#949494")

    const cref = chartRef.current
    return () => {
      d3.select(cref).selectAll("*").remove()
    }
  }, [data, colors])

  return <div ref={chartRef}></div>
}

const SmallAvatar = ({ src }: { src: string }) => {
  return (
    <CustomImage
      fallbackSrc="/images/tenant-emoji.svg"
      src={src}
      alt="User"
      width={25}
      height={25}
      className="-ml-[10px] xl:-ml-[14px] 2xl:-ml-[10px] ring-1 ring-white w-[1.65rem] h-[1.65rem] object-cover min-w-[1.65rem] rounded-full"
    />
  )
}

const Images = ({ images }: { images?: string[] }) => {
  const LIMIT = 6
  return (
    <div className="flex items-center">
      {images
        ?.filter((each, i) => i < LIMIT)
        .map((each) => (
          <SmallAvatar src={each} key={each} />
        ))}
      {images && images?.length > LIMIT && (
        <div className="border-[2px] border-white bg-[#d9d9d9] grid place-items-center text-[6px] text-center w-[22px] h-[22px] rounded-[100%] -ml-[10px]">
          +{images.length - LIMIT}
        </div>
      )}
    </div>
  )
}

const InfoBox = ({
  title,
  value,
  icon,
  images,
}: {
  title: string
  value: string
  icon: JSX.Element
  images?: string[]
}) => {
  return (
    <div className="h-full box py-[10px] px-[21px] grid place-items-center text-center">
      <span className="text-primary">{icon}</span>
      <div className="pt-[8px] pb-[17px]">
        <h1 className="text-primary text-[14px]">{title}</h1>
        <p className="#949494 text-[10px]">{value}</p>
      </div>
      <Images images={images} />
    </div>
  )
}

const GraphItem = ({ icon, text }: { icon: JSX.Element; text: string }) => {
  return (
    <div className="flex gap-[15px] items-center">
      {icon}
      <span className="text-[#949494] text-[14px]">{text}</span>
    </div>
  )
}

export default ActivityOverview
