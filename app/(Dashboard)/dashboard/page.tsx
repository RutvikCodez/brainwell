import BottomActionBar from '@/components/dashboard/BottomActionBar'
import GoalsAndProgress from '@/components/dashboard/GoalsAndProgress'
import GreetingSection from '@/components/dashboard/GreetingSection'
import MoodAndSentiment from '@/components/dashboard/MoodAndSentiment'
import MoodProgressChart from '@/components/dashboard/MoodProgressChart'
import RecommendationsGrid from '@/components/dashboard/RecommendationsGrid'
import SessionSummary from '@/components/dashboard/SessionSummary'
import VoiceJournal from '@/components/dashboard/VoiceJournal'
import WellnessChecklist from '@/components/dashboard/WellnessChecklist'
import WellnessInsights from '@/components/dashboard/WellnessInsights'
import { getSignInUser } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const user = await getSignInUser()
  if (!user) return null

  const getSession = await fetch(`${process.env.NEXTAUTH_URL}/api/session/${user?._id.toString()}`)
  const getSessionData: SessionResponse = await getSession.json()
  if (!getSessionData.session) {
    return redirect('/assesment')
  }

  if (getSessionData.session.sessionCount < 1) {
    return redirect('/assesment')
  }

  console.log(getSessionData)

  return (
    <main className="min-h-screen bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6 w-full">
        <GreetingSection
          image={user?.image || ''}
          username={user?.name || ''}
          sessionCount={getSessionData.session.sessionCount}
          streak={getSessionData.session.streak}
        />
        <BottomActionBar />
        <SessionSummary
          summary={getSessionData.session.summary}
          todayMood={getSessionData.session.todayMood}
        />
        <MoodAndSentiment {...getSessionData.session.moodPercentages} />
        <GoalsAndProgress />
        <MoodProgressChart
          AverageScore={getSessionData.session.emotionScore}
          last3Summaries={[]}
          overallImprovement={getSessionData.session.improvementPercent}
          stressDown={getSessionData.session.avgLast7Score}
        />
        <VoiceJournal data={getSessionData.session.last3Summaries} />
        <WellnessChecklist checklist={getSessionData.session.wellnessChecklist} />
        <RecommendationsGrid recommendations={getSessionData.session.aiRecommendations} />
        <WellnessInsights
          durationMinutes={getSessionData.session.durationMinutes}
          mostDiscussedTopic={getSessionData.session.mostDiscussedTopic}
          topWords={getSessionData.session.topWords}
          topicDiustribution={getSessionData.session.topicDistribution}
        />
      </div>
    </main>
  )
}
