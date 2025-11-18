type buttonPropsType = {
  value: string
  link: string
  className?: string
  backgoundColor?: string
}

type tittleDescPropsType = {
  title: string
  description: string
  titleTextColor?: string
  descriptionTextColor?: string
  className?: string
}

type featureCardProps = {
  title: string
  description: string
}

type ServiceCardPropsType = {
  title: string
  subtitle: string
  Icon: SvgComponent
}

type JourneyCardProps = {
  step: string
  title: string
  description: string
}

type MentalIssueCardProps = {
  title: string
  description: string
  imageSrc: string | StaticImageData
  href: string
}

type ConversationProps = {
  userId: string
  username: string
}

type greetingsProps = {
  username: string
  image: string
  sessionCount: number
  streak: number
}

type cardWrapperProps = {
  title: string
  desc: string
  children: React.ReactNode
  cns?: {
    card?: string
    cardHeader?: string
    cardTitle?: string
    cardDesc?: string
    cardContent?: string
  }
}

type progresProps = {
  label: string
  value: string
  bg: string
  text: string
}

type SessionResponse = {
  success: boolean
  session: Session
}

type Session = {
  moodPercentages: MoodPercentages
  _id: string
  userId: string
  sessionCount: number
  streak: number
  transcript: TranscriptMessage[]
  todayMood: string
  summary: string
  startTime: string
  endTime: string
  durationMinutes: number
  emotionScore: number
  improvementPercent: number
  stressDownPercent: number
  avgLast7Score: number
  last3Summaries: journalEntries[]
  wellnessChecklist: string[]
  aiRecommendations: AIRecommendation[]
  topicDistribution: TopicDistribution[]
  topWords: string[]
  mostDiscussedTopic: string
  createdAt: string
  updatedAt: string
  __v: number
}

type MoodPercentages = {
  positive: number
  neutral: number
  negative: number
}

type TranscriptMessage = {
  role: string
  text: string
}

type AIRecommendation = {
  title: string
  description: string
  type: string
}

type TopicDistribution = {
  topic: string
  percentage: number
}

type sessionSummaryProps = {
  summary: string
  todayMood: string
}

type moodProgreeChartProps = {
  last3Summaries: weekDataProps[]
  overallImprovement: number
  stressDown: number
  AverageScore: number
}

type weekDataProps = { date: string, mood: number }

type wellnessInsightsProps = {
  durationMinutes: number
  mostDiscussedTopic: string
  topWords: string[]
  topicDiustribution: TopicDistribution[]
}

type journalEntries = {
  date: string
  summary: string
}