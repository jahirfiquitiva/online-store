import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import styles from './cart-button.module.css';

const CartButton = () => {
  return (<button className={styles.cartButton}>
    <Icon path={mdiCartOutline} size={1.1}/>
  </button>);
};

export default CartButton;
