import React from 'react';
import { MembreEquipe } from "./MembreEquipe";

export function Equipe({equipe}){
    return (
        <div>
            <h1>Équipe de l'association Dessine-moi un bébé</h1>
            <div className="membre-grid">
                {equipe.map( membre => {
                    return <MembreEquipe membre={membre} key={membre.id} />
                })}
            </div>
        </div>
    );
}

