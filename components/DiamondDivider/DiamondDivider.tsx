export function DiamondDivider() {
  const bubbles = [
    { r: 3, color: '#4A8AD4', opacity: 0.4 },
    { r: 5, color: '#c1272d', opacity: 0.55 },
    { r: 4, color: '#4A8AD4', opacity: 0.35 },
    { r: 7, color: '#4A8AD4', opacity: 0.5 },
    { r: 4, color: '#c1272d', opacity: 0.45 },
    { r: 5, color: '#4A8AD4', opacity: 0.4 },
    { r: 3, color: '#c1272d', opacity: 0.5 },
  ]

  return (
    <div className="flex items-center justify-center gap-3 my-12" aria-hidden="true">
      {bubbles.map((b, i) => (
        <svg key={i} width={b.r * 2 + 2} height={b.r * 2 + 2} viewBox={`0 0 ${b.r * 2 + 2} ${b.r * 2 + 2}`}>
          <circle
            cx={b.r + 1}
            cy={b.r + 1}
            r={b.r}
            fill="none"
            stroke={b.color}
            strokeWidth="1.5"
            opacity={b.opacity}
          />
        </svg>
      ))}
    </div>
  )
}
