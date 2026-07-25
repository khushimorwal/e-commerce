import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate();

  function handleSubmit() {
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find((x) => x.email === form.email && x.password === form.password)
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user))
      alert('Logged In! ✅')
      navigate('/cart')
    } else {
      alert('Wrong Email or Password!')
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#0d2818' }}>
      <div style={{ background: '#1a3a2a', padding: '40px', borderRadius: '20px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', width: '350px', border: '1px solid #2d5a3d' }}>
        <h2 style={{ textAlign: 'center', color: '#c8a951', marginBottom: '8px', fontSize: '26px', fontWeight: '300' }}>🔐 Welcome Back</h2>
        <p style={{ textAlign: 'center', color: '#a8c5a0', fontSize: '13px', marginBottom: '25px' }}>Login to continue</p>

        <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ width: '100%', padding: '12px 15px', marginBottom: '12px', borderRadius: '10px', border: '1px solid #2d5a3d', background: '#0d2818', color: '#a8c5a0', outline: 'none', fontSize: '14px', boxSizing: 'border-box' }} />

        <input type="password" placeholder="Your Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ width: '100%', padding: '12px 15px', marginBottom: '20px', borderRadius: '10px', border: '1px solid #2d5a3d', background: '#0d2818', color: '#a8c5a0', outline: 'none', fontSize: '14px', boxSizing: 'border-box' }} />

        <button onClick={handleSubmit}
          style={{ width: '100%', padding: '12px', background: '#c8a951', color: '#0d2818', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer', fontWeight: '700' }}>
          Login
        </button>

        <p style={{ textAlign: 'center', marginTop: '15px', color: '#a8c5a0', fontSize: '13px' }}>
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')} style={{ color: '#c8a951', cursor: 'pointer', fontWeight: '600' }}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;