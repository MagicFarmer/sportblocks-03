
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FocusModeProvider } from './contexts/FocusMode.tsx'

createRoot(document.getElementById("root")!).render(
  <FocusModeProvider>
    <App />
  </FocusModeProvider>
);
