import styles from '../PropertyCard.module.css';

interface StatusBadgeProps {
  label: string;
  color: string;
}

export const StatusBadge = ({ label, color }: StatusBadgeProps) => {
  return (
    <div className={styles.statusBadge}>
      <span className={styles.statusDot} style={{ background: color }} />
      <span style={{ color }}>{label}</span>
    </div>
  );
};
