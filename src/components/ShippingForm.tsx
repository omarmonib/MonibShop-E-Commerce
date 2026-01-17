'use client';

import FormInput from '@/components/FormInput';
import { SHIPPING_FORM_LABELS, SHIPPING_PLACEHOLDERS } from '@/constants/cart';
import { ShippingFormInputs, shippingFormSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ShippingFormProps {
  setShippingForm: (data: ShippingFormInputs) => void;
}

const ShippingForm = ({ setShippingForm }: ShippingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingFormSubmit: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push('/cart?step=3', { scroll: false });
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(handleShippingFormSubmit)}>
      <FormInput
        label={SHIPPING_FORM_LABELS.name}
        type="text"
        placeholder={SHIPPING_PLACEHOLDERS.name}
        register={register('name')}
        error={errors.name}
      />

      <FormInput
        label={SHIPPING_FORM_LABELS.email}
        type="email"
        placeholder={SHIPPING_PLACEHOLDERS.email}
        register={register('email')}
        error={errors.email}
      />

      <FormInput
        label={SHIPPING_FORM_LABELS.phone}
        type="tel"
        placeholder={SHIPPING_PLACEHOLDERS.phone}
        register={register('phone')}
        error={errors.phone}
      />

      <FormInput
        label={SHIPPING_FORM_LABELS.address}
        type="text"
        placeholder={SHIPPING_PLACEHOLDERS.address}
        register={register('address')}
        error={errors.address}
      />

      <FormInput
        label={SHIPPING_FORM_LABELS.city}
        type="text"
        placeholder={SHIPPING_PLACEHOLDERS.city}
        register={register('city')}
        error={errors.city}
      />

      <button type="submit" className="btn-primary mt-4">
        Continue to Payment
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};

export default ShippingForm;
