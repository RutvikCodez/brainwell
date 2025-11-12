import GoalsAndProgress from '@/components/dashboard/GoalsAndProgress'
import GreetingSection from '@/components/dashboard/GreetingSection'
import MoodAndSentiment from '@/components/dashboard/MoodAndSentiment'
import MoodProgressChart from '@/components/dashboard/MoodProgressChart'
import QuoteOfTheDay from '@/components/dashboard/QuoteOfTheDay'
import RecommendationsGrid from '@/components/dashboard/RecommendationsGrid'
import SessionSummary from '@/components/dashboard/SessionSummary'
import VoiceJournal from '@/components/dashboard/VoiceJournal'
import WellnessChecklist from '@/components/dashboard/WellnessChecklist'
import WellnessInsights from '@/components/dashboard/WellnessInsights'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/sign-in')
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0]bg-[#] p-8">
      <main className="max-w-7xl mx-auto flex flex-col gap-6">
        <GreetingSection image={session.user.image || ''} username={session.user.name || ''} />
        <SessionSummary />
        <MoodAndSentiment />
        <MoodProgressChart />
        <VoiceJournal />
        <RecommendationsGrid />
        <GoalsAndProgress />
        <WellnessInsights />
        <WellnessChecklist />
        <QuoteOfTheDay />
      </main>
    </div>
  )
}
