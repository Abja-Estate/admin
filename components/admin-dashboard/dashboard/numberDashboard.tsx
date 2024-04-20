"use client"
import dynamic from "next/dynamic"
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })
import { ApexOptions } from "apexcharts"
import { months, shuffleItems } from "@/utils/constants"
import { useEffect, useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

export default function NumberOfDownloads() {
  return (
    <section className="grid grid-cols-12 gap-[27px]">
      <div className="bg-white col-span-full xl:col-span-5 py-[15px] h-[252px] rounded-[10px] basis-[55%]">
        <DownloadsChart />
      </div>
      <div className="bg-white col-span-full md:col-span-7 xl:col-span-4 py-[15px] h-[252px] rounded-[10px] flex-1">
        <MobileAppUsageChart />
      </div>
      <div className="col-span-full md:col-span-5 xl:col-span-3">
        <DatePicker />
      </div>
    </section>
  )
}

const DownloadsChart = () => {
  const series: ApexAxisChartSeries = [
    {
      name: "Instagram",
      data: shuffleItems([10, 41, 35, 10, 41, 35, 51, 49, 62, 69, 91, 70]),
    },
    {
      name: "Website",
      data: shuffleItems([10, 41, 35, 10, 41, 35, 51, 49, 62, 69, 91, 70]),
    },
    {
      name: "X",
      data: shuffleItems([10, 41, 35, 10, 41, 35, 51, 49, 62, 69, 91, 70]),
    },
  ]

  const options: ApexOptions = {
    colors: ["#24E795", "#10939B", "#FF92AE"],
    chart: {
      fontFamily: "Nunito",
      width: "100%",
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    title: {
      text: "Number of Downloads",
      align: "left",
      offsetX: 10,
      style: {
        fontWeight: 700,
        fontSize: "14px",
        color: "#16192C",
      },
    },
    grid: {
      borderColor: "transparent",
    },
    legend: {
      position: "top",
      offsetY: -10,
      horizontalAlign: "left",
      markers: {
        height: 7,
        width: 7,
      },
    },
    xaxis: {
      categories: months.map((each) => each.slice(0, 3).toUpperCase()),
    },
  }

  return (
    <div className="h-full">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height="100%"
        width="100%"
      />
    </div>
  )
}

const MobileAppUsageChart = () => {
  const series: ApexAxisChartSeries = [
    {
      name: "Sign Ups/ Sign In",
      data: shuffleItems([10, 30, 35, 45, 49, 12, 19, 30, 10, 5, 30, 20]),
    },
    {
      name: "Active Users",
      data: shuffleItems([10, 30, 35, 45, 49, 12, 19, 30, 10, 5, 30, 20]),
    },
  ]

  const options: ApexOptions = {
    colors: ["#47893F", "#0174C7"],
    chart: {
      fontFamily: "Nunito",
      height: "100%",
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        borderRadiusApplication: "end",
        borderRadius: 10,
      },
    },
    title: {
      text: "Mobile App Usage",
      align: "left",
      offsetX: 10,
      style: {
        fontWeight: 700,
        fontSize: "14px",
        color: "#16192C",
      },
    },
    grid: {
      borderColor: "transparent",
    },
    legend: {
      position: "top",
      offsetY: -10,
      horizontalAlign: "left",
      markers: {
        height: 7,
        width: 7,
      },
    },
    xaxis: {
      categories: months.map((each) => each.slice(0, 3).toUpperCase()),
    },
  }

  return (
    <div className="h-full">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height="100%"
        width="100%"
      />
    </div>
  )
}

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const DatePicker = () => {
  const [value, onChange] = useState<Value>(new Date())
  useEffect(() => {
    setTimeout(() => {
      return () => {
        onChange(new Date("2023-02-02"))
      }
    }, 4000)
  }, [])

  return (
    <div className="h-[252px] grid-cols-2 w-full border border-[#7F947B] p-[15px] bg-white rounded-[10px]">
      <Calendar
        showNavigation={false}
        tileClassName={`p-0`}
        className={`h-full border-none p-0`}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}
