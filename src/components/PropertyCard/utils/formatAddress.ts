import type { Address } from '../PropertyCard.types';

export const formatAddress = (address: Address): { line1: string; line2: string } => ({
  line1: [address.street, address.unit].filter(Boolean).join(', '),
  line2: `${address.city}, ${address.state} ${address.zip}`,
});
