import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.jsx'

// 🌟 Remove Tailwind loader after React mounts
window.addEventListener("load", () => {
  const loader = document.getElementById("global-loader");
  if (loader) {
    loader.classList.add("opacity-0");
    setTimeout(() => loader.remove(), 500);
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
