import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Music, Zap, MessageCircle, Sun, Moon, BookOpen } from 'lucide-react'

const recommendations = [
  {
    id: 1,
    title: 'Calming Music',
    description: 'Soothing soundscapes to relax your mind',
  },
  {
    id: 2,
    title: 'Meditation Guide',
    description: '5-minute guided breathing exercise',
  },
  {
    id: 3,
    title: 'Daily Affirmation',
    description: 'Positive words to start your day',
  },
  {
    id: 4,
    title: 'Morning Motivation',
    description: 'Energize your morning routine',
  },
  {
    id: 5,
    title: 'Night Relaxation',
    description: 'Wind down with peaceful techniques',
  },
  {
    id: 6,
    title: 'Wellness Article',
    description: 'Mental health tips & insights',
  },
]

const RecommendationsGrid = () => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-xl p-8 border border-border shadow-sm animate-fadeIn">
      <h2 className="text-2xl font-bold text-[#1F3B2C]">AI Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((rec) => {
          return (
            <Card
              key={rec.id}
              className="bg-linear-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] border border-[#E6F1F0] shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <CardContent className="flex flex-col gap-1">
                  <h3 className="font-semibold text-[#1F3B2C]">{rec.title}</h3>
                  <p className="text-sm text-[#1F3B2C]/70">{rec.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default RecommendationsGrid
