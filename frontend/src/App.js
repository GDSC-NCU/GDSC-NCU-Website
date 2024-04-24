import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import Error from './Pages/Error';
import Layout from './Layouts/Layout';
import Home from './Pages/Home/Home.jsx';
import Event from './Pages/Event/Event.jsx';
import About from './Pages/About/About.jsx';

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<Error/>}>
      <Route path='/' element={<Layout/>}  >
        <Route index element={<Home/>}/>
        {/* <Route index path='/Home' element={<Home/>}/> */}
        <Route index path='/About' element={<About/>}/>
        <Route index path='/Event' element={<Event/>}/>
      </Route>
      {/* <Route path='/admin' element={<Admin/>}/> */}
    </Route>
  )  
)

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
