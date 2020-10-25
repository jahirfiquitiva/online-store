import styles from './single-brand.module.css';

const SingleBrand = ({ brandName, brandImage }) => {
  return (<a
    href={'#'}
    className={styles.singleBrand}
    style={{
      backgroundImage: `url(${brandImage.url})`
    }}>
    <div className={styles.overlay}>
      <div className={styles.content}>
        <p>{brandName}</p>
      </div>
    </div>
  </a>);
};

export default SingleBrand;
