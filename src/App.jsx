import { BrowserRouter, Routes, Route } from 'react-router-dom';



import DefaultLayout from './layouts/DefaultLayout.jsx';

import HomePage      from './pages/HomePage.jsx';
import AboutUs       from './pages/AboutUs.jsx';
import Products      from './pages/Products.jsx';
import Product       from './pages/Product.jsx';



function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<DefaultLayout />}>

          <Route index               element={<HomePage />} />

          <Route path="about"        element={<AboutUs  />} />

          <Route path="products"     element={<Products />} />

          <Route path="products/:id" element={<Product  />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}



export default App;