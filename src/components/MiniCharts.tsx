import * as React from 'react'

type LineChartProps = { width?: number; height?: number; data?: number[] }
export function LineChart({ width = 420, height = 180, data = [10,22,18,30,26,40,38,54,49] }: LineChartProps) {
  const padding = 16
  const w = width - padding*2
  const h = height - padding*2
  const max = Math.max(...data) || 1
  const step = w / Math.max(1, data.length - 1)
  const d = data.map((v,i) => [padding + i*step, padding + h - (v/max)*h])
  const path = d.map((p,i) => (i===0?`M ${p[0]} ${p[1]}`:`L ${p[0]} ${p[1]}`)).join(' ')
  const area = `${path} L ${padding + (data.length-1)*step} ${padding + h} L ${padding} ${padding + h} Z`

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(47,91,234,0.35)" />
          <stop offset="100%" stopColor="rgba(47,91,234,0.0)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={width} height={height} rx="12" fill="#f4f7ff" />
      <path d={area} fill="url(#grad)" />
      <path d={path} fill="none" stroke="#2f5bea" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

type BarChartProps = { width?: number; height?: number; data?: number[] }
export function BarChart({ width = 420, height = 180, data = [8,12,20,14,26,34,18,22,28] }: BarChartProps) {
  const padding = 16
  const w = width - padding*2
  const h = height - padding*2
  const max = Math.max(...data) || 1
  const bar = w / (data.length * 1.5)
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <rect x="0" y="0" width={width} height={height} rx="12" fill="#f4f7ff" />
      {data.map((v,i) => {
        const bh = (v/max)*h
        const x = padding + i * (bar*1.5)
        const y = padding + (h - bh)
        return <rect key={i} x={x} y={y} width={bar} height={bh} rx="6" fill="#00c2b8" />
      })}
    </svg>
  )
}
