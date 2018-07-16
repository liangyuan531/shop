import Vouchers from './components/Vouchers'
import Checkout from './components/Checkout'

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
    }
]