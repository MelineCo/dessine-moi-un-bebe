import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header.js'

export function RootLayout(){
    return (
        <div className="root-layout">
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}