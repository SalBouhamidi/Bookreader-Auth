import { useAuth } from "react-oidc-context";
import { useEffect } from "react";
export default function Login(){
    const auth = useAuth();
    useEffect(() => {
        auth.signinRedirect();
      }, [auth]);
      
  
    return (
        <div>
        <h1>Login Page</h1>
        <p>Redirecting to login...</p>
      </div>
    )

}