import styles from '../PropertyCard.module.css';

interface FeatureListProps {
  features: string[];
}

export const FeatureList = ({ features }: FeatureListProps) => {
  if (!features.length) return null;
  return (
    <ul className={styles.featureList}>
      {features.map(f => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  );
};
