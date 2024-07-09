import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../data/Product";
import styles from "./Product.module.css";
import { addToCart, removeItem } from "../features/cartSlice";
const products = productList;

function Product() {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  function handleAddItem(item) {
    if (cart.find((cartItem) => cartItem.id === item.id)) {
      dispatch(removeItem(item));
    } else {
      dispatch(addToCart(item));
    }
  }

  return (
    <ul className={styles.productList}>
      {products.map((item) => {
        return (
          <li className={styles.productItem} key={item.id}>
            <div className={styles.productImg}>
              <img src={`/${item.productName}.png`} alt="" />
            </div>
            <div className={styles.productDetails}>
              <div className={styles.productName}>
                <span>{item.productName}</span>
                <span>${item.price}</span>
              </div>
              <button
                className={styles.addProduct}
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                {!cart.find((cartItem) => cartItem.id === item.id) ? (
                  <img src="/add-to-cart.svg" alt="#" />
                ) : (
                  <img src="/inCart.svg" alt="#" />
                )}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Product;
