'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import PayPalButton from '@/components/PayPalButton';

export default function PricingPage() {
  const { data: session, status } = useSession();

  const plans = [
    {
      id: 'free' as const,
      name: 'Free Trial',
      price: '$0',
      credits: 3,
      features: [
        '3 free worksheets',
        'All worksheet types',
        'All themes',
        'PDF download',
      ],
      highlight: false,
    },
    {
      id: 'starter' as const,
      name: 'Starter Pack',
      price: '$4.99',
      credits: 10,
      features: [
        '10 worksheets',
        'All worksheet types',
        'All themes',
        'PDF download',
        'Email support',
      ],
      highlight: false,
    },
    {
      id: 'pro' as const,
      name: 'Pro Pack',
      price: '$9.99',
      credits: 30,
      features: [
        '30 worksheets',
        'All worksheet types',
        'All themes',
        'PDF download',
        'Priority support',
        'Best value!',
      ],
      highlight: true,
    },
  ];

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            💳 Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600">
            Get more worksheets and keep the fun going!
          </p>
          {status === 'authenticated' && (
            <div className="mt-4 bg-primary-100 rounded-lg p-3 inline-block">
              <span className="text-primary-700">
                🎉 You have <strong>{session?.user?.credits || 0}</strong> credits remaining
              </span>
            </div>
          )}
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl p-8 shadow-lg ${
                plan.highlight
                  ? 'ring-4 ring-secondary-400 transform scale-105'
                  : ''
              }`}
            >
              {plan.highlight && (
                <div className="bg-secondary-400 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  ⭐ MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-primary-500 mb-4">
                {plan.price}
              </div>
              <p className="text-gray-600 mb-6">
                {plan.credits} worksheet credits
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.id === 'free' ? (
                <Link
                  href="/generator"
                  className="block w-full text-center bg-gray-200 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-300 transition"
                >
                  Start Free
                </Link>
              ) : status === 'authenticated' ? (
                <PayPalButton plan={plan.id} />
              ) : (
                <Link
                  href="/auth/signin"
                  className="block w-full text-center bg-primary-400 text-white py-3 rounded-lg font-bold hover:bg-primary-500 transition"
                >
                  Sign in to Buy
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">❓ Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">What is a credit?</h4>
              <p className="text-gray-600">Each credit lets you generate one worksheet PDF.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Do credits expire?</h4>
              <p className="text-gray-600">No! Your credits never expire.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Can I get a refund?</h4>
              <p className="text-gray-600">Yes, contact us within 7 days for a full refund.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">What payment methods?</h4>
              <p className="text-gray-600">We accept PayPal and all major credit cards.</p>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link href="/" className="text-primary-500 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
