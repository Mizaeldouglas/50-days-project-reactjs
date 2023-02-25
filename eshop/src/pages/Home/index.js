import React from "react";
import "./styles.css";
import { Product } from "../../components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="12345678"
            title="Acer Nitro 5 AN515-58-527S Gaming Laptop | Intel Core i5-12500H |
              NVIDIA GeForce RTX 3060 Laptop GPU | 15.6 FHD 144Hz IPS Display"
            price={6191.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/711FqLYogNL._AC_SX679_.jpg"
          />
          <Product
            id="12345678"
            title="PC Gamer OnGaming® Ryzen 5 5600G, Radeon™ Graphics Vega 7, 16GB Ram, 
              SSD 240GB, Gabinete c/ 4x Fans RGB"
            price={6099.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Cc5rM5LTL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1235671"
            title="Lenovo Notebook ideapad Gaming 3 R7-5800H 8GB 256GB SSD PCIe GTX 1650 4GB 15.6
               FHD W11 82MJ0001BR, preto"
            price={1259.9}
            rating={3}
            image="https://m.media-amazon.com/images/I/618Tz4nOPaL._AC_SY300_SX300_.jpg"
          />
          <Product
            id="12345672"
            title="Echo Dot (4ª Geração): Smart Speaker com Alexa | Música, informação e Casa Inteligente - Cor Preta"
            price={550.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/618tJ9j7+WL._AC_SX569_.jpg"
          />
          <Product
            id="12345673"
            title="Fire TV Stick 4K com Controle Remoto por Voz com Alexa (inclui comandos de TV) | Dolby Vision"
            price={299.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/61TdVIIIUGL._AC_SX425_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12345674"
            title="Smart TV LED 43 FULL HD Samsung UN43T5300AGXZD - Wifi, HDMI"
            price={1199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71CArV-n7oL._AC_SX300_SY300_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
