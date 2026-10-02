import type { CardFaceId } from '../types/game';

export const CARD_FACE_IDS: readonly CardFaceId[] = [
  'coin',
  'cart',
  'bag',
  'parcel',
  'voucher',
  'flashSale',
  'truck',
  'gift',
  'heart',
  'star',
  'storefront',
  'priceTag',
  'wallet',
];

export const CARD_LABELS: Record<CardFaceId, string> = {
  coin: 'Coin',
  cart: 'Shopping cart',
  bag: 'Shopping bag',
  parcel: 'Parcel',
  voucher: 'Voucher',
  flashSale: 'Flash sale',
  truck: 'Free shipping truck',
  gift: 'Gift box',
  heart: 'Wishlist heart',
  star: 'Rating star',
  storefront: 'Storefront',
  priceTag: 'Discount tag',
  wallet: 'Wallet',
};
