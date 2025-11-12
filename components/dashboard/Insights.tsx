'use client'
import { topicData } from '@/constant'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Insights = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={topicData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E6F1F0" />
        <XAxis dataKey="name" stroke="#1F3B2C" />
        <YAxis stroke="#1F3B2C" />
        <Tooltip contentStyle={{ backgroundColor: '#FDF2E9', border: '1px solid #1F3B2C' }} />
        <Bar dataKey="value" fill="#1F3B2C" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Insights
