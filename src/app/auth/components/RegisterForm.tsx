'use client';

import React, { useState } from 'react';
import { AuthForm } from '@/app/auth/components/AuthForm';
import { useRouter } from 'next/navigation';
import { RegisterUsecase } from '@/@core/modules/auth/usecase/register.usecase';

export default function RegisterForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();
    const passwordConfirmation = formData.get('confirmPassword')?.toString();
    const result = await new RegisterUsecase().execute({
      email,
      password,
      passwordConfirmation,
    });
    if (result.errors) {
      setErrors(result.errors);
      return;
    } else {
      setErrors([]);
      router.push('/');
    }
  };
  return (
    <AuthForm formType='register' onSubmit={handleSubmit} errors={errors} />
  );
}
