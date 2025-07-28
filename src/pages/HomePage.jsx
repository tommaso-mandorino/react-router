import { Link } from 'react-router-dom';



function HomePage() {

    return (

        <main>

            <div className="container my-5 text-center">

                <h1 className="text-primary">React Router Store</h1>

                <div className="py-5">

                    <h2 className="text-success">Welcome to this online store!</h2>

                    <br />

                    <h3 className="text-primary-emphasis"><Link to="/products">Here</Link> you will find different products for all your needs!</h3>

                </div>

            </div>

        </main>

    )

}



export default HomePage;