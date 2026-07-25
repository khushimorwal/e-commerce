import React from 'react';
import UseApi from './UseApi';
import { useNavigate, useParams } from 'react-router-dom';

const ViewDetail = () => {
  const { id } = useParams();
  const { api, loading } = UseApi(`https://dummyjson.com/users/${id}`)
  const navigate = useNavigate();

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '100px', background: '#0d2818', minHeight: '100vh' }}>
      <p style={{ fontSize: '24px', color: '#c8a951' }}>⏳ Loading...</p>
    </div>
  )

  return (
    <div style={{ padding: '30px', background: '#0d2818', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '500px' }}>
        <button onClick={() => navigate(-1)} style={{ padding: '8px 20px', background: 'transparent', color: '#c8a951', border: '1px solid #c8a951', borderRadius: '20px', cursor: 'pointer', marginBottom: '20px' }}>← Back</button>

        <div style={{ background: '#1a3a2a', borderRadius: '20px', overflow: 'hidden', border: '1px solid #2d5a3d' }}>
          <div style={{ background: '#2d5a3d', padding: '30px', textAlign: 'center' }}>
            <img src={api?.image} alt="user" width={110} height={110} style={{ borderRadius: '50%', border: '4px solid #c8a951', objectFit: 'cover' }} />
            <h2 style={{ color: '#c8a951', marginTop: '12px' }}>{api?.firstName} {api?.lastName}</h2>
            <p style={{ color: '#a8c5a0', fontSize: '13px' }}>{api?.email}</p>
          </div>

          <div style={{ padding: '25px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {[
              { label: '👩 Maiden Name', value: api?.maidenName },
              { label: '📅 Birth Date', value: api?.birthDate },
              { label: '🩸 Blood Group', value: api?.bloodGroup },
              { label: '📏 Height', value: api?.height },
              { label: '👁️ Eye Color', value: api?.eyeColor },
              { label: '⚧ Gender', value: api?.gender },
              { label: '📞 Phone', value: api?.phone },
              { label: '🎂 Age', value: api?.age },
            ].map((item, i) => (
              <div key={i} style={{ background: '#0d2818', padding: '12px', borderRadius: '10px' }}>
                <p style={{ color: '#a8c5a0', fontSize: '11px', marginBottom: '4px' }}>{item.label}</p>
                <p style={{ color: '#c8a951', fontSize: '14px', fontWeight: '600' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetail;