interface Props {
  size?: number
}

export function CrownIcon({ size = 14 }: Props) {
  return (
    <svg
      width={size}
      height={size * 0.67}
      viewBox="-120 -80 240 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <g transform="skewX(-8)">
        <path d="M-90,60 L-90,-10 L-80,-12 L-48,18 L0,-62 L48,18 L80,-12 L90,-10 L90,60 Z" fill="#c1272d"/>
        <rect x="-100" y="54" width="24" height="8" fill="#c1272d"/>
        <rect x="76" y="54" width="24" height="8" fill="#c1272d"/>
      </g>
    </svg>
  )
}
