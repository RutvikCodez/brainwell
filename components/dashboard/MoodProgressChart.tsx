'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts'

const weekData = [
  { date: 'Mon', mood: 5.2 },
  { date: 'Tue', mood: 5.8 },
  { date: 'Wed', mood: 6.1 },
  { date: 'Thu', mood: 6.5 },
  { date: 'Fri', mood: 7.0 },
  { date: 'Sat', mood: 6.8 },
  { date: 'Sun', mood: 7.5 },
]

const MoodProgressChart = () => {
  const [view, setView] = useState<'week' | 'month' | 'year'>('week')

  return (
    <Card className="bg-white border border-[#E6F1F0] shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-[#1F3B2C]">Mood Over Time</CardTitle>
          <CardDescription className="text-[#1F3B2C]/70">
            Your emotional wellness trend
          </CardDescription>
        </div>
        <div className="flex gap-2">
          {(['week', 'month', 'year'] as const).map((v) => (
            <Button
              key={v}
              variant={view === v ? 'default' : 'outline'}
              size="sm"
              onClick={() => setView(v)}
              className={view === v ? 'bg-[#1F3B2C] text-white' : 'text-[#1F3B2C] border-[#E6F1F0]'}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={weekData}>
            <defs>
              <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1F3B2C" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#1F3B2C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E6F1F0" />
            <XAxis dataKey="date" stroke="#1F3B2C" />
            <YAxis stroke="#1F3B2C" domain={[0, 10]} />
            <Tooltip
              contentStyle={{ backgroundColor: '#FDF2E9', border: '1px solid #1F3B2C' }}
              formatter={(value) => (typeof value === 'number' ? `${value.toFixed(1)}/10` : value)}
            />
            <Area
              type="monotone"
              dataKey="mood"
              stroke="#1F3B2C"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorMood)"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#E6F1F0] rounded-lg p-4 border border-[#1F3B2C]/10 text-center">
            <p className="text-sm text-[#1F3B2C]/70">Overall Improvement</p>
            <p className="text-2xl font-bold text-[#1F3B2C]">+12%</p>
          </div>
          <div className="bg-[#FDF2E9] rounded-lg p-4 border border-[#1F3B2C]/10 text-center">
            <p className="text-sm text-[#1F3B2C]/70">Stress Down</p>
            <p className="text-2xl font-bold text-[#1F3B2C]">-6%</p>
          </div>
          <div className="bg-[#1F3B2C] rounded-lg p-4 border border-[#1F3B2C]/10 text-center">
            <p className="text-sm text-[#FDF2E9]">Avg. Score</p>
            <p className="text-2xl font-bold text-[#FDF2E9]">6.7</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default MoodProgressChart
