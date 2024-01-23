import { ArrowDropDown } from '@/components/svgs';
import Image from 'next/image';

export default function Preference() {
  return (
    <div className='p-[40px] rounded-[10px] border-[1px] border-[#7F947B] bg-white w-full max-w-[860px] flex flex-col gap-[40px]'>
      <header className='flex items-center justify-between pb-[16px] border-b-[1px] border-b-[#2A4C23]'>
        <div>
          <h1 className='text-[333436] text-[24px] font-semibold mb-[8px]'>
            Preferences
          </h1>
          <p className='text-[#949494] font-semibold'>
            Customize according to your preference
          </p>
        </div>
        <div className='my-auto flex gap-[16px] items-center'>
          <button className='text-[#949494] bg-transparent border-[1px] border-[#949494] text-[14px] w-[106px] h-[39px] rounded-[8px]'>
            Cancel
          </button>
          <button className='text-white bg-primary text-[14px] w-[106px] h-[39px] rounded-[10px]'>
            Save
          </button>
        </div>
      </header>
      <div>
        <h1 className='text-[333436] text-[24px] font-semibold mb-[16px]'>
          Select Theme
        </h1>
        <div className='flex gap-[16px]'>
          <div>
            <Image
              src='/images/preference-lightmode.svg'
              alt='Preference Light mode'
              width={319}
              height={204}
            />
            <p className='p-[10px] text-[#949494] text-[18px]'>Light mode</p>
          </div>
          <div>
            <Image
              src='/images/preference-darkmode.svg'
              alt='Preference Dark mode'
              width={319}
              height={204}
            />
            <p className='p-[10px] text-[#949494] text-[18px]'>Dark mode</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[34px]'>
        <div className='flex justify-between items-center'>
          <h1 className='text-[#333436] text-[18px] font-semibold'>
            Time Zone
          </h1>
          <div className='rounded-[10px] h-[39px] px-[10px] w-[375px] border-[1px] border-[#949494] text-[14px] text-[#333436] flex items-center justify-between'>
            <span className='text-[18px]'>(UTC -08:00) Pacific Time...</span>
            <ArrowDropDown />
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-[#333436] text-[18px] font-semibold'>Language</h1>
          <div className='rounded-[10px] h-[39px] px-[10px] w-[375px] border-[1px] border-[#949494] text-[14px] text-[#333436] flex items-center justify-between'>
            <span className='text-[18px]'>English (UK)</span>
            <ArrowDropDown />
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-[#333436] text-[18px] font-semibold'>
            Font Size
          </h1>
          <div className='rounded-[10px] h-[39px] px-[10px] w-[375px] border-[1px] border-[#949494] text-[14px] flex items-center justify-between'>
            <span className='text-[#3A3A3A66] text-[18px]'>
              Select Font Size
            </span>
            <ArrowDropDown />
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-[#333436] text-[18px] font-semibold'>
            Icons Size
          </h1>
          <div className='rounded-[10px] h-[39px] px-[10px] w-[375px] border-[1px] border-[#949494] text-[14px] flex items-center justify-between'>
            <span className='text-[#3A3A3A66] text-[18px]'>
              Select Icon Size
            </span>
            <ArrowDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}
