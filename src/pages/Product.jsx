import { useParams } from 'react-router-dom';



import useProduct from '../hooks/useProduct.js';



import ProductCard from '../components/ProductCard.jsx';



function Product() {

    const {id} = useParams();

    const product = useProduct(id);

    return (

        <main>
        
            <div className="container py-5 w-50">

                <h1 className="text-center text-primary pb-5">
                    
                    <i className="bi bi-info-square-fill pe-3"></i>

                    <span>Product details</span>

                </h1>

                <ProductCard productObject={product} />

            </div>
        
        </main>

    );

}



export default Product;