import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify';
import App from './App.tsx'
import './index.css'
import './App.css'

Amplify.configure({
  Auth: {
    Cognito: {
      region: import.meta.env.VITE_APP_AWS_REGION,
      userPoolId: import.meta.env.VITE_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_CLIENT_ID, 
      loginWith: {
        username: true,
        email: true 
      }
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
