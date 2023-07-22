import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import { StateContext } from './context/StateContext.jsx'
import './index.css'


const googleFontsLink = document.createElement('link');
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap';
googleFontsLink.rel = 'stylesheet';
document.head.appendChild(googleFontsLink);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContext>
      <Layout>
        <App />
      </Layout>
    </StateContext>
  </React.StrictMode>,
)
