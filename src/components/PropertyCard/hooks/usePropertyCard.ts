import { formatCurrency } from '../utils/formatCurrency';
import { formatAddress } from '../utils/formatAddress';
import { formatBaths } from '../utils/formatBaths';
import { getStatusConfig } from '../utils/getStatusConfig';
import type { Property } from '../PropertyCard.types';

export const usePropertyCard = (property: Property) => {
  const { listing, agent, media } = property;

  const primaryPhoto =
    media.photos.find(p => p.isPrimary) ?? media.photos[0] ?? null;

  const photoCount = media.photos.length;
  const displayPrice = formatCurrency(listing.price);
  const address = formatAddress(listing.address);
  const bathsDisplay = formatBaths(listing.details.baths);
  const interiorFeatures = listing.details.features.interior?.slice(0, 3) ?? [];
  const statusConfig = getStatusConfig(property.status);
  const agentInitials = agent.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase();

  return {
    primaryPhoto,
    photoCount,
    displayPrice,
    address,
    bathsDisplay,
    interiorFeatures,
    statusConfig,
    agentInitials,
  };
};
