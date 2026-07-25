import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState (
    JSON.parse(localStorage.getItem('cart')) || []
  )
  
  const [ordered, setOrdered] = useState(false)
  const navigate = useNavigate();

  const totalItems = cart.length
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  const placeOrder = () => {
    const loggedIn = JSON.parse(localStorage.getItem('loggedInUser'))
    if (!loggedIn) { alert('Login First!'); navigate('/login'); return }
    const allOrders = JSON.parse(localStorage.getItem('allOrders')) || []
    const newOrder = { userName: loggedIn.name, items: cart, totalItems: cart.length, totalPrice: totalPrice }
    allOrders.push(newOrder)
    localStorage.setItem('allOrders', JSON.stringify(allOrders))
    setOrdered(true)
    alert('Order Placed! ✅')
  }

  return (
    <div style={{ padding: '30px', background: '#0d2818', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <button onClick={() => navigate(-1)} style={{ padding: '8px 20px', background: 'transparent', color: '#c8a951', border: '1px solid #c8a951', borderRadius: '20px', cursor: 'pointer', marginBottom: '20px' }}>← Back</button>
      <h2 style={{ color: '#c8a951', fontSize: '28px', fontWeight: '300', marginBottom: '20px' }}>🛒 My Cart</h2>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p style={{ color: '#a8c5a0', fontSize: '18px' }}>Cart is empty!</p>
          <button onClick={() => navigate('/recipes')} style={{ marginTop: '15px', padding: '10px 25px', background: '#c8a951', color: '#0d2818', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: '700' }}>Browse Recipes</button>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' }}>
            {cart.map((item, index) => (
              <div key={index} style={{ background: '#1a3a2a', borderRadius: '15px', overflow: 'hidden', width: '200px', border: '1px solid #2d5a3d' }}>
                <img src={item.image} alt={item.name} width='100%' height={120} style={{ objectFit: 'cover' }} />
                <div style={{ padding: '12px' }}>
                  <h3 style={{ color: '#c8a951', fontSize: '14px', marginBottom: '5px' }}>{item.name}</h3>
                  <p style={{ color: '#a8c5a0', fontSize: '12px' }}>🍜 {item.cuisine}</p>
                  <p style={{ color: '#a8c5a0', fontSize: '12px' }}>⭐ {item.rating}</p>
                  <p style={{ color: '#c8a951', fontSize: '12px' }}>🔥 {item.price} cal</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#1a3a2a', padding: '20px', borderRadius: '15px', border: '1px solid #2d5a3d', marginBottom: '20px' }}>
            <p style={{ color: '#a8c5a0', fontSize: '16px' }}>Total Items: <b style={{ color: '#c8a951' }}>{totalItems}</b></p>
            <p style={{ color: '#a8c5a0', fontSize: '16px' }}>Total Calories: <b style={{ color: '#c8a951' }}>{totalPrice} cal</b></p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={!ordered ? placeOrder : null} disabled={ordered}
              style={{ padding: '12px 25px', background: ordered ? '#555' : '#c8a951', color: ordered ? '#999' : '#0d2818', border: 'none', borderRadius: '20px', cursor: ordered ? 'not-allowed' : 'pointer', fontWeight: '700', fontSize: '15px' }}>
              {ordered ? '✅ Ordered' : 'Place Order'}
            </button>
            <button onClick={() => navigate('/allorders')}
              style={{ padding: '12px 25px', background: 'transparent', color: '#c8a951', border: '1px solid #c8a951', borderRadius: '20px', cursor: 'pointer', fontSize: '15px' }}>
              📋 My Orders
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;



