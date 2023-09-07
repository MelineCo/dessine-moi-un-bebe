import React, { useLayoutEffect } from 'react'
import { NavLink , Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

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