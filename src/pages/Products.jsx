import useProducts from "../hooks/useProducts.js";



import ProductCard from '../components/ProductCard.jsx';



function Products() {

    const products = useProducts();

    return (

        <main>

            <div className="container py-5">

                <h1 className="text-center text-primary">
                    
                    <i className="bi bi-bag-fill pe-3"></i>

                    <span>Our Products</span>
                    
                </h1>

                <div className="row py-5">

                    {

                        products?.map(product => {

                            return (

                                <div key={`product-${product.id}`} className="col col-lg-6 col-xxl-4 g-3">
                                    
                                    <ProductCard productObject={product} />

                                </div>

                            );

                        })

                    }

                </div>

            </div>

        </main>

    );

}



export default Products;