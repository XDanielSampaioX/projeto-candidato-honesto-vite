import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CandidatosContextProvider } from './hooks/contexts/CandidatosContext.tsx'
import InputContextProvider from './hooks/contexts/InputContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <InputContextProvider>
        <CandidatosContextProvider>
          <App />
        </CandidatosContextProvider>
      </InputContextProvider>
  </StrictMode>,
)
