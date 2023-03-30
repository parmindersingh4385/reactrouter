import logo from './logo.svg';
import './App.css';
import React from 'react';



import  { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
/* import About from './components/About'; */
import Products from './components/Products';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';

import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';

const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/* <Route path='about' element={<About/>}/> */}
                <Route path='about' element={<React.Suspense fallback='LOADING...................'><LazyAbout/></React.Suspense>}/>
                <Route path='products' element={<Products/>}>
                    <Route path='featured' element={<FeaturedProducts/>}/>
                    <Route path='new' element={<NewProducts/>}/>
                </Route>
                <Route path='order-summary' element={<OrderSummary/>}/>
                <Route path='*' element={<NoMatch/>} />
            </Routes>
        </div>
    );
}

export default App;
