// import { useNavigate } from 'react-router-dom';
// import { useEffect } from "react";
// import { useAuth } from "react-oidc-context";

// const ProtectedRoute = ({element:any}) => {
//   const auth = useAuth();
//   const navigate = useNavigate();


//   useEffect(() => {
//     if (auth.error) {
//       console.error('You cannot access this page unless you are logged in', auth.error.message);
//       navigate('/login');
//       return;
//     }
//     if (auth.isAuthenticated) {
//       let data = {
//         email: auth.user?.profile.email,
//         idToken: auth.user?.id_token,
//         accessToken: auth.user?.access_token,
//         refreshToken: auth.user?.refresh_token,
//       };
//       localStorage.setItem('data', JSON.stringify(data));

//     }
//   }, [auth, navigate]);

//   if (auth.isAuthenticated) {
//     return element;
//   }

//   return null;
// };

// export default ProtectedRoute;
