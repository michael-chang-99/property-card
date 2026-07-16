import { usePropertyCard } from './hooks/usePropertyCard';
import { StatusBadge } from './components/StatusBadge';
import { PhotoGallery } from './components/PhotoGallery';
import { FeatureList } from './components/FeatureList';
import { PriceHistory } from './components/PriceHistory';
import { AgentCard } from './components/AgentCard';
import type { Property } from './PropertyCard.types';
import styles from './PropertyCard.module.css';

export const PropertyCard = ({ property }: { property: Property }) => {
  const { displayPrice, address, bathsDisplay, interiorFeatures } = usePropertyCard(property);
  const { listing, agent, media, status } = property;
  const { details } = listing;

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <PhotoGallery photos={media.photos} />
        <PriceHistory entries={listing.priceHistory} />
      </div>

      <div className={styles.info}>
        <div>
          <p className={styles.price}>{displayPrice}</p>
          <StatusBadge status={status} />
        </div>

        <div>
          <p className={styles.addrLine1}>{address.line1}</p>
          <p className={styles.addrLine2}>{address.line2}</p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.stats}>
          <span>🛏 {details.beds} beds</span>
          <span>🚿 {bathsDisplay} baths</span>
          <span>📐 {details.sqft.toLocaleString()} sqft</span>
          <span>🏗 Built {details.yearBuilt}</span>
        </div>

        <hr className={styles.divider} />

        <div>
          <p className={styles.sectionTitle}>Features</p>
          <FeatureList features={interiorFeatures} maxItems={3} />
        </div>

        <hr className={styles.divider} />

        <AgentCard agent={agent} />
      </div>
    </div>
  );
};
