'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { CheckCircle2 } from 'lucide-react'
import { checklist } from '@/constant'

const WellnessChecklist = () => {
  const [completed, setCompleted] = useState<number[]>([1, 3])

  const toggleComplete = (id: number) => {
    setCompleted((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  return (
    <Card className="bg-white border border-[#E6F1F0] shadow-lg">
      <CardHeader>
        <CardTitle className="text-[#1F3B2C]">Daily Wellness Checklist</CardTitle>
        <CardDescription className="text-[#1F3B2C]/70">
          {completed.length} of {checklist.length} completed
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {checklist.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-4 p-4 rounded-lg bg-[#FDF2E9] border border-[#E6F1F0] hover:border-[#1F3B2C] transition-all cursor-pointer`}
            onClick={() => toggleComplete(item.id)}
          >
            <Checkbox
              checked={completed.includes(item.id)}
              onCheckedChange={() => toggleComplete(item.id)}
              className="w-6 h-6 cursor-pointer"
            />
            <span
              className={`flex-1 font-medium ${
                completed.includes(item.id) ? 'line-through text-[#1F3B2C]/50' : 'text-[#1F3B2C]'
              }`}
            >
              {item.task}
            </span>
            {completed.includes(item.id) && (
              <CheckCircle2 className="w-5 h-5 text-[#1F3B2C] shrink-0" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default WellnessChecklist
