import type { PriceHistoryEntry } from '../PropertyCard.types';
import { formatCurrency } from '../utils/formatCurrency';
import styles from '../PropertyCard.module.css';

interface PriceHistoryProps {
  entries: PriceHistoryEntry[];
}

export const PriceHistory = ({ entries }: PriceHistoryProps) => {
  if (!entries.length) return null;
  return (
    <div className={styles.priceHistory}>
      <p className={styles.sectionTitle}>Price History</p>
      {entries.map((entry, i) => (
        <div key={i} className={styles.historyRow}>
          <span>
            {new Date(entry.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className={styles[`event_${entry.event}` as keyof typeof styles]}>
            {entry.event}
          </span>
          <span className={entry.event === 'reduced' ? styles.priceReduced : undefined}>
            {formatCurrency(entry.price)}
          </span>
        </div>
      ))}
    </div>
  );
};
