import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

import styles from './search-bar.module.css';

const SearchBar = () => {
  return (<div className={styles.searchBar}>
    <input type={'text'} placeholder={'Buscar producto…'}/>
    <button>
      <Icon path={mdiMagnify} size={1}/>
    </button>
  </div>);
};

export default SearchBar;
