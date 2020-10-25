import SearchBar from '@components/global/search-bar/search-bar';
import CartButton from '@components/global/cart-button/cart-button';
import styles from './toolbar.module.css';

const Toolbar = () => {
  return (<div className={styles.toolbar}>
    <div className={'max-width-wrapper'}>
      <div className={styles.toolbarElements}>
        <div className={styles.toolbarTitle}>
          <a href={'/'}>Tienda Virtual</a>
        </div>
        <div className={styles.toolbarSearch}>
          <SearchBar/>
        </div>
        <div className={styles.toolbarCartButton}>
          <CartButton/>
        </div>
      </div>
    </div>
  </div>);
};

export default Toolbar;
