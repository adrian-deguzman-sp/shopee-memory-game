import type { ComponentType, ReactNode } from 'react';
import type { CardFaceId } from '../../types/game';

export interface IconProps {
  size?: number | string;
  className?: string;
}

const O = '#EE4D2D';
const OL = '#FF8A5B';
const OD = '#C93A1C';
const Y = '#FFC83D';
const YD = '#E39A00';
const W = '#FFFFFF';
const PEACH = '#FFD9C9';

function Svg({ size = '100%', className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
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

export function CoinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="32" cy="32" r="26" fill={Y} stroke={YD} strokeWidth="3" />
      <circle cx="32" cy="32" r="19" fill="none" stroke={YD} strokeWidth="2.5" />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontSize="26"
        fontWeight="900"
        fill={YD}
        fontFamily="Arial, sans-serif"
      >
        S
      </text>
    </Svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M17 20h37l-7 22H21z" fill={PEACH} />
      <path
        d="M6 12h8l7 30h26l7-22H17"
        fill="none"
        stroke={O}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="52" r="5" fill={O} />
      <circle cx="43" cy="52" r="5" fill={O} />
    </Svg>
  );
}

export function BagIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M24 24v-6a8 8 0 0 1 16 0v6"
        fill="none"
        stroke={OD}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path d="M12 24h40l3 31a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3z" fill={O} />
      <circle cx="32" cy="40" r="10" fill={W} />
      <text
        x="32"
        y="46"
        textAnchor="middle"
        fontSize="16"
        fontWeight="900"
        fill={O}
        fontFamily="Arial, sans-serif"
      >
        S
      </text>
    </Svg>
  );
}

export function ParcelIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="8" y="20" width="48" height="36" rx="4" fill={O} />
      <rect x="8" y="20" width="48" height="10" rx="4" fill={OD} />
      <rect x="26" y="20" width="12" height="36" fill={Y} />
      <rect x="26" y="20" width="12" height="10" fill={YD} />
      <path d="M43 40h7M43 46h7" stroke={W} strokeWidth="3" strokeLinecap="round" />
    </Svg>
  );
}

export function VoucherIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 16h52v12a5 5 0 0 0 0 10v10H6V38a5 5 0 0 0 0-10z" fill={O} />
      <path d="M24 21v22" stroke={W} strokeWidth="2.5" strokeDasharray="3 4" strokeLinecap="round" />
      <text
        x="42"
        y="39"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fill={W}
        fontFamily="Arial, sans-serif"
      >
        %
      </text>
    </Svg>
  );
}

export function FlashSaleIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <polygon
        points="37,5 13,36 28,36 22,59 50,25 34,25"
        fill={Y}
        stroke={O}
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="4" y="18" width="34" height="26" rx="3" fill={O} />
      <path d="M38 26h12l9 10v8H38z" fill={OL} />
      <path d="M43 30h6l5 6H43z" fill={W} />
      <path d="M10 26h14M10 33h10" stroke={W} strokeWidth="3" strokeLinecap="round" />
      <circle cx="16" cy="47" r="6" fill="#333" />
      <circle cx="16" cy="47" r="2.5" fill={W} />
      <circle cx="46" cy="47" r="6" fill="#333" />
      <circle cx="46" cy="47" r="2.5" fill={W} />
    </Svg>
  );
}

export function GiftIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="10" y="28" width="44" height="28" rx="3" fill={O} />
      <rect x="6" y="20" width="52" height="12" rx="3" fill={OL} />
      <rect x="28" y="20" width="8" height="36" fill={Y} />
      <path
        d="M32 20c-4-12-16-10-13-4 2 4 9 4 13 4zM32 20c4-12 16-10 13-4-2 4-9 4-13 4z"
        fill="none"
        stroke={Y}
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M32 56C10 40 6 26 14 18c7-7 15-3 18 4 3-7 11-11 18-4 8 8 4 22-18 38z"
        fill={O}
      />
      <path d="M16 24c2-4 6-5 9-3" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
    </Svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <polygon
        points="32,6 40,24 59,25 44,38 49,57 32,47 15,57 20,38 5,25 24,24"
        fill={Y}
        stroke={YD}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function StorefrontIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="10" y="28" width="44" height="28" fill={PEACH} />
      <rect x="26" y="38" width="12" height="18" fill={O} />
      <rect x="14" y="36" width="8" height="8" fill={OL} />
      <rect x="42" y="36" width="8" height="8" fill={OL} />
      <path d="M8 10h48l5 16H3z" fill={O} />
      <path
        d="M3 26a7.25 7.25 0 0 0 14.5 0a7.25 7.25 0 0 0 14.5 0a7.25 7.25 0 0 0 14.5 0a7.25 7.25 0 0 0 14.5 0z"
        fill={OD}
      />
      <path d="M21 10l-2 16M32 10v16M43 10l2 16" stroke={W} strokeWidth="3" />
    </Svg>
  );
}

export function PriceTagIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M10 10h20l24 24-20 20-24-24z" fill={O} strokeLinejoin="round" stroke={O} strokeWidth="3" />
      <circle cx="21" cy="21" r="3.5" fill={W} />
      <text
        x="35"
        y="40"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fill={W}
        fontFamily="Arial, sans-serif"
      >
        %
      </text>
    </Svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="14" y="8" width="34" height="18" rx="3" fill={Y} transform="rotate(-8 30 20)" />
      <rect x="6" y="18" width="52" height="38" rx="7" fill={O} />
      <rect x="6" y="26" width="52" height="4" fill={OD} />
      <rect x="38" y="35" width="20" height="14" rx="5" fill={OL} />
      <circle cx="46" cy="42" r="3" fill={W} />
    </Svg>
  );
}

export const CARD_ICONS: Record<CardFaceId, ComponentType<IconProps>> = {
  coin: CoinIcon,
  cart: CartIcon,
  bag: BagIcon,
  parcel: ParcelIcon,
  voucher: VoucherIcon,
  flashSale: FlashSaleIcon,
  truck: TruckIcon,
  gift: GiftIcon,
  heart: HeartIcon,
  star: StarIcon,
  storefront: StorefrontIcon,
  priceTag: PriceTagIcon,
  wallet: WalletIcon,
};
