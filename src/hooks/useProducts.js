import { useState, useEffect } from 'react';

import endpoints from '../constants/endpoints.js';

import fetchData from '../api/fetchData.js';



function useProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchData(endpoints.fakeStoreApi.products, setProducts);

    }, []);

    return products;

}



export default useProducts;