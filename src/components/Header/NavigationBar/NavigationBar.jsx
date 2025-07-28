import { NavLink } from 'react-router-dom';



function NavigationBar() {

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">

            <div className="container-fluid">

                <NavLink className="navbar-brand text-primary d-flex align-items-center" to="/">

                    <img src="/react.svg" alt="React logo" />

                    <span className="ps-1">React Router Store</span>
                    
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">

                            <NavLink className="nav-link" to="/">
                            
                                <i class="bi bi-house-door-fill pe-1"></i>
                                
                                <span>Home</span>
                                
                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink className="nav-link" to="/products">

                                <i class="bi bi-bag-fill pe-1"></i>
                            
                                <span>Products</span>
                            
                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink className="nav-link" to="/about">

                                <i class="bi bi-building-fill pe-1"></i>
                            
                                <span>About Us</span>
                            
                            </NavLink>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );

}



export default NavigationBar;