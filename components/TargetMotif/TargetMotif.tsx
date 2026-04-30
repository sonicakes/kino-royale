interface Props {
  size?: number
  opacity?: number
  className?: string
}

export function TargetMotif({ size = 200, opacity = 0.06, className }: Props) {
  const cx = size / 2
  const radii = [0.94, 0.78, 0.62, 0.46, 0.30, 0.22, 0.14, 0.07].map(r => r * size / 2)

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ opacity }}
      className={className}
      aria-hidden="true"
    >
      {radii.map((r, i) => (
        <circle
          key={r}
          cx={cx}
          cy={cx}
          r={r}
          fill="none"
          stroke={i > 4 ? '#3A7878' : i > 2 ? '#1A3A5A' : '#0C1828'}
          strokeWidth={i > 5 ? 1.5 : 0.5}
        />
      ))}
      <circle cx={cx} cy={cx} r={size * 0.025} fill="#3A7878" opacity={0.5} />
      <line x1={cx} y1={0} x2={cx} y2={cx * 0.88} stroke="#0C1828" strokeWidth={0.5} />
      <line x1={cx} y1={cx * 1.12} x2={cx} y2={size} stroke="#0C1828" strokeWidth={0.5} />
      <line x1={0} y1={cx} x2={cx * 0.88} y2={cx} stroke="#0C1828" strokeWidth={0.5} />
      <line x1={cx * 1.12} y1={cx} x2={size} y2={cx} stroke="#0C1828" strokeWidth={0.5} />
    </svg>
  )
}
