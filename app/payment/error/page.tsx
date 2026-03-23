'use client';

import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="text-6xl mb-6">❌</div>
        <h1 className="text-3xl font-bold mb-4 text-red-600">
          Payment Error
        </h1>
        <p className="text-gray-600 mb-6">
          Something went wrong with your payment. Please try again.
        </p>
        
        <div className="bg-red-50 rounded-lg p-4 mb-6">
          <p className="text-red-700">
            ⚠️ If you were charged, please contact support.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/pricing"
            className="block w-full bg-primary-400 text-white py-3 rounded-lg font-bold hover:bg-primary-500 transition"
          >
            Try Again
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
