import React from 'react';

export function MembreEquipe({membre}){
    return (
        <div className="membre_equipe">
            <h2>{membre.prenom}</h2>
            <img className="photo-equipe" src={membre.photo} alt={membre.prenom} ></img><br/>
            <span className="role-equipe">{membre.role}</span>
            <p>{membre.presentation}</p>
        </div>
    )
}