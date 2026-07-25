import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  function handleSubmit() {
    const users = JSON.parse(localStorage.getItem('users')) || []
    const exists = users.find((x) => x.email === form.email)
    if (exists) { alert('Already Registered!'); navigate('/login'); return }
    const newUser = { name: form.name, email: form.email, password: form.password }
    localStorage.setItem('users', JSON.stringify([...users, newUser]))
    alert('SignUp Successful!')
    navigate('/login')
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#0d2818' }}>
      <div style={{ background: '#1a3a2a', padding: '40px', borderRadius: '20px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', width: '350px', border: '1px solid #2d5a3d' }}>
        <h2 style={{ textAlign: 'center', color: '#c8a951', marginBottom: '8px', fontSize: '26px', fontWeight: '300' }}>✨ Create Account</h2>
        <p style={{ textAlign: 'center', color: '#a8c5a0', fontSize: '13px', marginBottom: '25px' }}>Join us today</p>

        <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ width: '100%', padding: '12px 15px', marginBottom: '12px', borderRadius: '10px', border: '1px solid #2d5a3d', background: '#0d2818', color: '#a8c5a0', outline: 'none', fontSize: '14px', boxSizing: 'border-box' }} />

        <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ width: '100%', padding: '12px 15px', marginBottom: '12px', borderRadius: '10px', border: '1px solid #2d5a3d', background: '#0d2818', color: '#a8c5a0', outline: 'none', fontSize: '14px', boxSizing: 'border-box' }} />

        <input type="password" placeholder="Your Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ width: '100%', padding: '12px 15px', marginBottom: '20px', borderRadius: '10px', border: '1px solid #2d5a3d', background: '#0d2818', color: '#a8c5a0', outline: 'none', fontSize: '14px', boxSizing: 'border-box' }} />

        <button onClick={handleSubmit}
          style={{ width: '100%', padding: '12px', background: '#c8a951', color: '#0d2818', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer', fontWeight: '700' }}>
          Sign Up
        </button>

        <p style={{ textAlign: 'center', marginTop: '15px', color: '#a8c5a0', fontSize: '13px' }}>
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} style={{ color: '#c8a951', cursor: 'pointer', fontWeight: '600' }}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;