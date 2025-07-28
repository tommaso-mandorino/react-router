import { BrowserRouter, Routes, Route } from 'react-router-dom';



import HomePage from './pages/HomePage';
import AboutUs  from './pages/AboutUs';
import Products from './pages/Products';



function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" Component={HomePage} />

        <Route path="/about" Component={AboutUs} />

        <Route path="/products" Component={Products} />

      </Routes>

    </BrowserRouter>

  );

}



export default App;