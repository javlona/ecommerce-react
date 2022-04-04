import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './containers/Footer';
import Header from './containers/Header';
import routes from './containers/routes';

function App() {
  const user = useSelector((state) => state.auth.token);

  if(user){
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Suspense fallback={<h4>loading...</h4>}>
            <Routes>
              {
                routes.private.map((route) => {
                  const {path, element: Component} = route
                  return <Route key={path} path={path} element={path=='*' ? Component : <Component/>} />;
                })
              }
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    )
  } else {
    return (
      <div className="App">
        <Header />
        <Suspense fallback={<h4>loading...</h4>}>
          <Routes>
            {
              routes.public.map((route) => {
                const {path, element: Component } = route
                return <Route key={path} path={path} element={path=='*' ? Component : <Component />} />
              })
            }
          </Routes>
        </Suspense>
        <Footer />
      </div>
    )
  }
}

export default App;
