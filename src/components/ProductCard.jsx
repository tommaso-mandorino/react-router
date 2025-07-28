import { Link, useParams } from 'react-router-dom';



function ProductCard(props) {

    const params = useParams();

    const product = props.productObject;

    return (

        <section className="card h-100">

            <div className="ratio ratio-1x1">

                {

                    params.id === undefined
                    
                        ?

                            <Link to={`/products/${product?.id}`}>

                                <img className="card-img-top h-100 p-5" style={{ objectFit: 'contain' }} src={product?.image} alt={`${product?.title} photo`} />
                            
                            </Link>

                        :
                        
                            <img className="card-img-top h-100 p-5" style={{ objectFit: 'contain' }} src={product?.image} alt={`${product?.title} photo`} />
                
                }

            </div>

            <div className="card-body bg-primary-subtle">

                <div className="py-1">

                    <i className="bi bi-bookmark-fill pe-1"></i>{product?.category}

                </div>

                <div className="text-end text-info-emphasis py-1">

                    <i className="bi bi-star-fill pe-1"></i>{`${product.rating?.rate} (${product.rating?.count})`}

                </div>

                {
                    
                    params.id === undefined
                    
                        ?

                            <Link className='text-decoration-none' to={`/products/${product?.id}`}>

                                <h5 className="card-title text-center text-primary py-1">{product?.title}</h5>
                            
                            </Link>

                        :
                        
                            <h5 className="card-title text-center text-primary py-1">{product?.title}</h5>
                
                }

                <p className="card-text py-1">{product?.description}</p>

                <div className="text-success py-1">

                    <i className="bi bi-tag-fill pe-1"></i>{`${product?.price} $`}

                </div>

            </div>

        </section>


    );

}



export default ProductCard;