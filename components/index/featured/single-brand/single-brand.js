import { usePalette } from 'react-palette';
import hexToRGB from '@utils/hexToRgb';
import styles from './single-brand.module.css';

const SingleBrand = ({ brandName, brandImage }) => {
  const { data: colors } = usePalette(brandImage.url);

  return (<a
    href={'#'}
    className={styles.singleBrand}
    style={{
      backgroundImage: `url(${brandImage.url})`
    }}>
    <div
      className={styles.overlay}
      style={{
        backgroundColor: hexToRGB(colors.darkMuted, colors ? 0.6 : 0.24)
      }}>
      <div className={styles.content}>
        <p>{brandName}</p>
      </div>
    </div>
  </a>);
};

export default SingleBrand;
