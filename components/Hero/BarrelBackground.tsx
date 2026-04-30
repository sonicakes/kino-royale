import styles from './WaterBackground.module.css'

const VP_X = 1220        // vanishing point — off the right edge
const VP_Y = 350         // vertical centre
const START_X = 460      // mouth of the tunnel (leftmost ring)
const MAX_RY = 285       // vertical radius at the mouth
const MAX_RX = 13        // horizontal squash at the mouth (keeps rings thin/vertical)

const RING_X = [460, 555, 640, 715, 782, 842, 895, 942, 983, 1018, 1050, 1078, 1102]

const scale = (x: number) => (VP_X - x) / (VP_X - START_X)

const rings = RING_X.map((x, i) => ({
  x,
  ry: MAX_RY * scale(x),
  rx: MAX_RX * scale(x),
  index: i,
}))

const ringColor = (i: number) => {
  const t = i / (RING_X.length - 1) // 0 = mouth, 1 = deep
  if (t < 0.3) return '#1A4A8A'     // cobalt — outer/mouth
  if (t < 0.6) return '#2860B0'     // cobalt-mid
  if (t < 0.8) return '#4A8AD4'     // cobalt-glow
  return '#7DD4D0'                  // teal — deep inside
}

const ringOpacity = (i: number) => {
  const t = i / (RING_X.length - 1)
  return 0.25 + t * 0.65            // fades in as tunnel deepens
}

export function BarrelBackground() {
  const mouthTop    = VP_Y - MAX_RY
  const mouthBottom = VP_Y + MAX_RY

  return (
    <div className={styles.root} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tunnel walls — top and bottom edges converging to vanishing point */}
        <line
          x1={START_X} y1={mouthTop}
          x2={VP_X}    y2={VP_Y}
          stroke="#2860B0" strokeWidth={0.75} opacity={0.5}
        />
        <line
          x1={START_X} y1={mouthBottom}
          x2={VP_X}    y2={VP_Y}
          stroke="#2860B0" strokeWidth={0.75} opacity={0.5}
        />

        {/* Tunnel rings — vertical ellipses receding into distance */}
        {rings.map(({ x, rx, ry, index }) => (
          <ellipse
            key={x}
            cx={x}
            cy={VP_Y}
            rx={rx}
            ry={ry}
            fill="none"
            stroke={ringColor(index)}
            strokeWidth={index < 4 ? 0.5 : index < 8 ? 0.75 : 1}
            opacity={ringOpacity(index)}
          />
        ))}

        {/* Crosshair — horizontal centre line through the tunnel */}
        <line
          x1={START_X} y1={VP_Y}
          x2={VP_X}    y2={VP_Y}
          stroke="#4A8AD4" strokeWidth={0.4} opacity={0.3}
        />

        {/* Vanishing point dot */}
        <circle cx={VP_X} cy={VP_Y} r={3} fill="#7DD4D0" opacity={0.6} />
      </svg>
    </div>
  )
}
