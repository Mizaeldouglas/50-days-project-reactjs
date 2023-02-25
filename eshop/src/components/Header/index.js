import "./styles.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";

export function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <StorefrontIcon fontSize="large" />
        <h2 className="header__logoTitle">eSHOP</h2>
      </div>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="nav__item ">
          <span className="van__itemLineOne">Hello Mizael</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>

        <div className="nav__item ">
          <span className="van__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop In</span>
        </div>

        <div className="nav__item ">
          <ShoppingBasketIcon className="nav__itemBasket" />
          <span className="nav__itemLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
