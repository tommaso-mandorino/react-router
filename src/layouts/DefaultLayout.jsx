import { Outlet } from 'react-router-dom';



import Header from '../components/Header/Header.jsx';



function DefaultLayout() {

    return (

        <>
        
            <Header />

            <Outlet />

        </>

    );

}



export default DefaultLayout;