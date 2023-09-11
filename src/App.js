import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';

// Pages
import { Home } from './components/Home.js';
import { Equipe, teamLoader } from './components/Equipe.js';
import { Workshops, workshopsLoader } from './components/Workshops.js';
import Books, { booksLoader } from './components/Books.js';
import { NotFound } from './components/NotFound.js';
import { BookDetails, bookdetailsLoader } from './components/BookDetails.js';
import WorkshopDetails, { workshopDetailsLoader } from './components/WorkshopDetails.js';

// Layouts
import { RootLayout } from './layouts/RootLayout.js';
import BooksLayout from './layouts/BooksLayout.js';
import WorkshopsLayout from './layouts/WorkshopsLayout.js';
import TeamLayout from './layouts/TeamLayout.js';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <RootLayout /> }>
    <Route path='home' element={ <Home/> }/>
    <Route path='ateliers' element={ <WorkshopsLayout /> }>
      <Route
          index
          element= { <Workshops /> }
          loader= {workshopsLoader}
        />
        <Route
          path=":id"
          element= { <WorkshopDetails /> }
          loader= {workshopDetailsLoader}
        />
    </Route>
    <Route path='bibliotheque' element={ <BooksLayout /> }>
      <Route
        index
        element= { <Books /> }
        loader= {booksLoader}
      />
    </Route>
    <Route
        path="bibliotheque/:id"
        element= { <BookDetails /> }
        loader= {bookdetailsLoader}
      />
    <Route path='equipe' element={ <TeamLayout /> }>
      <Route
        index
        element={<Equipe />}
        loader= {teamLoader}
      />
    </Route>
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

