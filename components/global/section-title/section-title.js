import styles from './section-title.module.css';

const SectionTitle = ({ title }) => {
  return (<h5 className={styles.sectionTitle}>
    {title}
  </h5>);
};

export default SectionTitle;
