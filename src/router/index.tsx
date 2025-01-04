import { createBrowserRouter } from 'react-router-dom'
import Login from '../Pages/login'
import Register from '../Pages/register'
// import Profile from '../Pages/profil'
// import ProtectedRoute from '../utils/PrivateRoute'
import Acceuil from "../Pages/home"
import DefaultLayout from '../Components/DefaultLayout'
import Dashboard from '../Pages/Dashboard'
import VerificationForm from '../Pages/VerificationForm'



export const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Acceuil/>
            },{
                path: "dashboard",
                element: <Dashboard/>
            }
            //  {
            //     path: "profile",
            //     element: <ProtectedRoute element={<Profile />} />
            // }
        ],


    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    },
    {
        path: "cofirmation",
        element: <VerificationForm email/>

    }


])