import { formatCurrency } from '../utils/formatCurrency';
import { formatAddress } from '../utils/formatAddress';
import { formatBaths } from '../utils/formatBaths';
import { getStatusConfig } from '../utils/getStatusConfig';
import type { Property } from '../PropertyCard.types';

export interface UsePropertyCardResult {
  // Status
  statusLabel: string;
  statusColor: string;

  // Price
  formattedPrice: string;

  // Address
  addressLine1: string;
  addressLine2: string;

  // Details
  beds: number;
  baths: string;
  sqft: string;
  yearBuilt: number;

  // Features — show first 3 interior features only
  interiorFeatures: string[];

  // Photos
  primaryPhoto: string | null;
  photoCount: number;

  // Price history
  priceHistory: Property['listing']['priceHistory'];

  // Agent
  agentName: string;
  agentPhoto: string | null;
  agentInitials: string;
  agentPhone: string;
  agentEmail: string;
  officeName: string;
}

export const usePropertyCard = (property: Property): UsePropertyCardResult => {
  const { listing, agent, media, status } = property;

  const { label: statusLabel, color: statusColor } = getStatusConfig(status);
  const formattedPrice = formatCurrency(listing.price);
  const { line1: addressLine1, line2: addressLine2 } = formatAddress(listing.address);
  const baths = formatBaths(listing.details.baths);
  const sqft = listing.details.sqft.toLocaleString();
  const interiorFeatures = listing.details.features.interior?.slice(0, 3) ?? [];

  const primaryPhoto = (media.photos.find(p => p.isPrimary) ?? media.photos[0] ?? null)?.url ?? null;
  const photoCount = media.photos.length;

  const agentInitials = agent.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase();

  return {
    statusLabel,
    statusColor,
    formattedPrice,
    addressLine1,
    addressLine2,
    beds: listing.details.beds,
    baths,
    sqft,
    yearBuilt: listing.details.yearBuilt,
    interiorFeatures,
    primaryPhoto,
    photoCount,
    priceHistory: listing.priceHistory,
    agentName: agent.name,
    agentPhoto: agent.photo,
    agentInitials,
    agentPhone: agent.contact.phone,
    agentEmail: agent.contact.email,
    officeName: agent.contact.office.name,
  };
};
