import clsx from 'clsx';
import { EyeIcon, EyeSlashIcon } from './svgs';
import { ReactNode, useState } from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  trailing?: ReactNode
}
export default function Input(props: InputProps) {
  const { type, className, trailing, ...prop } = props;

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePassswordVisibility = () =>
    setPasswordVisibility((prev) => !prev);

  switch (type) {
    case 'password': {
      return (
        <div
          className={cn(
            'flex justify-between items-center w-full border-b-[1px] border-b-primary px-[16px] h-[42px] outline-none font-medium gap-3',
            className
          )}
        >
          <input
            className='flex-1 outline-none'
            type={passwordVisibility ? 'text' : type}
            {...prop}
          />
          <span onClick={togglePassswordVisibility}>
            {passwordVisibility ? <EyeIcon /> : <EyeSlashIcon />}
          </span>
        </div>
      );
    }
    default: {
      return (
        <div className='relative'>
          <input
            type={type}
            className={cn(
              'block w-full border-b-[1px] border-primary px-[16px] h-[42px] outline-none font-medium',
              className,
              trailing && "pr-[30px]"
            )}
            {...prop}
          />
          {
            trailing && (
              <div className='absolute top-[50%] translate-y-[-50%] right-0'>
                {trailing}
              </div>
            )
          }
        </div>
      );
    }
  }
}
