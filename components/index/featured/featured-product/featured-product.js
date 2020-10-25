import { usePalette } from 'react-palette';
import hexToRGB from '@utils/hexToRgb';
import styles from './featured-product.module.css';

const FeaturedProduct = ({ product }) => {
  const { productName: name, productPrice: price, brand, mainImage } = product;
  const { data: colors } = usePalette(mainImage.url);

  return (<div
    className={styles.featuredProduct}
    style={{
      backgroundImage: `url('${mainImage.url}')`
    }}>
    <div
      className={styles.overlay}
      style={{
        '--gradient-first-color': hexToRGB(colors.muted, 1),
        '--gradient-second-color': hexToRGB(colors.muted, .5),
        '--gradient-third-color': hexToRGB(colors.muted, 0)
      }}>
      <p>{name}</p>
      <p>{brand.brandName}</p>
      <p>{price}</p>
    </div>
  </div>);
};

export default FeaturedProduct;
