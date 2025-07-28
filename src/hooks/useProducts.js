import { useState, useEffect } from 'react';



import fetchData from '../api/fetchData.js';
import endpoints from '../constants/endpoints.js';



function useProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchData(endpoints.fakeStoreApi.products, setProducts);

    }, []);

    return products;

}



export default useProducts;