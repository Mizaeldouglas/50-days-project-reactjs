import "./styles.css";

export function CheckoutProduct({ id, title, image, price, rating }) {
  const removeFromBasket = () => {
    return console.log("ola");
  };
  return (
    <div className="checkoutProduct">
      <img
        src="https://m.media-amazon.com/images/I/71Cc5rM5LTL._AC_SX679_.jpg"
        alt=""
        className="checkoutProduct__image"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          PC Gamer OnGaming® Ryzen 5 5600G, Radeon™ Graphics Vega 7, 16GB Ram,
          SSD 240GB, Gabinete c/ 4x Fans RGB
        </p>
        <p className="checkoutProduct__price">
          <small>R$ </small>
          <small>6099.96</small>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );

  //   <div className="checkoutProduct">
  //     <img
  //       src={image}
  //       alt=""
  //       className="checkoutProduct__image"
  //     />

  //     <div className="checkoutProduct__info">
  //       <p className="checkoutProduct__title">{title}</p>
  //       <p className="checkoutProduct__price">
  //         <small>$</small>
  //         <strong>{price}</strong>
  //       </p>
  //       <div className="checkoutProduct__rating">
  //         {Array(rating)
  //           .fill()
  //           .map((_, i) => (
  //             <p>⭐</p>
  //           ))}
  //       </div>
  //       <button onClick={removeFromBasket}>Remove from Basket</button>
  //     </div>
  //   </div>
  // );
}
