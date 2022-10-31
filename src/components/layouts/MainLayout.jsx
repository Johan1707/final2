import { Outlet } from 'react-router-dom'

import { Navbar } from '../ui/Navbar'

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className='container'>
                <Outlet />
            </main>
        </>
    )
}