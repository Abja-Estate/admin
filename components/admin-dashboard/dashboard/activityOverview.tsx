'use client';
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import {
  CalculatorIcon,
  ClockRewindIcon,
  HomeIcon,
  HouseHoldIcon,
  MoneyHandIcon,
  ProgressIcon,
  PropertyIcon,
  RequestIcon,
} from '@/components/svgs';
import Image from 'next/image';

export default function ActivityOverview() {
  return (
    <section className='flex gap-[27px]'>
      <div className='flex gap-[24px] p-[10px] bg-white rounded-[16px] mt-5'>
        <div className='w-[160px] h-[137px] box py-[10px] px-[21px] grid place-items-center text-center'>
          <PropertyIcon />
          <div className='pt-[8px] pb-[17px]'>
            <h1 className='text-primary text-[14px]'>Properties</h1>
            <p className='#949494 text-[10px]'>20+ New Properties</p>
          </div>
          <Images />
        </div>
        <div className='w-[160px] h-[137px] box py-[10px] px-[21px] grid place-items-center text-center'>
          <HouseHoldIcon />
          <div className='pt-[8px] pb-[17px]'>
            <h1 className='text-primary text-[14px]'>Landlords</h1>
            <p className='#949494 text-[10px]'>20+ New Landlords</p>
          </div>
          <Images />
        </div>
        <div className='w-[160px] h-[137px] box py-[10px] px-[21px] grid place-items-center text-center'>
          <HouseHoldIcon />
          <div className='pt-[8px] pb-[17px]'>
            <h1 className='text-primary text-[14px]'>Rent</h1>
            <p className='#949494 text-[10px]'>20+ New Collection</p>
          </div>
          <Images />
        </div>
        <div className='w-[160px] h-[137px] box py-[10px] px-[21px] grid place-items-center text-center'>
          <RequestIcon />
          <div className='pt-[8px] pb-[17px]'>
            <h1 className='text-primary text-[14px]'>Request</h1>
            <p className='#949494 text-[10px]'>20+ New Collection</p>
          </div>
          <Images />
        </div>
      </div>
      <div className='px-[20px] py-[16px] flex items-center gap-[24px] box-glass-effect whitespace-nowrap'>
        <div className='flex flex-col gap-[10px]'>
          <div className='flex gap-[15px] items-center'>
            <CalculatorIcon />
            <span className='text-[#949494] text-[14px]'>
              80 Total Projects
            </span>
          </div>
          <div className='flex gap-[15px] items-center'>
            <ProgressIcon />
            <span className='text-[#949494] text-[14px]'>
              41 In-Progress Tasks
            </span>
          </div>
          <div className='flex gap-[15px] items-center'>
            <ClockRewindIcon />
            <span className='text-[#949494] text-[14px]'>
              39 Pending Requests
            </span>
          </div>
          <div className='flex gap-[15px] items-center'>
            <MoneyHandIcon />
            <span className='text-[#949494] text-[14px]'>Rent Collection</span>
          </div>
          <div className='flex gap-[15px] items-center'>
            <HomeIcon />
            <span className='text-[#949494] text-[14px]'>Others</span>
          </div>
        </div>
        <div>
          <div className='p-2 donut-circle rounded-[100%]'>
            <DonutChart />
          </div>
        </div>
      </div>
    </section>
  );
}

const DonutChart: React.FC<{}> = () => {
  const data = [30, 10, 40, 20, 10];
  const colors = ['#FF00E5', '#FF4906', '#39CEF3', '#47893F', '#FAFF00'];

  const chartRef = useRef(null);

  useEffect(() => {
    const width = 150;
    const height = 150;
    const radius = Math.min(width, height) / 2;
    const innerRadius = radius * 0.6;
    const padAngle = 0.04; // Angle between sections

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const colorScale = d3.scaleOrdinal().range(colors);

    const pie = d3
      .pie<number>()
      .value((d) => d)
      .sort(null);

    const arc: d3.Arc<any, number> = d3
      .arc<d3.DefaultArcObject, number>()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .padAngle(padAngle)
      .cornerRadius(6); // Set the corner radius for rounded edges

    const arcs = pie(data);

    svg
      .selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('d', (d: any) => arc(d) as string)
      .attr('fill', (_, i: number) => colorScale(String(i)) as string);

    svg
      .append('text')
      .text('76%')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .style('font-size', '16px')
      .style('fill', '#949494');

    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, [data, colors]);

  return <div ref={chartRef}></div>;
};

const Images = () => {
  return (
    <div className='flex items-center'>
      <Image src='/images/Ellipse 101.svg' alt='User' width={25} height={25} />
      <Image
        src='/images/Ellipse 102.svg'
        alt='User'
        width={25}
        height={25}
        className='-ml-[10px]'
      />
      <Image
        src='/images/Ellipse 103.svg'
        alt='User'
        width={25}
        height={25}
        className='-ml-[10px]'
      />
      <Image
        src='/images/Ellipse 104.svg'
        alt='User'
        width={25}
        height={25}
        className='-ml-[10px]'
      />
      <Image
        src='/images/Ellipse 105.svg'
        alt='User'
        width={25}
        height={25}
        className='-ml-[10px]'
      />
      <Image
        src='/images/Ellipse 106.svg'
        alt='User'
        width={25}
        height={25}
        className='-ml-[10px]'
      />
      <div className='border-[2px] border-white bg-[#d9d9d9] grid place-items-center text-[6px] text-center w-[22px] h-[22px] rounded-[100%] -ml-[10px]'>
        +156
      </div>
    </div>
  );
};
