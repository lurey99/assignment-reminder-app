import React, { useState, useEffect } from 'react';

export default function App() {
  const [status, setStatus] = useState('Checking...');
  useEffect(() => {
    fetch('http://localhost:5001/api/health')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(() => setStatus('Backend offline'));
  }, []);
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif', color: '#142B05' }}>
      <h1>Assignment Reminder App</h1>
      <p>CSCE 3444 - Application Skeleton</p>
      <p><strong>Backend Status: </strong>{status}</p>
    </div>
  );
}
