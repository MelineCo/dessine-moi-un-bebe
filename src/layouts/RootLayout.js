import React, { useLayoutEffect } from 'react'
import { NavLink , Outlet } from 'react-router-dom'

export function RootLayout(){
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Dessine-moi un bébé</h1>
                    <NavLink to="/ateliers">Ateliers</NavLink>
                    <NavLink to="/bibliotheque">Bibliothèque</NavLink>
                    <NavLink to="/equipe">Qui sommes-nous ?</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}