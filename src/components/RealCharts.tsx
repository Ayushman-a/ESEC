import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,
  BarChart, Bar, AreaChart, Area
} from 'recharts'

// Example datasets (replace with live data later)
const trendData = [
  { month: 'Jan', active: 120, peak: 32 },
  { month: 'Feb', active: 132, peak: 35 },
  { month: 'Mar', active: 158, peak: 41 },
  { month: 'Apr', active: 149, peak: 38 },
  { month: 'May', active: 171, peak: 47 },
  { month: 'Jun', active: 185, peak: 52 },
  { month: 'Jul', active: 179, peak: 49 },
  { month: 'Aug', active: 196, peak: 55 },
  { month: 'Sep', active: 204, peak: 59 },
  { month: 'Oct', active: 211, peak: 61 },
  { month: 'Nov', active: 208, peak: 60 },
  { month: 'Dec', active: 220, peak: 64 },
]

const utilizationData = [
  { pool: 'CAD', percent: 76 },
  { pool: 'EDA', percent: 62 },
  { pool: 'CAE', percent: 54 },
  { pool: 'GIS', percent: 81 },
  { pool: 'SIM', percent: 47 },
  { pool: 'PLM', percent: 68 },
]

const areaData = [
  { week: 'W1', reclaim: 4 },
  { week: 'W2', reclaim: 7 },
  { week: 'W3', reclaim: 6 },
  { week: 'W4', reclaim: 9 },
  { week: 'W5', reclaim: 8 },
  { week: 'W6', reclaim: 12 },
]

export function UsageTrendChart() {
  const theme = useTheme()
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={trendData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="active" stroke={theme.palette.primary.main} strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="peak" stroke={theme.palette.secondary.main} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function UtilizationBarChart() {
  const theme = useTheme()
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={utilizationData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="pool" />
        <YAxis unit="%" />
        <Tooltip />
        <Bar dataKey="percent" fill={theme.palette.secondary.main} radius={[8,8,0,0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function ReclaimAreaChart() {
  const theme = useTheme()
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={areaData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorReclaim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={theme.palette.primary.main} stopOpacity={0.35}/>
            <stop offset="95%" stopColor={theme.palette.primary.main} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="reclaim" stroke={theme.palette.primary.main} fill="url(#colorReclaim)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
