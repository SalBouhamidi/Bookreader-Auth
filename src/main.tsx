import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context';
import './index.css'
import App from './App.tsx'


const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_I1okesKvz",
  client_id: "49c63kjgrhrhm3d1vjmhmd4dsm",
  redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "phone openid email",
};

console.log('authority',import.meta.env.authority);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>
);
