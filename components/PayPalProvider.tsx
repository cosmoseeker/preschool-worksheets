'use client';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'AXBZhStq6NavZhCWath1o7KEoxe7emgTlNo7Il1vLetR0XJdGmE_HWJbCFsuoiBe_9ONqjp8x_1ND-dc';

export default function PayPalProvider({ children }: { children: React.ReactNode }) {
  return (
    <PayPalScriptProvider
      options={{
        clientId,
        currency: 'USD',
        intent: 'capture',
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
