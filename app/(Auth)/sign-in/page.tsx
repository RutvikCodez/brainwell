import SignIn from '@/components/auth/SignIn'

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-light-100 via-background to-primary-100/20 px-4 animate-fadeIn">
      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-2xl border border-border/50 bg-card/80 p-8 shadow-2xl backdrop-blur-xl flex flex-col gap-6">
          <div className="flex flex-col gap-8">
            <div className="text-center flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Welcome to BrainWell
              </h1>
              <p className="text-sm text-muted-foreground">Sign in to continue</p>
            </div>
            <SignIn />
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}
