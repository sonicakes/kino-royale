export function DiamondDivider() {
  return (
    <div className="flex items-center gap-0 my-12" aria-hidden="true">
      <div className="flex-1 h-px bg-navy-mid" />
      <div
        style={{
          width: 6,
          height: 6,
          backgroundColor: 'var(--color-cobalt-glow)',
          opacity: 0.5,
          transform: 'rotate(45deg)',
          margin: '0 12px',
          flexShrink: 0,
        }}
      />
      <div className="flex-1 h-px bg-navy-mid" />
    </div>
  )
}
