"use client"
import React, { useRef, useEffect } from "react"
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

interface ActivityOverviewProps {
  requests: string[]
  properties: string[]
  landlords: string[]
  rents: string[]
}

const ActivityOverview: React.FC<ActivityOverviewProps> = ({
  requests,
  properties,
  landlords,
  rents,
}) => {
  return (
    <section className="grid grid-cols-12 gap-[27px]">
      <div className="grid grid-cols-2 md:grid-cols-4 col-span-full xl:col-span-7 2xl:col-span-8 gap-[24px] p-[10px] md:p-3 bg-white rounded-[16px] mt-5">
        {[
          {
            title: "Properties",
            value: `${properties && properties.length} Properties`,
            icon: <PropertyIcon />,
          },
          {
            title: "Landlords",
            value: `${landlords && landlords.length} Landlords`,
            icon: <HouseHoldIcon />,
          },
          {
            title: "Rents",
            value: `${rents && rents.length} Rents`,
            icon: <HouseHoldIcon />,
          },
          {
            title: "Requests",
            value: `${requests && requests.length} Requests`,
            icon: <RequestIcon />,
          },
        ].map((each) => (
          <InfoBox key={each.title} {...each} />
        ))}
      </div>
      <div className="px-[20px] col-span-full xl:col-span-5 2xl:col-span-4 py-[16px] flex items-center gap-[24px] justify-between box-glass-effect">
        <div className="flex flex-col gap-[10px]">
          {[
            { icon: <CalculatorIcon />, text: `80 Total Projects` },
            { icon: <ProgressIcon />, text: `41 In-Progress Tasks` },
            { icon: <ClockRewindIcon />, text: `39 Pending Requests` },
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
  )
}

const DonutChart: React.FC<{}> = () => {
  const data = [30, 10, 40, 20, 10]
  const colors = ["#FF00E5", "#FF4906", "#39CEF3", "#47893F", "#FAFF00"]

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
      .text("76%")
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

    return () => {
      d3.select(chartRef.current).selectAll("*").remove()
    }
  }, [data, colors])

  return <div ref={chartRef}></div>
}

const Images = () => {
  return (
    <div className="flex items-center">
      <Image src="/images/Ellipse 101.svg" alt="User" width={25} height={25} />
      <Image
        src="/images/Ellipse 102.svg"
        alt="User"
        width={25}
        height={25}
        className="-ml-[10px] xl:-ml-[14px] 2xl:-ml-[10px]"
      />
      <Image
        src="/images/Ellipse 103.svg"
        alt="User"
        width={25}
        height={25}
        className="-ml-[10px] xl:-ml-[14px] 2xl:-ml-[10px]"
      />
      <Image
        src="/images/Ellipse 104.svg"
        alt="User"
        width={25}
        height={25}
        className="-ml-[10px] xl:-ml-[14px] 2xl:-ml-[10px]"
      />
      <Image
        src="/images/Ellipse 105.svg"
        alt="User"
        width={25}
        height={25}
        className="-ml-[10px] xl:-ml-[14px] 2xl:-ml-[10px]"
      />
      <Image
        src="/images/Ellipse 106.svg"
        alt="User"
        width={25}
        height={25}
        className="-ml-[10px] xl:-ml-[14px] 2xl:-ml-[10px]"
      />
      <div className="border-[2px] border-white bg-[#d9d9d9] grid place-items-center text-[6px] text-center w-[22px] h-[22px] rounded-[100%] -ml-[10px]">
        +156
      </div>
    </div>
  )
}

const InfoBox = ({
  title,
  value,
  icon,
}: {
  title: string
  value: string
  icon: JSX.Element
}) => {
  return (
    <div className="h-full box py-[10px] px-[21px] grid place-items-center text-center">
      {icon}
      <div className="pt-[8px] pb-[17px]">
        <h1 className="text-primary text-[14px]">{title}</h1>
        <p className="#949494 text-[10px]">{value}</p>
      </div>
      <Images />
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
