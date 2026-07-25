import React, { useState } from 'react';
import UseApi from './UseApi';
import { useNavigate, useParams } from 'react-router-dom';

const ShowRecipes = () => {
  const { id } = useParams();
  const { api, loading } = UseApi(`https://dummyjson.com/recipes/${id}`);
  const navigate = useNavigate();
  const [post, setPost] = useState(false);

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '100px', background: '#0d2818', minHeight: '100vh' }}>
      <p style={{ fontSize: '24px', color: '#c8a951' }}>⏳ Loading...</p>
    </div>
  )

  return (
    <div style={{ padding: '30px', background: '#0d2818', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '600px' }}>
        <button onClick={() => navigate(-1)} style={{ padding: '8px 20px', background: 'transparent', color: '#c8a951', border: '1px solid #c8a951', borderRadius: '20px', cursor: 'pointer', marginBottom: '20px' }}>← Back</button>

        <div style={{ background: '#1a3a2a', borderRadius: '20px', overflow: 'hidden', border: '1px solid #2d5a3d' }}>

          <img src={api?.image} 
          alt="recipe" 
          width='100%' height={250} style={{ objectFit: 'cover' }} 
          />

          <div style={{ padding: '25px' }}>

            <h2 style={{ color: '#c8a951', fontSize: '24px', marginBottom: '15px' }}>
              {api?.name}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
              {[
                { label: '🍜 Cuisine', value: api?.cuisine },
                { label: '⚡ Difficulty', value: api?.difficulty },
                { label: '⭐ Rating', value: api?.rating },
                { label: '⏱️ Prep Time', value: `${api?.prepTimeMinutes} mins` },
                { label: '🍳 Cook Time', value: `${api?.cookTimeMinutes} mins` },
                { label: '🍽️ Servings', value: api?.servings },
                { label: '🔥 Calories', value: api?.caloriesPerServing },
              ].map((item, i) => (
                <div key={i} style={{ background: '#0d2818', padding: '10px', borderRadius: '10px' }}>

                  <p style={{ color: '#a8c5a0', fontSize: '11px' }}>
                    {item.label}
                  </p>

                  <p style={{ color: '#c8a951', fontSize: '14px', fontWeight: '600' }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <h3 style={{ color: '#c8a951', marginBottom: '10px' }}>
              🥗 Ingredients:
            </h3>
            <div style={{ background: '#0d2818', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
              
            {api?.ingredients?.map((item, index) => (
            <p key={index} 
            style={{ color: '#a8c5a0', fontSize: '13px', marginBottom: '5px' }}>• 
            {item}
            </p>
              ))}
            </div>

            <h3 style={{ color: '#c8a951', marginBottom: '10px' }}>
              📋 Instructions:
            </h3>

            <div style={{ background: '#0d2818', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
              {api?.instructions?.map((item, index) => (
              <p key={index} 
              style={{ color: '#a8c5a0', fontSize: '13px', marginBottom: '8px' }}>{index + 1}. 
              {item}
              </p>
              ))}
            </div>

        {/* SHOW POST*/}
            <button onClick={() => setPost(!post)}
              style={{ padding: '10px 25px', background: post ? '#2d5a3d' : '#c8a951', color: post ? '#c8a951' : '#0d2818', border: '1px solid #c8a951', borderRadius: '20px', cursor: 'pointer', fontWeight: '700' }}>
              {post ? 'Hide Post' : 'Show Post'}
            </button>

            {post && (
              <div style={{ marginTop: '20px', background: '#0d2818', padding: '20px', borderRadius: '15px', border: '1px solid #2d5a3d' }}>
                <h3 style={{ color: '#c8a951', marginBottom: '10px' }}>
                  📸 Post
                </h3>

                <img src={api?.image} alt="post" 
                width='100%' style={{ borderRadius: '10px', marginBottom: '10px' }} />
                <p style={{ color: '#a8c5a0' }}>⭐ Rating: {api?.rating}</p>
                <p style={{ color: '#a8c5a0' }}>💬 Comment: Delicious recipe!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowRecipes;