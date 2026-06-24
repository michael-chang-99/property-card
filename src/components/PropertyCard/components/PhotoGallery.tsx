import type { Photo } from '../PropertyCard.types';
import styles from '../PropertyCard.module.css';

export const PhotoGallery = ({ photos }: { photos: Photo[] }) => {
  const primary = photos.find(p => p.isPrimary) ?? photos[0] ?? null;

  return (
    <div className={styles.photoArea}>
      {primary ? (
        <img
          src={primary.url}
          alt={primary.caption ?? 'Property photo'}
          className={styles.photo}
        />
      ) : (
        <div className={styles.photoPlaceholder}>No photo available</div>
      )}
      {photos.length > 0 && (
        <span className={styles.photoCount}>📷 {photos.length}</span>
      )}
    </div>
  );
};
