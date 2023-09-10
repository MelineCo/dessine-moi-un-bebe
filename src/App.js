import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';

// Pages
import { Home } from './components/Home';
import { Equipe } from './components/Equipe';
import { Ateliers } from './components/Ateliers';
import Books, { booksLoader } from './components/categories-livre/Books';
import { NotFound } from './components/NotFound';
import { BookDetails, bookdetailsLoader } from './components/categories-livre/BookDetails';

// Layouts
import { RootLayout } from './layouts/RootLayout';
import BooksLayout from './layouts/BooksLayout';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <RootLayout /> }>
    <Route path='home' element={ <Home/> }/>
    <Route path='ateliers' element={ <Ateliers/> }/>
    <Route path='bibliotheque' element={ <BooksLayout /> }>
      <Route
        index
        element= { <Books /> }
        loader= {booksLoader}
      />
      <Route
        path=":id"
        element= { <BookDetails /> }
        loader= {bookdetailsLoader}
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

