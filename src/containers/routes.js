import { lazy } from "react"
import { BiHomeAlt } from 'react-icons/bi'
import { Navigate } from "react-router"

const Home = lazy(() => import('./Home')) 
const SignIn = lazy(() => import('./Auth/signIn')) 
const SignUp = lazy(() => import('./Auth/signUp'))
const About = lazy(() => import('./About')) 
const Shop = lazy(() => import('./Shop')) 
const Contact = lazy(() => import('./Contact')) 
const Profile = lazy(() => import('./Profile')) 
const Checkout = lazy(() => import('./Checkout'))

const mainRoutes = [
    {
        path: '/',
        element: Home,
        allowedRoles: ['admin', 'user'],
        title: 'Home',
        icon: <BiHomeAlt />
    },
    {
        path: 'about',
        element: About,
        allowedRoles: ['admin', 'user'],
        title: 'About', 
    },
    {
        path: 'shop',
        element: Shop,
        allowedRoles: ['admin', 'user'],
        title: 'Shop',
    },
    {
        path: 'contact',
        element: Contact,
        allowedRoles: ['admin', 'user'],
        title: 'Contact',
    },
    {
        path: 'checkout',
        element: Checkout,
        allowedRoles: ['admin', 'user'],
        title: 'Checkout',
    },
    {
        path: '*',
        element: <Navigate to='/' replace/>,
    },

]

const routes = {
    public: [
        {
            path: 'sign-in',
            element: SignIn,
            allowedRoles: ['admin', 'user'],
            title: 'Sign In'
        },
        {
            path: 'sign-up',
            element: SignUp,
            allowedRoles: ['admin', 'user'],
            title: 'Sign Up', 
        },
        ...mainRoutes
    ],
    private: [
        {
            path: 'profile',
            element: Profile,
            allowedRoles: ['admin', 'user'],
            title: 'Profile',
        },
        ...mainRoutes
    ],
}

export default routes