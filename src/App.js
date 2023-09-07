import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { Ateliers } from './components/Ateliers';
import { Bibliotheque } from './components/Bibliotheque';
import { Evenements } from './components/Evenements';
import { Root } from './components/Root';
import { Home } from './components/Home';
import { Equipe } from './components/Equipe';
import { AtelierMassageBebe } from './components/AtelierMassageBebe';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    <Route path='home' element={ <Home/> }/>
    <Route path='evenements' element={ <Evenements/> }/>
    <Route path='ateliers' element={ <AtelierMassageBebe/> }/>
    <Route path='bibliotheque' element={ <Bibliotheque /> }/>
    <Route path='equipe' element={ <Equipe /> }/>
  </Route>
));

function App() {
  const [equipe, setEquipe] = useState(sample_equipe);
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Equipe equipe={equipe} />
    </div>
  );
}

export default App;

const sample_equipe = [
  {
      id: 1,
      prenom: "Laetitia",
      role: "Présidente",
      presentation: "Bientôt 9 ans, c'est mon âge de maman. Et me voilà découvrant et sillonnant ce nouvel univers. Un univers où l'on est femme, maman, amie, compagne, confidente... J'aime les rencontres et le partage, les arbres et le Chili. J'aime aussi les jeux et le yoga, les livres et le soleil, le muscat et le chocolat. Grâce à Dessine-moi un bébé, j'ai appris à porter et à masser mon bébé, j'ai rencontré des mamans lors des p'tits dej du mardi... et comme elle a une belle aura cette association, j'ai eu envie d'y mettre un pied, pour davantage de rencontres, de beaux projets, et pour tisser de jolis liens."

  },
  {
      id: 2,
      prenom: "Aurore",
      role: "Trésorière",
      presentation: "Maman de trois enfants, je suis passionnée par ce nouveau rôle ! Grâce à cette belle asso je me suis mise au maternage! Portage en écharpe, couches lavables, pédagogies alternatives, accouchement respecté... Par ma présence dans l'asso je souhaite aider à véhiculer ces valeurs et continuer à mettre en place avec mes équipières de belles activitées."

  },
  {
      id: 3,
      prenom: "Sophie",
      role: "Créatrice de l'association, animatrice des ateliers Faber & Mazlish & gérante de la bibliothèque",
      presentation: "Maman de grands, doula."

  },
  {
      id: 4,
      prenom: "Laetitia, dit 'Laetish'",
      role: "Monitrice de portage",
      presentation: ""
  }
]
