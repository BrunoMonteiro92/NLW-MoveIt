import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/2872959?s=460&u=9e7dec0773c7bafd786a5d568df3a51a08cb8874&v=4" alt="Bruno Monteiro" />
      <div>
        <strong>Bruno Monteiro</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
          </p>
      </div>
    </div>
  );
}