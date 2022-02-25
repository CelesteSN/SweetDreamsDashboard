//import imagenFondo from '../assets/images/mandalorian.jpg';
import React, { useState, useEffect } from "react";
import Axios from "axios";


function LastProductInDb() {
    const [lastproduct, setLastProduct] = useState([]);

    useEffect(() => {


        Axios({
            url: "http://localhost:3030/dashboard/products",
        })
            .then((response) => {
                let lastProd = response.data.products[response.data.products.length - 1];
                console.log(lastproduct);
                setLastProduct(lastProd)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>

            {/*<!-- Last Movie in DB -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto agregado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <h3>{lastproduct.name}</h3>
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src= {"http://localhost:3030"+lastproduct.image} alt="No hay imagen de fondo" />
                        </div>
                        <p>{lastproduct.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver datalle</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LastProductInDb;