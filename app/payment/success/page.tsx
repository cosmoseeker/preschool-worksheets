'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');
  const credits = searchParams.get('credits');

  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! You&apos;ve added <strong>{credits} credits</strong> to your account.
        </p>
        
        <div className="bg-green-50 rounded-lg p-4 mb-6">
          <p className="text-green-700">
            ✅ Your credits have been added to your account.
          </p>
          <p className="text-green-600 text-sm mt-2">
            Plan: {plan === 'starter' ? 'Starter Pack' : 'Pro Pack'}
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/generator"
            className="block w-full bg-primary-400 text-white py-3 rounded-lg font-bold hover:bg-primary-500 transition"
          >
            🎨 Start Creating Worksheets
          </Link>
          <Link
            href="/"
            className="block w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
