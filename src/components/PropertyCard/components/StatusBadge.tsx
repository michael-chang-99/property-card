import type { Status } from '../PropertyCard.types';
import { getStatusConfig } from '../utils/getStatusConfig';
import styles from '../PropertyCard.module.css';

export const StatusBadge = ({ status }: { status: Status }) => {
  const { label, color } = getStatusConfig(status);
  return (
    <div className={styles.statusBadge}>
      <span className={styles.statusDot} style={{ background: color }} />
      <span style={{ color }}>{label}</span>
    </div>
  );
};
