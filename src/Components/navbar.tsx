import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { navItems } from '../Pages/home';
import { getCurrentUser } from '@aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        async function isUserAuthenticated() {
            try {
                let user = await getCurrentUser();
                if (user) {
                    setAuthenticated(true)
                }
            } catch (e) {
                console.log('the user is not authentificated', e)
                setAuthenticated(false)
            }
        }
        isUserAuthenticated();
    })

    function handleLogout(){
        try{
            sessionStorage.clear();
            localStorage.clear();
            setAuthenticated(false)
            toast.success('you have loged out successfully')
            navigate('/login');
        }catch(e){
            console.log('ops smth went wrong', e)
            toast.error('ops try again')

        }
    }

    return (
        <>
            <nav className="py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <div className="flex justify-between w-full lg:hidden">
                        <Link to="/" className="flex items-center">
                            <span className="self-center text-2xl font-bold whitespace-nowrap text-amber-900">BooKly</span>
                        </Link>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex items-center justify-between w-full">
                        <Link to="/" className="flex items-center">
                            <span className="self-center text-2xl font-bold whitespace-nowrap text-amber-900">BooKly</span>
                        </Link>
                        <div className="flex items-center justify-evenly lg:order-2 w-10/12 ">
                            <div className="relative max-w-[400px] mx-auto">
                                <input type="text" placeholder="Search name of the book or author..." className="w-full px-4 py-2 pl-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                                <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
                            </div>
                            {!isAuthenticated ? (
                                <div className="flex gap-2">
                                    <Link to="/login" className="text-white hover:bg-amber-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5" style={{ background: "#fca72c" }}>Login</Link>
                                    <Link to="/register" className="text-white hover:bg-amber-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5" style={{ background: "#fca72c" }}>Register</Link>
                                </div>
                            ):(
                                <form onSubmit={handleLogout}>
                                <div className="flex gap-2">
                                    <button className="text-white hover:bg-amber-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5" style={{ background: "#fca72c" }}>Logout</button>
                                </div>
                                </form>
                            )}

                        </div>
                    </div>
                    <div className="lg:hidden w-full">
                        <div className="relative max-w-[400px] mx-auto mb-2">
                            <input type="text" placeholder="Search name of the book or author..." className="w-full px-4 py-2 pl-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
                        </div>
                    </div>
                    <div className={`${isMenuOpen ? "block" : "hidden"} !lg:hidden items-center justify-between w-full lg:w-auto lg:order-1`} id="mobile-menu">
                        <div className="flex flex-col items-start gap-2 py-2 dark:bg-gray-800">
                            <Link to="/login" className="text-white hover:bg-amber-400 w-[100%] py-3 font-medium text-sm border-b-2 border-amber-900">Login</Link>
                            <Link to="/register" className="text-white w-[100%] py-3 font-medium text-sm border-b-2 border-amber-900">Register</Link>
                            {navItems.map((item, index) => (
                                <Link key={index} to="#" className={`text-white hover:bg-amber-400 w-[100%] py-3 font-medium text-sm border-b-2 !border-amber-900'}`}>
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
        </>
    )
}