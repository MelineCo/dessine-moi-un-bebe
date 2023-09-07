import React from 'react';

export function MembreEquipe({membre}){
    return (
        <div className="membre_equipe">
            <h2>{membre.prenom}</h2>
            <span className="role-equipe">{membre.role}</span>
            <p>{membre.presentation}</p>
        </div>
    )
}