'use client'
import { Button } from '../ui/button'
import GoogleIcon from './GoogleIcon'
import { Github } from 'lucide-react'
import { signIn } from 'next-auth/react'

const SignIn = () => {
  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/assesment' })
  }

  const handleGitHubSignIn = async () => {
    await signIn('github', { callbackUrl: '/assesment' })
  }
  return (
    <div className="flex flex-col gap-3">
      <Button
        onClick={handleGoogleSignIn}
        variant="outline"
        size="lg"
        className="w-full gap-2 transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus-visible:scale-[1.02]"
        aria-label="Sign in with Google"
      >
        <GoogleIcon />
        Continue with Google
      </Button>

      <Button
        onClick={handleGitHubSignIn}
        variant="outline"
        size="lg"
        className="w-full gap-2 transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus-visible:scale-[1.02]"
        aria-label="Sign in with GitHub"
      >
        <Github className="size-5" aria-hidden="true" />
        Continue with GitHub
      </Button>
    </div>
  )
}

export default SignIn
