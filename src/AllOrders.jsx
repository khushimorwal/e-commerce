import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState(JSON.parse(localStorage.getItem('allOrders')) || [])
  const [viewType, setViewType] = useState('card')
  const navigate = useNavigate();

  const deleteOrder = (index) => {
    const update = allOrders.filter((_, i) => i !== index)
    setAllOrders(update)
    localStorage.setItem('allOrders', JSON.stringify(update))
  }

  return (
    <div style={{ padding: '30px', background: '#0d2818', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <button onClick={() => navigate(-1)} style={{ padding: '8px 20px', background: 'transparent', color: '#c8a951', border: '1px solid #c8a951', borderRadius: '20px', cursor: 'pointer', marginBottom: '20px' }}>← Back</button>
      <h2 style={{ color: '#c8a951', fontSize: '28px', fontWeight: '300', marginBottom: '20px' }}>📋 All Orders</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setViewType('card')}
          style={{ padding: '8px 20px', background: viewType === 'card' ? '#c8a951' : 'transparent', color: viewType === 'card' ? '#0d2818' : '#c8a951', border: '1px solid #c8a951', borderRadius: '20px', cursor: 'pointer', fontWeight: '600' }}>
          Card View
        </button>
        <button onClick={() => setViewType('table')}
          style={{ padding: '8px 20px', background: viewType === 'table' ? '#c8a951' : 'transparent', color: viewType === 'table' ? '#0d2818' : '#c8a951', border: '1px solid #c8a951', borderRadius: '20px', cursor: 'pointer', fontWeight: '600' }}>
          Table View
        </button>
      </div>

      {allOrders.length === 0 ? (
        <p style={{ color: '#a8c5a0', textAlign: 'center', fontSize: '18px' }}>Koi order nahi hai!</p>
      ) : viewType === 'card' ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {allOrders.map((order, index) => (
            <div key={index} style={{ background: '#1a3a2a', borderRadius: '15px', padding: '20px', width: '280px', border: '1px solid #2d5a3d' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ color: '#c8a951', fontSize: '16px' }}>👤 {order.userName}</h3>
                <button onClick={() => deleteOrder(index)} style={{ padding: '5px 10px', background: 'red', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '12px' }}>🗑️</button>
              </div>
              <p style={{ color: '#a8c5a0', fontSize: '13px' }}>🛒 Items: {order.totalItems}</p>
              <p style={{ color: '#a8c5a0', fontSize: '13px' }}>🔥 Calories: {order.totalPrice}</p>
              <div style={{ marginTop: '10px' }}>
                {order.items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', background: '#0d2818', padding: '8px', borderRadius: '8px', marginBottom: '6px' }}>
                    <img src={item.image} width={50} height={40} style={{ borderRadius: '6px', objectFit: 'cover' }} />
                    <div>
                      <p style={{ color: '#c8a951', fontSize: '12px', fontWeight: '600' }}>{item.name}</p>
                      <p style={{ color: '#a8c5a0', fontSize: '11px' }}>🔥 {item.price} cal</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', color: '#a8c5a0' }}>
          <thead>
            <tr style={{ background: '#1a3a2a' }}>
              <th style={{ padding: '12px', textAlign: 'left', color: '#c8a951', border: '1px solid #2d5a3d' }}>User</th>
              <th style={{ padding: '12px', textAlign: 'left', color: '#c8a951', border: '1px solid #2d5a3d' }}>Items</th>
              <th style={{ padding: '12px', textAlign: 'left', color: '#c8a951', border: '1px solid #2d5a3d' }}>Total Cal</th>
              <th style={{ padding: '12px', textAlign: 'left', color: '#c8a951', border: '1px solid #2d5a3d' }}>Products</th>
              <th style={{ padding: '12px', textAlign: 'left', color: '#c8a951', border: '1px solid #2d5a3d' }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr key={index} style={{ background: index % 2 === 0 ? '#1a3a2a' : '#0d2818' }}>
                <td style={{ padding: '12px', border: '1px solid #2d5a3d' }}>👤 {order.userName}</td>
                <td style={{ padding: '12px', border: '1px solid #2d5a3d' }}>{order.totalItems}</td>
                <td style={{ padding: '12px', border: '1px solid #2d5a3d' }}>{order.totalPrice} cal</td>
                <td style={{ padding: '12px', border: '1px solid #2d5a3d' }}>
                  {order.items.map((item, i) => (
                    <p key={i} style={{ fontSize: '12px', color: '#c8a951' }}>• {item.name}</p>
                  ))}
                </td>
                <td style={{ padding: '12px', border: '1px solid #2d5a3d' }}>
                  <button onClick={() => deleteOrder(index)} style={{ padding: '5px 12px', background: 'red', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AllOrders;