import styles from '../PropertyCard.module.css';

interface AgentCardProps {
  agentName: string;
  agentPhoto: string | null;
  agentInitials: string;
  agentPhone: string;
  officeName: string;
}

export const AgentCard = ({ agentName, agentPhoto, agentInitials, agentPhone, officeName }: AgentCardProps) => {
  return (
    <div className={styles.agentCard}>
      {agentPhoto ? (
        <img src={agentPhoto} alt={agentName} className={styles.agentPhoto} />
      ) : (
        <div className={styles.agentInitials}>{agentInitials}</div>
      )}
      <div>
        <p className={styles.agentName}>{agentName}</p>
        <p className={styles.agentSub}>{agentPhone}</p>
        <p className={styles.agentSub}>{officeName}</p>
      </div>
    </div>
  );
};
