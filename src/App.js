import React from 'react';
import './App.css';
import RouterComponents from './Router/Router';
import ProductsContextProvider from './components/Context/ProductsContext';


function App() {

  /*return (
    <router className="App">
     <Header/>
     <Container/>
     <Button />
    </router>
  );*/
  return(
    <ProductsContextProvider>
    <RouterComponents />
    </ProductsContextProvider>
    )
}

export default App;
