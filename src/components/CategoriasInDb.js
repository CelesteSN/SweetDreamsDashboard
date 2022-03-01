import Categoria from "./Categoria";
import Axios from "axios";
import React, { useState, useEffect } from "react";


function CategoriasInDb() {

    const [categoriesList, setcategoriesList] = useState([]);

    useEffect(() => {


        Axios({
            url: "http://localhost:3030/dashboard/categories",
        })
            .then((response) => {
                let listCategProd = response.data.categories;

                Axios({
                    url: "http://localhost:3030/dashboard/products",
                })
                    .then((response) => {
                        let products = response.data.products;
                        listCategProd.forEach(element => {
                            let productsByCateg = products.filter(item => item.prod_categ_id === element.prod_categ_id)
                            element.productsCount = productsByCateg.length;
                        });
                        setcategoriesList(listCategProd);
                    })
                    .catch((error) => {
                        console.log(error);
                    })

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);




    return (

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800"> Categorias de productos </h5>
                </div>
                <div className="row" style={{ paddingTop: 26 }}>

                    {

                        categoriesList.map((categoria, index) => {

                            return <Categoria  {...categoria} key={index} />

                        })

                    }
                </div>
            </div>



        </div>

    )

}

export default CategoriasInDb