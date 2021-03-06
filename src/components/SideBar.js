import React from 'react';
import image from '../assets/images/logo-sweet-dreams-brand.png';
import {Route, Routes, Link} from 'react-router-dom'




import Error404 from './Error404';
import CategoriasInDb from './CategoriasInDb';
import ProductsInDb from './ProductsInDb';
import Totals from './Totals';
import CategoriesDetail from './CategoriesDetail';
import ContentWrapper from './ContentWrapper';
import SearchMovies from './SearchMovies';




function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Sweet Dreams"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tasks"></i>
                        <span>Sweet Dreams - Dashboard </span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                     <Link className="nav-link collapsed" to="/stats">
                        <i className="fas fa-fw fa-chart-bar"></i>
                        <span>Estadísticas</span>
                    </Link>
                    
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/categories">
                        <i className="fas fa-fw fa-list-ul"></i>
                        <span>Categorías</span>
                    </Link>
                </li>
                

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/table">
                        <i className="fas fa-fw fa-cookie"></i>
                        <span>Productos</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                {/* <li className="nav-item nav-link">
                    <Link className="nav-link" to="/SearchMovies">
                        <i className="fas fa-search"></i>
                        <span>Search a movie</span>
                    </Link>
                </li> */}
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            


    <Routes>
          
        <Route path="/" element = {<ContentWrapper />} />
        <Route path="/stats" element = {<div className='col-8'> <Totals /></div>} />
        <Route path="/categories" element =  {<CategoriasInDb />} />
        <Route path="/table" element = {<ProductsInDb />} />
        <Route path="/categories/:id" element = {<CategoriesDetail />} />
        <Route path="/search" element = {<SearchMovies />} />


          {/*<Route path='*' element= {<Error404 />} /> */}

    </Routes>




        </React.Fragment>
    )
}
export default SideBar;