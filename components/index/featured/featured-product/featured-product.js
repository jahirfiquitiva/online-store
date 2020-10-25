import { usePalette } from 'react-palette';
import hexToRGB from '@utils/hexToRgb';
import styles from './featured-product.module.css';
import formatPrice from '@utils/formatPrice';
import Icon from '@mdi/react';
import { mdiCartPlus } from '@mdi/js';

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
        '--gradient-first-color': hexToRGB(colors.vibrant, 1),
        '--gradient-second-color': hexToRGB(colors.vibrant, .5),
        '--gradient-third-color': hexToRGB(colors.vibrant, 0)
      }}>
      <div className={styles.content}>
        <div>
          <h6>{name}</h6>
          <p className={styles.brand}>{brand.brandName}</p>
        </div>
        <p className={styles.price}>{formatPrice(price)}</p>
        <button>
          <Icon path={mdiCartPlus} size={1}/>Add To Cart
        </button>
      </div>
    </div>
  </div>);
};

export default FeaturedProduct;
