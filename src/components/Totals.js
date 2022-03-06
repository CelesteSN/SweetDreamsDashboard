import SmallCard from "./SmallCard"
import React, { useState, useEffect } from "react";
import Axios from "axios";

let totalProducts = {
    title: 'Total de productos',
    color: 'primary',
    icon: 'fa-cookie-bite',
}

let totalUsers = {
    title: 'Total de usuarios',
    color: 'success',
    icon: 'fa-user',
}

let totalCategories = {
    title: 'Total de categorias',
    color: 'warning',
    icon: 'fa-list-ul',
}

function Totals() {
    const [cartProps, setCount] = useState([totalProducts, totalUsers, totalCategories]);
    useEffect(() => {
        Axios({
            url: "http://localhost:3030/dashboard/products",
        })
            .then((response) => {
                totalProducts.quantity = response.data.products.rows.length;
                setCount([totalProducts, totalUsers, totalCategories]);
            })
            .catch((error) => {
                console.log(error);
            });

         Axios({
            url: "http://localhost:3030/dashboard/users",
         })
            .then((response) => {
                 totalUsers.quantity = response.data.users.rows.length;
                 setCount([totalProducts, totalUsers, totalCategories]);
             })
             .catch((error) => {
                 console.log(error);
            });


        Axios({
            url: "http://localhost:3030/dashboard/categories",
        })
            .then((response) => {
                totalCategories.quantity = response.data.categories.rows.length;
                setCount([totalProducts, totalUsers, totalCategories]);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <div className="row">
            {
                cartProps.map((item, i) => {

                    return <SmallCard {...item} key={i} />

                })}
        </div>
    )
}

export default Totals; 