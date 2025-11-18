import Image from 'next/image'
import CardWrapper from './CardWrapper'

const GreetingSection = ({ image, username, sessionCount, streak }: greetingsProps) => {
  return (
    <CardWrapper
      title={`Welcome, ${username}`}
      desc="Proud of you for completing your first session!"
      cns={{ cardContent: 'flex w-full justify-between', card: 'max-md:col-span-2' }}
    >
      <div className="flex items-center gap-8 text-sm text-muted-foreground max-md:flex-col">
        <div>
          <p className="font-semibold text-foreground">{streak}-day streak</p>
          <p className="text-xs text-gray-400">Keep it going!</p>
        </div>
        <div className="h-12 w-px bg-border max-md:hidden"></div>
        <div>
          <p className="font-semibold text-foreground">{sessionCount} sessions</p>
          <p className="text-xs text-gray-400">Completed</p>
        </div>
      </div>
      <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-primary/30 shadow-md">
        <Image alt={username} src={image} fill className="object-cover rounded-full" />
      </div>
    </CardWrapper>
  )
}

export default GreetingSection
