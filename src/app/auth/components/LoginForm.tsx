'use client';

import React, { FormEvent, useState } from 'react';
import { AuthForm } from '@/app/auth/components/AuthForm';
import { useRouter } from 'next/navigation';
import { LoginUsecase } from '@core/modules/auth/usecase/login.usecase';

export default function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();
    const result = await new LoginUsecase().execute({ email, password });
    if (result.errors) {
      setErrors(result.errors);
      return;
    } else {
      setErrors([]);
      router.push('/');
    }
  };
  return <AuthForm formType='login' onSubmit={handleSubmit} errors={errors} />;
}
