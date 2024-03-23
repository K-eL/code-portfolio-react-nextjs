'use client';

import { ForgotPasswordUsecase } from '@core/modules/auth/usecase/forgot-password.usecase';
import { InputField } from '@app/components/InputField';
import { useState } from 'react';

export function ForgotPasswordForm() {
  const [errors, setErrors] = useState<string[]>([]);
  let isSent = false;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isSent = false;
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email')?.toString();
    const result = await new ForgotPasswordUsecase().execute({ email });
    if (result.errors) {
      setErrors(result.errors);
      return;
    } else {
      setErrors([]);
      isSent = true;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Forgot Password</h1>
        <p className='text-sm text-gray-500'>
          Enter your email to reset your password
        </p>
      </div>

      <InputField
        id='email'
        type='email'
        label='Email'
        placeholder='Enter your email'
      />

      <div className='flex items-center justify-between text-sm'>
        <a href='/auth/login' className=' text-red-500 hover:underline'>
          Back to Login
        </a>
      </div>

      <div className='flex flex-col-reverse space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          className='flex w-full justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8'
          type='submit'>
          Reset Password
        </button>
      </div>

      {isSent && (
        <div className='text-sm text-green-500'>
          If the email is registered, you will receive an email shortly.
        </div>
      )}

      {errors.length > 0 && (
        <div
          className='relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700'
          role='alert'>
          <strong className='font-bold'>Error!</strong>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
