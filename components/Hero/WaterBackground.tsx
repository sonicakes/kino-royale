import styles from './WaterBackground.module.css'

export function WaterBackground() {
  return (
    <div className={styles.root} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="wb-blur-outer">
            <feGaussianBlur stdDeviation="24" />
          </filter>
          <filter id="wb-blur-mid">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="wb-blur-core">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Outer cobalt atmospheric wash */}
        <ellipse
          cx="-80" cy="120"
          rx="340" ry="260"
          fill="#1A4A8A"
          opacity="0.52"
          filter="url(#wb-blur-outer)"
        />

        {/* Mid cobalt bloom */}
        <ellipse
          cx="-100" cy="100"
          rx="200" ry="160"
          fill="#2860B0"
          opacity="0.40"
          filter="url(#wb-blur-mid)"
        />

        {/* Bright light source core */}
        <ellipse
          cx="-110" cy="80"
          rx="90" ry="70"
          fill="#4A8AD4"
          opacity="0.38"
          filter="url(#wb-blur-core)"
        />

        {/* Descending light rays */}
        <line x1="-80" y1="0" x2="-160" y2="700" stroke="#2860B0" strokeWidth="80" opacity="0.06" />
        <line x1="-60" y1="0" x2="100" y2="700" stroke="#2860B0" strokeWidth="60" opacity="0.05" />
        <line x1="-100" y1="0" x2="360" y2="700" stroke="#1A4A8A" strokeWidth="40" opacity="0.04" />
        <line x1="-40" y1="0" x2="560" y2="700" stroke="#1A4A8A" strokeWidth="25" opacity="0.03" />

        {/* Surface ripple lines */}
        <ellipse cx="-80" cy="30" rx="180" ry="12" fill="none" stroke="#4A8AD4" strokeWidth="0.5" opacity="0.25" />
        <ellipse cx="-80" cy="55" rx="260" ry="18" fill="none" stroke="#2860B0" strokeWidth="0.5" opacity="0.18" />
        <ellipse cx="-80" cy="80" rx="350" ry="24" fill="none" stroke="#1A4A8A" strokeWidth="0.5" opacity="0.12" />

        {/* Rising bubbles */}
        <circle cx="160" cy="500" r="3" fill="none" stroke="#2860B0" strokeWidth="0.5" opacity="0.3" />
        <circle cx="280" cy="420" r="2" fill="none" stroke="#2860B0" strokeWidth="0.5" opacity="0.2" />
        <circle cx="120" cy="380" r="4" fill="none" stroke="#1A4A8A" strokeWidth="0.5" opacity="0.25" />
        <circle cx="340" cy="560" r="2.5" fill="none" stroke="#2860B0" strokeWidth="0.5" opacity="0.2" />
        <circle cx="90" cy="600" r="3.5" fill="none" stroke="#1A4A8A" strokeWidth="0.5" opacity="0.18" />
        <circle cx="420" cy="480" r="2" fill="none" stroke="#1A4A8A" strokeWidth="0.5" opacity="0.15" />
        <circle cx="200" cy="640" r="5" fill="none" stroke="#1A4A8A" strokeWidth="0.5" opacity="0.12" />
        <circle cx="500" cy="520" r="1.5" fill="none" stroke="#0C1828" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </div>
  )
}
