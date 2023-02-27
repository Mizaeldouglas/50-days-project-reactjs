import { CheckoutProduct } from "../../components/CheckoutProduct";
import { SubTotal } from "../../components/SubTotal";
import "./styles.css";

export function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Product"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <CheckoutProduct />
        </div>
      </div>

      <div className="checkout__left">
        <SubTotal />
      </div>
    </div>
  );
}
