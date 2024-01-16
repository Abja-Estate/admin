'use client';
import { ResetPasswordViewsProps } from '@/@types/resetPassword';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../input';
import Button from '../button';

export default function PasswordScreen({
  changeView,
}: ResetPasswordViewsProps) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    changeView('PASSWORD');
  };

  const isDisabled = !(formData.password && formData.confirmPassword);

  return (
    <div>
      <header className='grid place-items-center gap-[24px] pb-[32px]'>
        <Image
          src='/images/abj-logo.svg'
          alt='Abj logo'
          width={70}
          height={100}
        />
        <h1 className='text-primary text-[32px] font-bold'>Reset Password</h1>
        <p className='text-[#333436] font-semibold text-[14px] text-whites'>
          Enter your new password
        </p>
      </header>
      <form
        className='flex flex-col gap-[32px] w-full max-w-[500px] mx-auto'
        onSubmit={submit}
      >
        <fieldset>
          <label className='inline-block text-primary font-medium mb-[16px]'>
            New Password
          </label>
          <Input
            type='password'
            name='password'
            value={formData.password}
            onChange={formDataHandler}
            placeholder='New Password'
          />
        </fieldset>
        <fieldset>
          <label className='inline-block text-primary font-medium mb-[16px]'>
            Confirm Password
          </label>
          <Input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={formDataHandler}
            placeholder='Confirm Password'
          />
        </fieldset>
        <fieldset>
          <p className='text-center'>
            Didn&rsquo;t get a code?{' '}
            <span className='text-[#0174C7]'>Click to resend</span>
          </p>
        </fieldset>
        <fieldset className='pt-[50px]'>
          <Button disabled={isDisabled} loading={loading}>
            Continue
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
