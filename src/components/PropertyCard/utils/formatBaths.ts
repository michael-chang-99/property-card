import type { Baths } from '../PropertyCard.types';

export const formatBaths = ({ full, half }: Baths): string => {
  const total = full + (half > 0 ? 0.5 : 0);
  return `${total}`;
};
