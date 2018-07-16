import Vouchers from './components/Vouchers'
import Checkout from './components/Checkout'
import Login from './components/Login'

export const routes = [
    {
        path: '/',
        name: 'Vouchers',
        component: Vouchers
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]