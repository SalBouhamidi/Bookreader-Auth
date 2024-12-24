import { useAuth } from "react-oidc-context";

export default function profile(){
      const auth = useAuth();
    
    const signOutRedirect = () => {
        const clientId = "49c63kjgrhrhm3d1vjmhmd4dsm";
        const logoutUri = "<logout uri>";
        const cognitoDomain = "https://us-east-1i1okeskvz.auth.us-east-1.amazoncognito.com";
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
      };
    return(
        <>
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>
        <button onClick={() => signOutRedirect()}>Sign out</button>
      </div>        
      </>
    )
}