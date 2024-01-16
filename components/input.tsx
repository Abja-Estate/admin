import clsx from 'clsx';
import { EyeIcon, EyeSlashIcon } from './svgs';
import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}
export default function Input(props: InputProps) {
  const { type, className, ...prop } = props;

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePassswordVisibility = () =>
    setPasswordVisibility((prev) => !prev);

  switch (type) {
    case 'password': {
      return (
        <div
          className={clsx(
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
    case 'email': {
      return (
        <input
          className={clsx(
            'block w-full border-b-[1px] border-primary px-[16px] h-[42px] outline-none font-medium',
            className
          )}
          {...prop}
        />
      );
    }
    default: {
      return (
        <input
          className={clsx(
            'block w-full border-b-[1px] border-primary px-[16px] h-[42px] outline-none font-medium',
            className
          )}
          {...prop}
        />
      );
    }
  }
}
