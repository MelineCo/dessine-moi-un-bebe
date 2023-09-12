import { Outlet } from 'react-router-dom';
import illuMaternite from '../images/Motherhood-pana.svg';

export function Home(){
    return (
        <div className="home">
            <div className='flex'>
                <div className="hero">
                    <h1>Dessine-moi un bébé : l'association qui soutient les&nbsp;parents</h1>
                    <p>Nous sommes toujours là pour du soutien que ce soit sur l'allaitement, le portage, les couches lavables, un projet de naissance, un accouchement à la maison, la communication non violente avec son homme & les enfants, un besoin de papoter... ça peut se faire par téléphone, par mail, ou une rencontre dans un parc pourquoi pas !</p>
                    <button>J'adhère !</button>
                </div>
            
                <img style={{width: 400}} src={illuMaternite} alt="Maternité" ></img>
            </div>
            <div>
                <h2>Nos ateliers</h2>
                <Outlet />
            </div>
        </div>
    );
}