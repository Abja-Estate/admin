import Button from '@/components/button';
import { CancelIcon, StarIcon } from '@/components/svgs';
import Image from 'next/image';

export default function Report() {
  return (
    <>
      <header className='flex gap-[30px]'>
        <div className='px-[20px] py-[13px] bg-white w-[590px] rounded-[15px] flex flex-col gap-[12px]'>
          <div className='flex justify-between'>
            <div className='flex gap-[8px]'>
              <Image
                src='/images/ratings-star.svg'
                width={40}
                height={40}
                alt='Ratings star'
              />
              <div>
                <h1 className='text-[14px] font-semibold text-[#333436]'>
                  Reviews
                </h1>
                <p className='text-[#949494] text-[10px]'>
                  Feedback provided by clients and service providers
                </p>
              </div>
            </div>
            <div>
              <CancelIcon />
            </div>
          </div>
          <div className='flex gap-[8px] items-center'>
            <h1 className='text-[32px]'>4.5</h1>
            <div className='h-[32px] border-l-[#949494] border-l-[1px] pl-[5px]'>
              <div className='flex mb-[8px]'>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <div className='flex gap-[8px] text-[10px]'>
                <p className='font-light'>4.5</p>
                <p>5.2K Ratings</p>
                <p className='underline'>18 reviews</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <Rating percent='100%' ratings='5.0' />
            <Rating percent='80%' ratings='4.0' />
            <Rating percent='60%' ratings='3.0' />
            <Rating percent='40%' ratings='2.0' />
            <Rating percent='20%' ratings='1.0' />
          </div>
          <div className='mt-auto'>
            <Button className='!text-[14px] !h-[35px]'>View All Reviews</Button>
          </div>
        </div>
        <div className="px-[26px] py-[13px] bg-white w-[540px] bg-[url('/images/report-stripes.svg')] rounded-[15px] flex flex-col justify-between gap-[12px]">
          <div className='flex items-center justify-between'>
            <p className='text-[#333436] text-[18px] font-semibold'>
              Total Service Report
            </p>
            <h1 className='text-[#333436] text-[34px] font-semibold'>234</h1>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-[#333436] text-[18px] font-semibold'>
              Total Reviews
            </p>
            <h1 className='text-[#333436] text-[34px] font-semibold'>136</h1>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-[#333436] text-[18px] font-semibold'>
              Users In The Last 30 Mins
            </p>
            <h1 className='text-[#333436] text-[34px] font-semibold'>23</h1>
          </div>
        </div>
      </header>
      <div className='flex flex-col gap-[30px]'></div>
    </>
  );
}

interface RatingsProps {
  percent: string;
  ratings: string;
}

const Rating = ({ percent, ratings }: RatingsProps) => {
  return (
    <div className='flex items-center gap-[5px]'>
      <div className='flex-1 h-[7px] bg-[#EDF2F7] rounded-[29px] overflow-hidden'>
        <div
          style={{ width: percent }}
          className='h-[7px] bg-[#FFD600] rounded-[29px]'
        ></div>
      </div>
      <div className='flex items-center gap-[3px]'>
        <span className='text-[#333436] text-[10px] font-light'>{ratings}</span>
        <div className='-mt-[3.8px]'>
          <StarIcon />
        </div>
      </div>
    </div>
  );
};
