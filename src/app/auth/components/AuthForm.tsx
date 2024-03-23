'use client';

import { InputField } from '../../components/InputField';

type AuthFormProps = {
  formType: 'login' | 'register';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: string[];
};

export const AuthForm: React.FC<AuthFormProps> = ({
  formType,
  onSubmit,
  errors,
}) => {
  const isLoginForm = formType === 'login';
  const title = isLoginForm ? 'Login' : 'Register';
  const subTitle = isLoginForm ? 'New to the app?' : 'Already have an account?';

  return (
    <form
      role='form'
      onSubmit={onSubmit}
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-sm text-gray-500'>
          {subTitle}{' '}
          <a
            href={isLoginForm ? '/auth/register' : '/auth/login'}
            className='text-red-500 hover:underline'>
            {isLoginForm ? 'Register' : 'Login'}
          </a>
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          id='email'
          type='email'
          label='Email'
          placeholder='Enter your email'
        />

        <InputField
          id='password'
          type='password'
          label='Password'
          placeholder='Enter your password'
        />

        {!isLoginForm && (
          <InputField
            id='confirmPassword'
            type='password'
            label='Confirm Password'
            placeholder='Confirm your password'
          />
        )}
        {isLoginForm && (
          <div className='flex items-center justify-between text-sm'>
            <div className='flex items-center'>
              <input
                id='remember'
                type='checkbox'
                className='rounded border-gray-600 bg-gray-700 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500'
              />
              <label htmlFor='remember' className='ml-2 text-gray-500'>
                Remember me
              </label>
            </div>
            <a
              href='/auth/forgot-password'
              className=' text-red-500 hover:underline'>
              Forgot password?
            </a>
          </div>
        )}
      </div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8'
          type='submit'>
          {title}
        </button>
      </div>
      {errors.length > 0 && (
        <div
          className='relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700'
          role='alert'>
          <strong className='font-bold'>Error!</strong>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};
