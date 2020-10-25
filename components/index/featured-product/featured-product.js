import styles from './featured-product.module.css';

const FeaturedProduct = ({ product }) => {
  const { productName: name, productPrice: price, brand, mainImage } = product;


  return (<div className={styles.featuredProduct}>
    <h5>Producto Destacado</h5>
    <div className={styles.productCard} style={{
      backgroundImage: `url('${mainImage.url}')`
    }}>
      <p>{name}</p>
      <p>{brand.brandName}</p>
      <p>{price}</p>
    </div>
  </div>);
};

export default FeaturedProduct;
