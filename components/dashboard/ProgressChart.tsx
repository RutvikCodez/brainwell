'use client'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts'

const ProgressChart = ({ weekData }: { weekData: weekDataProps[] }) => {
  return (
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
  )
}

export default ProgressChart
