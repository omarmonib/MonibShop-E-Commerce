'use client';

import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'register'> {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  icon?: ReactNode;
}

const FormInput = ({
  label,
  register,
  error,
  icon,
  placeholder,
  type = 'text',
  ...props
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={register.name} className="label-base">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          className="input-base w-full"
          type={type}
          id={register.name}
          placeholder={placeholder}
          {...register}
          {...props}
        />
        {icon && <div className="absolute right-2">{icon}</div>}
      </div>
      {error && <span className="error-text">{error.message}</span>}
    </div>
  );
};

export default FormInput;
