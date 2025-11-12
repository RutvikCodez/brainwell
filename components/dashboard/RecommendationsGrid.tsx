import { Card, CardContent } from '@/components/ui/card'
import { recommendations } from '@/constant'
import CardWrapper from './CardWrapper'

const RecommendationsGrid = () => {
  return (
    <CardWrapper
      title="AI Recommendations"
      desc=""
      cns={{
        card: 'col-span-2',
        cardContent: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
      }}
    >
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
    </CardWrapper>
  )
}

export default RecommendationsGrid
