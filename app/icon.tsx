import { ImageResponse } from 'next/og'

export const size = { width: 512, height: 512 }
export const contentType = 'image/png'

export default function Icon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-120 -80 240 160"><g transform="skewX(-8)"><path d="M-90,60 L-90,-10 L-80,-12 L-48,18 L0,-62 L48,18 L80,-12 L90,-10 L90,60 Z" fill="#c1272d"/><rect x="-100" y="54" width="24" height="8" fill="#c1272d"/><rect x="76" y="54" width="24" height="8" fill="#c1272d"/></g></svg>`
  const svgBase64 = Buffer.from(svg).toString('base64')

  return new ImageResponse(
    <div
      style={{
        background: '#020810',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/svg+xml;base64,${svgBase64}`}
        width={340}
        height={227}
        alt=""
      />
    </div>,
    { ...size }
  )
}
