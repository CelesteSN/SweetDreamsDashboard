import ChartRow from './ChartRow';
import Axios from "axios";
import React, { useState, useEffect } from "react";

function ProductsInDb(){
const [productsList, setproductsList] = useState([]);

    useEffect(() => {


        Axios({
            url: "http://localhost:3030/dashboard/products",
        })
            .then((response) => {
                let listProd = response.data.products;
                setproductsList(listProd);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

        return (
  
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                <h5 className="m-0 font-weight-bold text-gray-800"> Listado de productos </h5>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descuento</th>
                                <th>Categoria</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                    

                        {

productsList.map((product, index)=> {


    return <ChartRow  {...product} key = {index} />


})

}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default ProductsInDb;