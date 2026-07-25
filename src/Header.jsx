import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 40px',
      background: '#1a3a2a',
      boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <h2 style={{ color: '#c8a951', margin: 0, fontSize: '22px', letterSpacing: '1px' }}>
        🍽️ RecipeApp
      </h2>
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#a8c5a0', fontSize: '15px' }}>Home</Link>
        <Link to="/recipes" style={{ textDecoration: 'none', color: '#a8c5a0', fontSize: '15px' }}>Recipes</Link>
        <Link to="/wishlist" style={{ textDecoration: 'none', color: '#a8c5a0', fontSize: '15px' }}>❤️ Wishlist</Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: '#a8c5a0', fontSize: '15px' }}>🛒 Cart</Link>
        <Link to="/signup" style={{ textDecoration: 'none', color: 'white', background: '#c8a951', padding: '8px 18px', borderRadius: '20px', fontSize: '14px' }}>SignUp</Link>
        <Link to="/login" style={{ textDecoration: 'none', color: '#c8a951', border: '2px solid #c8a951', padding: '8px 18px', borderRadius: '20px', fontSize: '14px' }}>Login</Link>
      </div>
    </nav>
  );
}

export default Header;