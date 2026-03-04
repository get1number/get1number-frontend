import React, { useState, useEffect } from 'react'

function App() {
  const [status, setStatus] = useState('Carregando...')
  const [numero, setNumero] = useState('')

  useEffect(() => {
    fetch('https://get1number-api.onrender.com/')
      .then(res => res.json())
      .then(data => setStatus(data.status || 'OK'))
      .catch(err => setStatus('Erro: ' + err))
  }, [])

  const getNumero = () => {
    fetch('https://get1number-api.onrender.com/get-number?phone=' + numero)
      .then(res => res.text())
      .then(num => setStatus('Seu número: ' + num))
      .catch(err => setStatus('Erro: ' + err))
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '400px', margin: 'auto' }}>
      <h1>🎉 Get1Number</h1>
      <p>Backend: {status}</p>
      <input
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Digite telefone"
        style={{ width: '100%', padding: '0.5rem', margin: '1rem 0' }}
      />
      <br />
      <button onClick={getNumero} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
        Pegar Número
      </button>
    </div>
  )
}

export default App
