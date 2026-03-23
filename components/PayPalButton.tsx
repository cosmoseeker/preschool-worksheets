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

  return (
    <div className="w-full">
      <PayPalButtons
        style={{
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
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
        }}
        onApprove={(data, actions) => {
          if (!actions?.order) return Promise.resolve();
          
          return actions.order.capture().then((details) => {
            console.log('Payment completed:', details);
            router.push(`/payment/success?plan=${plan}&credits=${selectedPlan.credits}`);
            onSuccess?.();
          });
        }}
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
