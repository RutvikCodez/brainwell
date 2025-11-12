"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const emotionData = [
  { name: "Positive", value: 72, color: "#1F3B2C" },
  { name: "Neutral", value: 20, color: "#E6F1F0" },
  { name: "Negative", value: 8, color: "#FDF2E9" },
]

const MoodAndSentiment = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl">
      {/* Today's Mood Card */}
      <Card className="bg-white shadow-lg border border-[#E6F1F0]">
        <CardHeader>
          <CardTitle className="text-[#1F3B2C]">Today&apos;s Mood</CardTitle>
          <CardDescription className="text-[#1F3B2C]/70">Based on session analysis</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex items-center justify-center gap-6">
            <div className="text-6xl">😊</div>
            <div>
              <p className="text-4xl font-bold text-[#1F3B2C]">7.5</p>
              <p className="text-sm text-[#1F3B2C]/70">/10 Calm</p>
            </div>
          </div>
          <div className="bg-[#E6F1F0] rounded-lg p-4 border border-[#1F3B2C]/10">
            <p className="text-sm text-[#1F3B2C] text-center">
              💡 <strong>Tip:</strong> You&apos;re in a great emotional space. Keep up with your mindfulness practice.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Emotion Breakdown Card */}
      <Card className="bg-white shadow-lg border border-[#E6F1F0]">
        <CardHeader>
          <CardTitle className="text-[#1F3B2C]">Emotion Breakdown</CardTitle>
          <CardDescription className="text-[#1F3B2C]/70">Session sentiment analysis</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={emotionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {emotionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-2">
            {emotionData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-[#1F3B2C]">
                  {item.name} {item.value}%
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MoodAndSentiment
