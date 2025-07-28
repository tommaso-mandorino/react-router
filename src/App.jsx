import { BrowserRouter, Routes, Route } from 'react-router-dom';



import DefaultLayout from './layouts/DefaultLayout.jsx';
import HomePage      from './pages/HomePage';
import AboutUs       from './pages/AboutUs';
import Products      from './pages/Products';



function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<DefaultLayout />}>

          <Route index           element={<HomePage />} />

          <Route path="about"    element={<AboutUs />}  />

          <Route path="products" element={<Products />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}



export default App;