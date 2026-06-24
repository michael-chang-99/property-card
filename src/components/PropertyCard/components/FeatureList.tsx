import styles from '../PropertyCard.module.css';

interface Props {
  features: string[] | null;
  maxItems?: number;
}

export const FeatureList = ({ features, maxItems = 3 }: Props) => {
  if (!features?.length) return null;
  return (
    <ul className={styles.featureList}>
      {features.slice(0, maxItems).map(f => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  );
};
