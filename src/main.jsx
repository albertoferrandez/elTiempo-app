import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'
import ThemeContextProvider from './context/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
)
