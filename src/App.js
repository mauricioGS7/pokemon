import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Info from './components/Info';
import Buscar from './components/Buscar';
import Vertodos from './components/Vertodos';
import Detalles from './components/Detalles';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route  index element={<Info/>}/>
          <Route path='/buscar' element={<Buscar/>}/>
          <Route path='/vertodos' element={<Vertodos/>}/>     
          <Route path='/vertodos/detalles/:id' element={<Detalles/>}/>      
        </Route>  
             
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
