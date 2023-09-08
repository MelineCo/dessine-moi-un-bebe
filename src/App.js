import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';

// Pages
import { Home } from './components/Home';
import { Equipe } from './components/Equipe';
import { Ateliers } from './components/Ateliers';
import { Bibliotheque } from './components/Bibliotheque';
import { Evenements } from './components/Evenements';
import { LivresAllaitement } from './components/categories-livre/LivresAllaitement';
import { LivresMassage } from './components/categories-livre/LivresMassage';
import { LivresEmotions } from './components/categories-livre/LivresEmotions';
import { booksLoader, LivresGrossesse } from './components/categories-livre/LivresGrossesse';
import { NotFound } from './components/NotFound';

// Layouts
import { RootLayout } from './layouts/RootLayout';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <RootLayout /> }>
    <Route path='home' element={ <Home/> }/>
    <Route path='evenements' element={ <Evenements/> }/>
    <Route path='ateliers' element={ <Ateliers/> }/>
    <Route path='bibliotheque' element={ <Bibliotheque /> }>
      <Route
        index
        element= { <LivresGrossesse /> }
        loader= {booksLoader}
      />
    </Route>
    <Route path='equipe' element={ <Equipe /> }/>
    <Route path='*' element={ <NotFound /> }/>
  </Route>
));

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

