import type { Property } from './PropertyCard.types';
import { AgentCard } from './components/AgentCard';
import { FeatureList } from './components/FeatureList';
import { PhotoGallery } from './components/PhotoGallery';
import { PriceHistory } from './components/PriceHistory';
import { StatusBadge } from './components/StatusBadge';
import { usePropertyCard } from './hooks/usePropertyCard';
import styles from './PropertyCard.module.css';

export const PropertyCard = ({ property }: { property: Property }) => {
  const {
    statusLabel,
    statusColor,
    formattedPrice,
    addressLine1,
    addressLine2,
    beds,
    baths,
    sqft,
    yearBuilt,
    interiorFeatures,
    primaryPhoto,
    photoCount,
    priceHistory,
    agentName,
    agentPhoto,
    agentInitials,
    agentPhone,
    officeName,
  } = usePropertyCard(property);

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <PhotoGallery primaryPhoto={primaryPhoto} photoCount={photoCount} />
        <PriceHistory entries={priceHistory} />
      </div>

      <div className={styles.info}>
        <div>
          <p className={styles.price}>{formattedPrice}</p>
          <StatusBadge label={statusLabel} color={statusColor} />
        </div>

        <div>
          <p className={styles.addrLine1}>{addressLine1}</p>
          <p className={styles.addrLine2}>{addressLine2}</p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.stats}>
          <span>🛏 {beds} beds</span>
          <span>🚿 {baths} baths</span>
          <span>📐 {sqft} sqft</span>
          <span>🏗 Built {yearBuilt}</span>
        </div>

        <hr className={styles.divider} />

        <div>
          <p className={styles.sectionTitle}>Features</p>
          <FeatureList features={interiorFeatures} />
        </div>

        <hr className={styles.divider} />

        <AgentCard
          agentName={agentName}
          agentPhoto={agentPhoto}
          agentInitials={agentInitials}
          agentPhone={agentPhone}
          officeName={officeName}
        />
      </div>
    </div>
  );
};
