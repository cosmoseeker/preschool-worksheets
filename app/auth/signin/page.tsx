import { Suspense } from 'react'
import SignInForm from './SignInForm'

export default function SignInPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100">
        <div className="text-gray-500">Loading...</div>
      </div>
    }>
      <SignInForm />
    </Suspense>
  )
}
