'use client';

import { PayPalButtons } from '@paypal/react-paypal-js';
import { useRouter } from 'next/navigation';

interface PayPalButtonProps {
  plan: 'starter' | 'pro';
  onSuccess?: () => void;
}

const plans = {
  starter: {
    name: 'Starter Pack',
    price: '4.99',
    credits: 10,
  },
  pro: {
    name: 'Pro Pack',
    price: '9.99',
    credits: 30,
  },
};

export default function PayPalButton({ plan, onSuccess }: PayPalButtonProps) {
  const router = useRouter();
  const selectedPlan = plans[plan];

  const createOrder = (data: unknown, actions: { order: { create: (arg0: { purchase_units: { description: string; amount: { currency_code: string; value: string; }; }[]; }) => Promise<unknown>; }; }) => {
    return actions.order.create({
      purchase_units: [
        {
          description: `${selectedPlan.name} - ${selectedPlan.credits} Credits`,
          amount: {
            currency_code: 'USD',
            value: selectedPlan.price,
          },
        },
      ],
    });
  };

  const onApprove = (data: { orderID: string }, actions: { order: { capture: () => Promise<{ status: string; }>; }; }) => {
    return actions.order.capture().then((details) => {
      // Payment successful
      console.log('Payment completed:', details);
      
      // Redirect to success page
      router.push(`/payment/success?plan=${plan}&credits=${selectedPlan.credits}`);
      
      onSuccess?.();
    });
  };

  return (
    <div className="w-full">
      <PayPalButtons
        style={{
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        }}
        createOrder={createOrder}
        onApprove={onApprove}
        onCancel={() => {
          router.push('/payment/cancel');
        }}
        onError={(err) => {
          console.error('PayPal error:', err);
          router.push('/payment/error');
        }}
      />
    </div>
  );
}
