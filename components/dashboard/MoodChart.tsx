"use client"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

type  emotionDataprops =  {
    name: string;
    value: number;
    color: string;
}[]

const MoodChart = ( {emotionData}: {emotionData: emotionDataprops}) => {
  return (
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
  )
}

export default MoodChart
