import useProducts from "../hooks/useProducts.js";



function Products() {

    const products = useProducts();

    return (

        <main>

            <div className="container my-5">

                <h1 className="text-center text-primary">
                    
                    <i class="bi bi-bag-fill pe-3"></i>

                    <span>Our Products</span>
                    
                </h1>

                <div className="container">

                    <div className="row py-5">

                        {

                            products?.map(product => {

                                return (

                                    <div key={`product-${product.id}`} className="col col-lg-6 col-xxl-4 g-3">

                                        <div className="card h-100">

                                            <div className="ratio ratio-1x1">

                                                <img className="card-img-top h-100 p-5" style={{objectFit: 'contain'}} src={product.image} alt={`${product.title} photo`} />

                                            </div>

                                            <div className="card-body bg-primary-subtle">

                                                <div className="py-1">

                                                    <i class="bi bi-bookmark-fill pe-1"></i>{product.category}
                                                    
                                                </div>

                                                <div className="text-end text-info-emphasis py-1">

                                                    <i className="bi bi-star-fill pe-1"></i>{`${product.rating.rate} (${product.rating.count})`}
                                                    
                                                </div>

                                                <h5 className="card-title text-center text-primary py-1">{product.title}</h5>

                                                <p className="card-text py-1">{product.description}</p>

                                                <div className="text-success py-1">
                                                    
                                                    <i class="bi bi-tag-fill pe-1"></i>{`${product.price} $`}
                                                    
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                );

                            })

                        }

                    </div>

                </div>

            </div>

        </main>

    );

}



export default Products;