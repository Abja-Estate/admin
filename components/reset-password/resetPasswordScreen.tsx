import { ResetPasswordViewsProps } from '@/@types/resetPassword';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../input';
import Button from '../button';

export default function ResetPasswordScreen({
  changeView,
}: ResetPasswordViewsProps) {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    changeView('OTP');
  };

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    phone: '',
  });

  const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isDisabled = !formData.phone;

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
        <p className='text-[#333436] font-semibold'>
          Enter email address or phone number to receive a one-time password.
        </p>
      </header>
      <form
        className='flex flex-col gap-[32px] w-full max-w-[500px] mx-auto'
        onSubmit={submit}
      >
        <fieldset>
          <label className='inline-block text-primary font-medium mb-[16px]'>
            Email or Phone number
          </label>
          <Input
            name='phone'
            type='text'
            placeholder='Enter phone number or email'
            value={formData.phone}
            onChange={formDataHandler}
          />
        </fieldset>
        <fieldset className='pt-[50px]'>
          <Button disabled={isDisabled} loading={loading}>
            Get OTP
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
