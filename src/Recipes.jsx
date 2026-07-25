import React, { useState } from 'react';
import UseApi from './UseApi';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Recipes = () => {
  const { api, loading } = UseApi('https://dummyjson.com/recipes');
  const navigate = useNavigate();
  // SEARCHING
  const [searching, setSearching] = useState('')
  // SORTING
  const [sorting, setSorting] = useState('')

  // WISHLIST
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  )

  const searchData = api?.recipes?.filter((x) =>
    x.name.toLowerCase().includes(searching.toLowerCase())
  )
  const sortedData = searchData?.sort((a, b) => {
    if (sorting === 'asc') return a.rating - b.rating
    if (sorting === 'desc') return b.rating - a.rating
    return 0
  })

  const toggleWishlist = (item) => {
    const exists = wishlist.find((w) => w.id === item.id)
    let update
    if (exists) { update = wishlist.filter((w) => w.id !== item.id) }
    else { update = [...wishlist, item] }
    setWishlist(update)
    localStorage.setItem('wishlist', JSON.stringify(update))
  }

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '100px', background: '#0d2818', minHeight: '100vh' }}>
      <p style={{ fontSize: '24px', color: '#c8a951' }}>⏳ Loading...</p>
    </div>
  )

  return (
    <div style={{ padding: '30px', background: '#0d2818', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', color: '#c8a951', fontWeight: '300', letterSpacing: '2px' }}>🍽️ Our Recipes</h1>
        <p style={{ color: '#a8c5a0', fontSize: '14px' }}>Discover delicious recipes from around the world</p>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '30px', justifyContent: 'center' }}>
      {/* SEARCHING */}
        <input type="text" 
        placeholder="🔍 Search recipes..." 
        value={searching} 
        onChange={(e) => setSearching(e.target.value)}

        style={{ padding: '12px 20px', width: '250px', borderRadius: '30px', border: '1px solid #2d5a3d', outline: 'none', fontSize: '14px', background: '#1a3a2a', color: '#a8c5a0' }} />
      {/* SORTING */}
        <select onChange={(e) => setSorting(e.target.value)}
          style={{ padding: '12px 20px', borderRadius: '30px', border: '1px solid #2d5a3d', outline: 'none', fontSize: '14px', background: '#1a3a2a', color: '#a8c5a0', cursor: 'pointer' }}>
          <option value="">Sort by Rating</option>
          <option value="asc">Rating: Low to High</option>
          <option value="desc">Rating: High to Low</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>

        {sortedData?.map((x) => (

          <div key={x.id} style={{ background: '#1a3a2a', borderRadius: '20px', overflow: 'hidden', width: '220px', boxShadow: '0 8px 25px rgba(0,0,0,0.3)', border: '1px solid #2d5a3d' }}>
            <LazyLoadImage src={x.image} effect='blur' width={220} height={150} style={{ objectFit: 'cover', width: '100%' }} />

            <div style={{ padding: '15px' }}>

              <h3 style={{ color: '#c8a951', fontSize: '15px', marginBottom: '8px' }}>{x.name}</h3>

              <p style={{ color: '#a8c5a0', fontSize: '12px' }}>🍜 {x.cuisine}</p>
              <p style={{ color: '#a8c5a0', fontSize: '12px' }}>⚡ {x.difficulty}</p>
              <p style={{ color: '#a8c5a0', fontSize: '12px' }}>⭐ {x.rating}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
              {/* SHOW RECIPES */}
                <button onClick={() => navigate(`/recipes/${x.id}`)} style={{ padding: '8px', background: '#c8a951', color: '#0d2818', border: 'none', borderRadius: '15px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Show Recipe</button>
              {/* ADD TO CART */}
                <button onClick={() => {
                  const existingCart = JSON.parse(localStorage.getItem('cart')) || []
                  const newItem = { 
                    id: x.id, 
                    name: x.name, 
                    image: x.image, 
                    rating: x.rating, 
                    cuisine: x.cuisine, 
                    price: x.caloriesPerServing 
                  }
                  localStorage.setItem('cart', JSON.stringify([...existingCart, newItem]))
                  navigate('/cart')
                }} 
                style={{ padding: '8px', background: '#2d5a3d', color: '#c8a951', border: '1px solid #c8a951', borderRadius: '15px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>🛒 Add to Cart</button>

                <button onClick={() => 
                toggleWishlist({ 
                  id: x.id, 
                  name: x.name, 
                  image: x.image, 
                  cuisine: x.cuisine, 
                  rating: x.rating 
                })}

                  style={{ padding: '8px', background: 
                  wishlist.find((w) => w.id === x.id) ? '#c8a951' : 'transparent', color: 
                  wishlist.find((w) => w.id === x.id) ? '#0d2818' : '#c8a951', border: '1px solid #c8a951', borderRadius: '15px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>
                  {wishlist.find((w) => w.id === x.id) ? '❤️ Wishlisted' : '🤍 Wishlist'}
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;