import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';







  


function App() {
    return (<>
    <BrowserRouter basename={"/"}>
        <Header />
        <Home />
        <Footer />
    </BrowserRouter>
    </>);
}
  
export default App;
  