import type { ReactNode } from 'react';
import type { IconProps } from './CardIcons';

function UiSvg({ size = 24, className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export function BackIcon(props: IconProps) {
  return (
    <UiSvg {...props}>
      <path d="M15 5l-7 7 7 7" {...stroke} strokeWidth={2.8} />
    </UiSvg>
  );
}

export function HelpIcon(props: IconProps) {
  return (
    <UiSvg {...props}>
      <circle cx="12" cy="12" r="10" {...stroke} strokeWidth={2} />
      <path d="M9.2 9.4a2.9 2.9 0 1 1 4.4 2.5c-.9.6-1.6 1.1-1.6 2.2" {...stroke} strokeWidth={2.2} />
      <circle cx="12" cy="17.3" r="1.2" fill="currentColor" />
    </UiSvg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <UiSvg {...props}>
      <circle cx="12" cy="13.5" r="8" {...stroke} />
      <path d="M12 9v4.8l3 1.8M9.5 2.8h5" {...stroke} />
    </UiSvg>
  );
}

export function MovesIcon(props: IconProps) {
  return (
    <UiSvg {...props}>
      <path d="M4 11V9a3 3 0 0 1 3-3h11l-3-3M20 13v2a3 3 0 0 1-3 3H6l3 3" {...stroke} />
    </UiSvg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <UiSvg {...props}>
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" />
    </UiSvg>
  );
}

export function PauseIcon(props: IconProps) {
  return (
    <UiSvg {...props}>
      <rect x="6" y="5" width="4" height="14" rx="1.5" fill="currentColor" />
      <rect x="14" y="5" width="4" height="14" rx="1.5" fill="currentColor" />
    </UiSvg>
  );
}

export function GamepadIcon(props: IconProps) {
  return (
    <UiSvg {...props}>
      <rect x="1.5" y="6" width="21" height="12.5" rx="6" fill="#EE4D2D" />
      <path d="M7 9.5v5M4.5 12h5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="10.8" r="1.3" fill="#fff" />
      <circle cx="19" cy="13.4" r="1.3" fill="#fff" />
    </UiSvg>
  );
}

export function BulbIcon(props: IconProps) {
  return (
    <UiSvg {...props}>
      <path d="M12 2.5a6.5 6.5 0 0 0-3.6 11.9c.6.4.9 1 .9 1.6V17h5.4v-1c0-.6.3-1.2.9-1.6A6.5 6.5 0 0 0 12 2.5z" fill="#FFC83D" />
      <rect x="9.3" y="18" width="5.4" height="2.2" rx="1" fill="#9a9a9a" />
      <rect x="10.2" y="20.4" width="3.6" height="1.6" rx=".8" fill="#9a9a9a" />
    </UiSvg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <UiSvg {...props}>
      <path d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12 7-1 11-5 12-12z" fill="currentColor" />
    </UiSvg>
  );
}
