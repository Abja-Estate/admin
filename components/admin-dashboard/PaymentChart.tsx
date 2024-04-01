import { months, shuffleItems } from "@/utils/constants"
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts"

export default function PaymentChart() {
  const series: ApexAxisChartSeries = [
    {
      name: "Payment",
      data: shuffleItems([
        100000, 300000, 350000, 400005, 490000, 102000, 190000, 300000, 100000,
        500000, 300000, 200000,
      ]),
    },
  ]

  const options: ApexOptions = {
    colors: ["#47893F", "#0174C7"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
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
    yaxis: {
      labels: {
        formatter: (value: number): string => {
          if (Number(value) >= 1000000000000) {
            return value / 1000000000000 + "t"
          } else if (Number(value) >= 1000000000) {
            return value / 1000000000 + "b"
          } else if (Number(value) >= 1000000) {
            return value / 1000000 + "m"
          } else if (Number(value) >= 1000) {
            return value / 1000 + "k"
          } else {
            return value.toString() // Convert to string
          }
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadiusApplication: "end",
        borderRadius: 10,
      },
    },
    // title: {
    //   text: "Mobile App Usage",
    //   align: "left",
    //   offsetX: 10,
    //   style: {
    //     fontWeight: 700,
    //     fontSize: "14px",
    //     color: "#16192C",
    //   },
    // },
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
