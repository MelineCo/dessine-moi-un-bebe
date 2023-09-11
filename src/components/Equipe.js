import React from 'react';
import { MembreEquipe } from "./MembreEquipe.js";
import { useLoaderData } from 'react-router-dom';

export function Equipe(){
    const equipe = useLoaderData();

    return (
        <div>
            <div className="membre-grid">
                {equipe?.map( membre => {
                    return <MembreEquipe membre={membre} key={membre.id} />
                })}
            </div>
        </div>
    );
}

export const teamLoader = async () => {
    const res  = await fetch("http://localhost:4000/equipe")
    return res.json()
}
  
