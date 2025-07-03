"use client"
import dynamic from "next/dynamic"
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })
import { ApexOptions } from "apexcharts"
import { months, shuffleItems } from "@/utils/constants"
import { useEffect, useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { MobileAppUsageData } from "@/utils/types"



interface NumberOfDownloadsProps {
  mobileAppUsage?: MobileAppUsageData
}

const NumberOfDownloads: React.FC<NumberOfDownloadsProps> = ({
  mobileAppUsage,
}) => {
  return (
    <section className="grid grid-cols-12 gap-[27px]">
      <div className="bg-white col-span-full xl:col-span-5 py-[15px] h-[252px] rounded-[10px] basis-[55%]">
        <DownloadsChart />
      </div>
      <div className="bg-white col-span-full md:col-span-7 xl:col-span-4 py-[15px] h-[252px] rounded-[10px] flex-1">
        <MobileAppUsageChart mobileAppUsage={mobileAppUsage} />
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

interface MobileAppUsageChartProps {
  mobileAppUsage?: MobileAppUsageData
}

const MobileAppUsageChart: React.FC<MobileAppUsageChartProps> = ({ mobileAppUsage }) => {
  const [isLoading] = useState(!mobileAppUsage)
  const [data] = useState<MobileAppUsageData | null>(mobileAppUsage || null)
  const [error] = useState<string | null>(null)



  // Prepare chart data
  const series: ApexAxisChartSeries = data ? [
    {
      name: "Sign Ups/ Sign In",
      data: data.chartData.map((item:any) => item.signUps),
    },
    {
      name: "Active Users",
      data: data.chartData.map((item:any) => item.activeUsers),
    },
  ] : [
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
      type: "bar",
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
      text: isLoading ? "Loading..." : error ? "Mobile App Usage (Error)" : "Mobile App Usage",
      align: "left",
      offsetX: 10,
      style: {
        fontWeight: 700,
        fontSize: "14px",
        color: error ? "#FF6B6B" : "#16192C",
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
      categories: data ? 
        data.chartData.map((item:any) => item.month) : 
        months.map((each) => each.slice(0, 3).toUpperCase()),
    },
    tooltip: {
      shared: true,
      intersect: false,
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        if (!data) return ''
        
        const month = data.chartData[dataPointIndex]
        return `
          <div class="p-2 bg-white shadow-lg rounded">
            <div class="font-semibold">${month.month}</div>
            <div class="text-sm">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-[#47893F] rounded-full"></div>
                Sign Ups: ${month.signUps}
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-[#0174C7] rounded-full"></div>
                Active Users: ${month.activeUsers}
              </div>
            </div>
          </div>
        `
      }
    }
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 font-semibold mb-2">Error loading data</div>
          <div className="text-sm text-gray-600">{error}</div>
        </div>
      </div>
    )
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
      {data && (
        <div className="mt-2 text-xs text-gray-600 px-2">
          Total Users: {data.summary.totalUsers} | Active: {data.summary.totalActive}
        </div>
      )}
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

export default NumberOfDownloads