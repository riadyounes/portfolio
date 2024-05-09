import { ComponentProps } from 'react'

export function NextLogo(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="180"
      height="180"
      fill="none"
      viewBox="0 0 180 180"
      {...props}
    >
      <mask
        id="mask0_408_139"
        style={{ maskType: 'alpha' }}
        width="180"
        height="180"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <circle cx="90" cy="90" r="90" fill="#000"></circle>
      </mask>
      <g mask="url(#mask0_408_139)">
        <circle
          cx="90"
          cy="90"
          r="87"
          fill="#000"
          stroke="#fff"
          strokeWidth="6"
        ></circle>
        <path
          fill="url(#paint0_linear_408_139)"
          d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
        ></path>
        <path
          fill="url(#paint1_linear_408_139)"
          d="M115 54H127V126H115z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_408_139"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_408_139"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
