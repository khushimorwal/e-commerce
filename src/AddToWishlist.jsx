import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddToWishlist = () => {
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || [])
  const navigate = useNavigate();

  return (
    <div style={{ padding: '30px', background: '#0d2818', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <button onClick={() => navigate(-1)} style={{ padding: '8px 20px', background: 'transparent', color: '#c8a951', border: '1px solid #c8a951', borderRadius: '20px', cursor: 'pointer', marginBottom: '20px' }}>← Back</button>
      <h2 style={{ color: '#c8a951', fontSize: '28px', fontWeight: '300', marginBottom: '20px' }}>❤️ My Wishlist</h2>

      {wishlist.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p style={{ color: '#a8c5a0', fontSize: '18px' }}>Wishlist empty hai!</p>
          <button onClick={() => navigate('/recipes')} style={{ marginTop: '15px', padding: '10px 25px', background: '#c8a951', color: '#0d2818', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: '700' }}>Browse Recipes</button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {wishlist.map((x) => (
            <div key={x.id} style={{ background: '#1a3a2a', borderRadius: '15px', overflow: 'hidden', width: '200px', border: '1px solid #2d5a3d' }}>
              <img src={x.image} alt={x.name} width='100%' height={130} style={{ objectFit: 'cover' }} />
              <div style={{ padding: '12px' }}>
                <h3 style={{ color: '#c8a951', fontSize: '14px', marginBottom: '5px' }}>{x.name}</h3>
                <p style={{ color: '#a8c5a0', fontSize: '12px' }}>🍜 {x.cuisine}</p>
                <p style={{ color: '#a8c5a0', fontSize: '12px' }}>⭐ {x.rating}</p>
                <button onClick={() => {
                  const update = wishlist.filter((w) => w.id !== x.id)
                  setWishlist(update)
                  localStorage.setItem('wishlist', JSON.stringify(update))
                }} style={{ marginTop: '10px', width: '100%', padding: '8px', background: 'red', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '12px', fontWeight: '600' }}>✕ Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddToWishlist;