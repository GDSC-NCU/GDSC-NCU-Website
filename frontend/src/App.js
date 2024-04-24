import React from 'react';
import './App.css';
import Footer from './Components/Footer';

// const router= createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' errorElement={<Error/>}>
//       <Route path='/' element={<RootLayout/>}  >
//         <Route index element={<Home/>}/>
//         <Route index path='/Home' element={<Home/>}/>
//         <Route index path='/About' element={<About/>}/>
//         <Route index path='/Event' element={<Event/>}/>
//         <Route index path='/Event' element={<Home/>}/>
//         <Route index path='/Home' element={<Team/>}/>
//         <Route index path='/About' element={<RoadMap/>}/>
//         <Route index path='/Event' element={<Blog/>}/>
//       </Route>
//       {/* <Route path='/admin' element={<Admin/>}/> */}
//     </Route>
//   )  
// )

function App() {
  return (
    <>
    
{/* <Router>
        <Header />
        <div>
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Event">
            <Event />
          </Route>
          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/RoadMap">
            <RoadMap />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/App">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router> */}



<Footer />
</>
  );
}

export default App;
