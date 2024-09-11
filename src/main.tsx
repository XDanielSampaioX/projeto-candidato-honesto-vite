import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CandidatosContextProvider } from './hooks/contexts/CandidatosContext';
import InputContextProvider from './hooks/contexts/InputContext';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { LikeAndDisLikeContextProvider } from './hooks/contexts/LikeAndDisLikeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <InputContextProvider>
        <CandidatosContextProvider>
          <LikeAndDisLikeContextProvider>
            <App />
          </LikeAndDisLikeContextProvider>
        </CandidatosContextProvider>
      </InputContextProvider>
    </Router>
  </StrictMode>,
);
