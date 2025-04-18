import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import store from './data/store';
import './styles/app.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(store);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="app">
      <Header cartItems={cart.length} onCartClick={() => setIsCartOpen(true)} />
      
      <div className="container">
        <Filter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        {isLoading ? (
          <div className="loading">Загрузка товаров...</div>
        ) : (
          <ProductList 
            products={filteredProducts} 
            onAddToCart={addToCart} 
          />
        )}
      </div>
      
      {isCartOpen && (
        <Cart 
          cart={cart}
          total={total}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      )}
    </div>
  );
}

export default App;