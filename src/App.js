import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { Footer } from 'flowbite-react';
import { BrowserRouter } from 'react-router-dom';







  


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
  