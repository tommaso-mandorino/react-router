import { useState, useEffect } from 'react';



import fetchData from '../api/fetchData.js';
import endpoints from '../constants/endpoints.js';



function useProduct(id) {

    const [product, setProduct] = useState({});

    useEffect(() => {

        fetchData(`${endpoints.fakeStoreApi.product}/${id}`, setProduct);

    }, []);

    return product;

}



export default useProduct;