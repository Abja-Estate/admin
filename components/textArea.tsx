import clsx from 'clsx';
import { EyeIcon, EyeSlashIcon } from './svgs';
import { ReactNode, useState } from 'react';
import { cn } from '@/utils/cn';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  trailing?: ReactNode
}
export default function TextArea(props: TextAreaProps) {
  const { className, trailing, rows, ...prop } = props;


  return (
    <div className='relative'>
      <textarea
        className={cn(
          'block w-full border-b-[1px] border-primary px-[16px] outline-none font-medium resize-none py-2',
          className,
          trailing && "pr-[30px]"
        )}
        rows={rows ?? 7}
        {...prop}
      />
      {
        trailing && (
          <div className='absolute top-[10px] right-0'>
            {trailing}
          </div>
        )
      }
    </div>
  );
}
