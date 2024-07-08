import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoState from './store/todoState'
// import CounterProvider from './store/todoState';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <TodoState>
      <App />
    </TodoState>
  </React.StrictMode>
  
)