/* eslint-disable */
import React from 'react'
export const ArrowForwardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' {...props}>
    <mask
      id='ArrowForwardIcon'
      mask-type='alpha'
      maskUnits='userSpaceOnUse'
      x={4}
      y={4}
      width={16}
      height={16}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.5858 5.41425L12 4L20 12L12 20L10.5858 18.5858L16.1837 13H4V11H16.1837L10.5858 5.41425Z'
        fill='white'
      />
    </mask>
    <g mask='url(#ArrowForwardIcon)'>
      <rect x={-28} y={-28} width={80} height={80} fill={props.color || 'rgb(153, 153, 153)'} />
    </g>
  </svg>
)
