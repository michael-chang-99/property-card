import type { Status } from '../PropertyCard.types';

export interface StatusConfig {
  label: string;
  color: string;
}

const STATUS_MAP: Record<Status, StatusConfig> = {
  active:  { label: 'Active',  color: 'var(--status-active)'  },
  pending: { label: 'Pending', color: 'var(--status-pending)' },
  sold:    { label: 'Sold',    color: 'var(--status-sold)'    },
};

export const getStatusConfig = (status: Status): StatusConfig =>
  STATUS_MAP[status] ?? STATUS_MAP.active;
