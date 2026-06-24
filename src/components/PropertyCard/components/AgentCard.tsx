import type { Agent } from '../PropertyCard.types';
import styles from '../PropertyCard.module.css';

export const AgentCard = ({ agent }: { agent: Agent }) => {
  const initials = agent.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase();

  return (
    <div className={styles.agentCard}>
      {agent.photo ? (
        <img src={agent.photo} alt={agent.name} className={styles.agentPhoto} />
      ) : (
        <div className={styles.agentInitials}>{initials}</div>
      )}
      <div>
        <p className={styles.agentName}>{agent.name}</p>
        <p className={styles.agentSub}>{agent.contact.phone}</p>
        <p className={styles.agentSub}>{agent.contact.office.name}</p>
      </div>
    </div>
  );
};
