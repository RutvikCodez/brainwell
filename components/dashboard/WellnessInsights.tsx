"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const topicData = [
  { name: "Stress", value: 42 },
  { name: "Focus", value: 28 },
  { name: "Sleep", value: 18 },
  { name: "Other", value: 12 },
]

const WellnessInsights = () => {
  return (
    <Card className="bg-white border border-[#E6F1F0] shadow-lg">
      <CardHeader>
        <CardTitle className="text-[#1F3B2C]">Wellness Insights</CardTitle>
        <CardDescription className="text-[#1F3B2C]/70">Your wellness analytics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#FDF2E9] rounded-lg p-4 border border-[#E6F1F0] flex flex-col gap-2">
            <p className="text-sm text-[#1F3B2C]/70">Avg. Session Duration</p>
            <p className="text-3xl font-bold text-[#1F3B2C]">7.2 min</p>
          </div>
          <div className="bg-[#FDF2E9] rounded-lg p-4 border border-[#E6F1F0] flex flex-col gap-2">
            <p className="text-sm text-[#1F3B2C]/70">Most Discussed Topic</p>
            <p className="text-3xl font-bold text-[#1F3B2C]">Stress</p>
            <p className="text-xs text-[#1F3B2C]/70">42% of sessions</p>
          </div>
          <div className="bg-[#FDF2E9] rounded-lg p-4 border border-[#E6F1F0] flex flex-col gap-2">
            <p className="text-sm text-[#1F3B2C]/70">Top Words Used</p>
            <p className="text-sm font-semibold text-[#1F3B2C]">Calm, Focus, Relax</p>
          </div>
        </div>

        <div className="bg-[#FDF2E9] rounded-lg p-4 border border-[#E6F1F0] flex flex-col gap-4">
          <p className="text-sm font-semibold text-[#1F3B2C]">Topic Distribution</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={topicData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E6F1F0" />
              <XAxis dataKey="name" stroke="#1F3B2C" />
              <YAxis stroke="#1F3B2C" />
              <Tooltip contentStyle={{ backgroundColor: "#FDF2E9", border: "1px solid #1F3B2C" }} />
              <Bar dataKey="value" fill="#1F3B2C" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default WellnessInsights
