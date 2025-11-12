import Image from "next/image"

const GreetingSection = ({ image, username }: greetingsProps) => {
  return (
    <div className="bg-white rounded-xl p-8 border border-border shadow-sm animate-fadeIn col-span-2">
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-semibold text-foreground">
              Welcome, {username}
            </h1>
            <p className="text-muted-foreground">
              Proud of you for completing your first session!
            </p>
          </div>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">5-day streak</p>
              <p className="text-xs text-gray-400">Keep it going!</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div>
              <p className="font-semibold text-foreground">6 sessions</p>
              <p className="text-xs text-gray-400">Completed</p>
            </div>
          </div>
        </div>
        <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-primary/30 shadow-md">
          <Image
            alt={username}
            src={image}
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default GreetingSection
