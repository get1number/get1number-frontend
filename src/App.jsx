import React, { useState, useEffect } from 'react'

function App() {
  const [status, setStatus] = useState('Carregando backend...')
  const [numero, setNumero] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    fetch('https://get1number-api.onrender.com/')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('Erro conexão'))
  }, [])

  const pegarNumero = () => {
    if (!telefone) return alert('Digite telefone!')
    fetch(`https://get1number-api.onrender.com/get-number?phone=${telefone}`)
      .then(res => res.text())
      .then(num => setNumero(num))
      .catch(err => setStatus('Erro API: ' + err))
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h1>📱 Get1Number</h1>
      <p><strong>Backend:</strong> {status}</p>
      <input
        value={telefone}
        onChange={e => setTelefone(e.target.value)}
        placeholder="Telefone ex: 5511999999999"
        style={{ width: '100%', padding: '1rem', margin: '1rem 0', fontSize: '1.1rem' }}
      />
      <br />
      <button 
        onClick={pegarNumero} 
        style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Pegar Número Virtual
      </button>
      {numero && (
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#d4edda', borderRadius: '5px' }}>
          <strong>Seu Número:</strong> {numero}
        </div>
      )}
    </div>
  )
}

export default App
