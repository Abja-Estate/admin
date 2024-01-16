"use client"
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ApexOptions } from "apexcharts";

export default function NumberOfDownloads() {

    return (
        <section className="flex gap-[27px]">
            <div className="flex gap-[17px] w-full max-w-[900px]">
                <div className="bg-white py-[15px] h-[252px] rounded-[10px] basis-[55%]">
                    <DownloadsChart />
                </div>
                <div className="bg-white py-[15px] h-[252px] rounded-[10px] flex-1">
                    <MobileAppUsageChart />
                </div>
            </div>
            <div>
                <DatePicker />
            </div>
        </section>
    )
}

const DownloadsChart = () => {

    const series: ApexAxisChartSeries = [{
        name: "Desktops",
        data: [10, 41, 35, 10, 41, 35, 51, 49, 62, 69, 91, 70]
    }]

    const options: ApexOptions = {
        chart: {
            width: "100%",
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        title: {
            text: 'Number of Downloads',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
    }

    return (
        <div className='h-full'>
            <ReactApexChart options={options} series={series} type="line" height="100%" width="100%" />
        </div>
    )
}

const MobileAppUsageChart = () => {

    const series: ApexAxisChartSeries = [{
        name: "Desktops",
        data: [10, 30, 35, 45, 49, 12, 19, 30, 10, 5, 30, 20]
    }]

    const options: ApexOptions = {
        chart: {
            height: "100%",
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        title: {
            text: 'Mobile App Usage',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
    }

    return (
        <div className='h-full'>
            <ReactApexChart options={options} series={series} type="line" height="100%" width="100%" />
        </div>
    )
}

const DatePicker = () => {

    return (
        <div className="h-[252px] w-[253px] p-[15px] bg-white rounded-[10px]">

        </div>
    )
}