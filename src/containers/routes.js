import { lazy } from "react"
import { BiHomeAlt } from 'react-icons/bi'

const SignIn = lazy(() => import('./Auth/signIn')) 
const SignUp = lazy(() => import('./Auth/signUp'))
const Home = lazy(() => import('./Header')) 

const routes = {
    public: [
        {
            path: 'sing-in',
            element: SignIn,
            allowedRoles: ['admin', 'user'],
            title: 'Sing In'
        },
        {
            path: 'sing-out',
            element: SignUp,
            allowedRoles: ['admin', 'user'],
            title: 'Sing Out', 
        },
        {
            path: '*',
            element: Home,
        }
    ],
    private: [
        {
            path: '/',
            element: Home,
            allowedRoles: ['admin', 'user'],
            title: 'Home',
            icon: <BiHomeAlt />
        },
        {
            path: '*',
            element: Home,
        }
    ],
}

export default routes