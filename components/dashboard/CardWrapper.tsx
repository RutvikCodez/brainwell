import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'

const CardWrapper = ({children,desc,title, cns }: cardWrapperProps) => {
  return (
    <Card className={cn("border-lavender-200 bg-white/80 backdrop-blur-sm shadow-lg", cns?.card)}>
      <CardHeader className={cns?.cardHeader}>
        <CardTitle className={cn("text-[#1F3B2C]", cns?.cardTitle)}>{title}</CardTitle>
        <CardDescription className={cns?.cardDesc}>{desc}</CardDescription>
      </CardHeader>
      <CardContent className={cns?.cardContent}>{children}</CardContent>
    </Card>
  )
}

export default CardWrapper
