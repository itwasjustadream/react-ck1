function Header({ cartItems, onCartClick }) {
  return (
    <header className="header">
      <div className="logo">Интернет-магазин</div>
      <button className="cart-button" onClick={onCartClick}>
        Корзина ({cartItems})
      </button>
    </header>
  );
}

export default Header;