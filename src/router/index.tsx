import { createBrowserRouter } from 'react-router-dom'
import Login from '../Pages/login'
import Register from '../Pages/register'
import Profile from '../Pages/profil'
import ProtectedRoute from '../utils/PrivateRoute'



export const router = createBrowserRouter([
  
  {
        path: "login",
        element: <Login />
    },{
        path: "register",
        element: <Register />
    },{
        path: "profile",
        element :<ProtectedRoute element={<Profile/>}/>
    },{
     
    }

])