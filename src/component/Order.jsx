import { useSelector } from "react-redux";
import styles from "./Order.module.css";

function Order() {
  const { subTotalPrice, delivery, totalPrice } = useSelector(
    (store) => store.cart
  );
  return (
    <div className={styles.order}>
      <h3>Cart Summary</h3>
      <div className={styles.subTotal}>
        <span>Sub-Total</span>
        <span>
          {/* <span>45</span> */}$ <span>{subTotalPrice}</span>
        </span>
      </div>
      <div className={styles.subTotal}>
        <span>Delivery</span>
        <span>
          {/* <span>45</span> */}$ <span>{delivery}</span>
        </span>
      </div>
      <div className={styles.total}>
        <span>Total</span>
        <span>
          <span className={styles.totalNum}>${totalPrice}</span>
        </span>
      </div>
    </div>
  );
}

export default Order;
