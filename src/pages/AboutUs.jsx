import { Link } from 'react-router-dom';



function AboutUs() {

    return (

        <>

            <div className="container my-5 text-center">

                <h1 className="text-primary">About Us</h1>

                <p className="fs-4 py-5">

                    We are a new online store founded in 2025 aiming to sell useful products for everyone.

                    <br />

                    Our pricese are very competitive and our products have the best quality on the market!

                    <br />

                    <br />

                    <Link className="btn btn-primary" to="/products">Start shopping!</Link>

                </p>

            </div>

        </>

    );

}



export default AboutUs;