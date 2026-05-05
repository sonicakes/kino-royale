interface Props {
  size?: number
}

export function CrownIcon({ size = 14 }: Props) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      {/* Crown body */}
      <path
        d="M0 14 L0 7 L5 10 L10 1 L15 10 L20 7 L20 14 Z"
        fill="#c1272d"
      />
      {/* Tip orbs */}
      <circle cx="0"  cy="7"  r="1.8" fill="#c1272d" />
      <circle cx="10" cy="1"  r="1.8" fill="#c1272d" />
      <circle cx="20" cy="7"  r="1.8" fill="#c1272d" />
    </svg>
  )
}
