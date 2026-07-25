import React, { useState } from 'react';
import UseApi from './UseApi';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const HomeDummy = () => {
  const { api, loading } = UseApi('https://dummyjson.com/users');
  const navigate = useNavigate();
  const [searching, setSearching] = useState('')
  const [sorting, setSorting] = useState('')

  // SEARCHING
  const searchData = api?.users?.filter((x) =>
    x.firstName.toLowerCase().includes(searching.toLowerCase())
  )

  // SORTING
  const sortedData = searchData?.sort((a, b) => {
    if (sorting === 'asc') return a.age - b.age
    if (sorting === 'desc') return b.age - a.age
    return 0
  })

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '100px', background: '#0d2818', minHeight: '100vh' }}>
      <p style={{ fontSize: '24px', color: '#c8a951' }}>⏳ Loading...</p>
    </div>
  )

  return (
    <div style={{ padding: '30px', background: '#0d2818', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', color: '#c8a951', fontWeight: '300', letterSpacing: '2px' }}>👥 Our Users</h1>
        <p style={{ color: '#a8c5a0', fontSize: '14px' }}>Explore and connect with people</p>
      </div>

      {/* SEARCHING */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '30px', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="🔍 Search by name..."
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
          style={{ padding: '12px 20px', width: '250px', borderRadius: '30px', border: '1px solid #2d5a3d', outline: 'none', fontSize: '14px', background: '#1a3a2a', color: '#a8c5a0' }}
        />

      {/* SORTING */}
        <select
          onChange={(e) => setSorting(e.target.value)}

          style={{ padding: '12px 20px', borderRadius: '30px', border: '1px solid #2d5a3d', outline: 'none', fontSize: '14px', background: '#1a3a2a', color: '#a8c5a0', cursor: 'pointer' }}
        >
          <option value="">Sort by Age</option>
          <option value="asc">Age: Low to High</option>
          <option value="desc">Age: High to Low</option>
        </select>
      </div>

  

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>


        {sortedData?.map((item) => (
          <div key={item.id} style={{ background: '#1a3a2a', borderRadius: '20px', padding: '20px', width: '200px', boxShadow: '0 8px 25px rgba(0,0,0,0.3)', border: '1px solid #2d5a3d', textAlign: 'center' }}>
            <LazyLoadImage src={item.image} alt="user" effect='blur' width={80} height={80} style={{ borderRadius: '50%', border: '3px solid #c8a951', objectFit: 'cover', marginBottom: '12px' }} />
            <h3 style={{ color: '#c8a951', fontSize: '15px', marginBottom: '8px', fontWeight: '600' }}>{item.firstName} {item.lastName}</h3>
            <div style={{ fontSize: '12px', color: '#a8c5a0', lineHeight: '1.9', textAlign: 'left' }}>
              <p>📧 {item.email}</p>
              <p>📞 {item.phone}</p>
              <p>🎂 Age: {item.age}</p>
              <p>⚧ {item.gender}</p>
            </div>


            <div style={{ display: 'flex', gap: '8px', marginTop: '15px' }}>
              
              <button onClick={() => navigate(`/user/${item.id}`)} style={{ flex: 1, padding: '8px', background: '#c8a951', color: '#0d2818', border: 'none', borderRadius: '15px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>View</button>
              <button onClick={() => navigate('/recipes')} style={{ flex: 1, padding: '8px', background: 'transparent', color: '#c8a951', border: '1px solid #c8a951', borderRadius: '15px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Recipes</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeDummy;