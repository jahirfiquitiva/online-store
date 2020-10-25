import SearchBar from '@components/global/search-bar/search-bar';
import CartButton from '@components/global/cart-button/cart-button';
import styles from './toolbar.module.css';

const Toolbar = () => {
  return (<div className={styles.toolbar}>
    <div className={'max-width-wrapper'}>
      <div className={styles.toolbarElements}>
        <p className={styles.toolbarTitle}>Tienda Virtual</p>
        <SearchBar/>
        <CartButton/>
      </div>
    </div>
  </div>);
};

export default Toolbar;
