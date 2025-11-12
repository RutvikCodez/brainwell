import SignIn from '@/components/auth/SignIn'

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] px-4 animate-fadeIn">
      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-2xl border border-[#1F3B2C]/10 bg-[#FDF2E9]/90 p-8 shadow-2xl backdrop-blur-xl flex flex-col gap-6">
          <div className="flex flex-col gap-8">
            <div className="text-center flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-[#1F3B2C]">
                Welcome to BrainWell
              </h1>
              <p className="text-sm text-[#1F3B2C]/70">Sign in to continue</p>
            </div>
            <SignIn />
          </div>
          <p className="mt-6 text-center text-xs text-[#1F3B2C]/60">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}
