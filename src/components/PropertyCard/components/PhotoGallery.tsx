import styles from '../PropertyCard.module.css';

interface PhotoGalleryProps {
  primaryPhoto: string | null;
  photoCount: number;
}

export const PhotoGallery = ({ primaryPhoto, photoCount }: PhotoGalleryProps) => {
  return (
    <div className={styles.photoArea}>
      {primaryPhoto ? (
        <img src={primaryPhoto} alt="Property photo" className={styles.photo} />
      ) : (
        <div className={styles.photoPlaceholder}>No photo available</div>
      )}
      {photoCount > 0 && (
        <span className={styles.photoCount}>📷 {photoCount}</span>
      )}
    </div>
  );
};
