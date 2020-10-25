import styles from './featured.module.css';
import SectionTitle from '@components/global/section-title/section-title';
import FeaturedProduct
  from '@components/index/featured/featured-product/featured-product';
import SingleBrand
  from '@components/index/featured/single-brand/single-brand';

const Featured = ({ product, brands }) => {
  return (<div className={styles.featured}>
    <div className={styles.productTitle}>
      <SectionTitle title={'Producto Destacado'}/>
    </div>
    <div className={styles.brandsTitle}>
      <SectionTitle title={'Marcas Destacadas'}/>
    </div>
    <div className={styles.featuredProduct}>
      <FeaturedProduct product={product}/>
    </div>
    {(brands.slice(0, 4)).map((it, i) => {
      return (
        <SingleBrand key={i} brandName={it.brandName}
                     brandImage={it.brandImage}/>
      );
    })}
  </div>);
};

export default Featured;
