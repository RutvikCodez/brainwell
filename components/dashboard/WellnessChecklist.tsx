'use client'
import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { CheckCircle2 } from 'lucide-react'
import CardWrapper from './CardWrapper'

const WellnessChecklist = ({ checklist }: { checklist: string[] }) => {
  const [completed, setCompleted] = useState<number[]>([1, 3])

  const toggleComplete = (id: number) => {
    setCompleted((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  return (
    <CardWrapper
      title="Daily Wellness Checklist"
      desc={`${completed.length} of ${checklist.length} completed`}
      cns={{
        cardContent: 'flex flex-col gap-3',
        card: 'max-md:col-span-2',
      }}
    >
      {checklist.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-4 p-4 rounded-lg bg-[#FDF2E9] border border-[#E6F1F0] hover:border-[#1F3B2C] transition-all cursor-pointer`}
          onClick={() => toggleComplete(index)}
        >
          <Checkbox
            checked={completed.includes(index)}
            onCheckedChange={() => toggleComplete(index)}
            className="w-6 h-6 cursor-pointer"
          />
          <span
            className={`flex-1 font-medium ${
              completed.includes(index) ? 'line-through text-[#1F3B2C]/50' : 'text-[#1F3B2C]'
            }`}
          >
            {item}
          </span>
          {completed.includes(index) && (
            <CheckCircle2 className="w-5 h-5 text-[#1F3B2C] shrink-0" />
          )}
        </div>
      ))}
    </CardWrapper>
  )
}

export default WellnessChecklist
