import SearchBar from '@components/global/search-bar/search-bar';
import styles from './toolbar.module.css';

const Toolbar = () => {
  return (<div className={styles.toolbar}>
    <div className={'max-width-wrapper'}>
      <div className={styles.toolbarElements}>
        <p className={styles.toolbarTitle}>Tienda Virtual</p>
        <SearchBar/>
        <p>Tienda Virtual</p>
      </div>
    </div>
  </div>);
};

export default Toolbar;
