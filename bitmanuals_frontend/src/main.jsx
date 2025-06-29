
import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 40 }}>
      <h1>BitManuals</h1>
      <p>¡Tu tienda digital de manuales está online!</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
