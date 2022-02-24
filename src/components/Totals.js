import SmallCard from "./SmallCard"
import React, { useState, useEffect } from "react";
import Axios from "axios";

let totalProducts = {
    title: 'Total de productos',
    color: 'primary',
    icon: 'fa-film'
}

let totalUsers = {
    title: 'Total de usuarios',
    color: 'success',
    icon: 'fa-award',
}

let totalCategories = {
    title: 'Total de categorias',
    color: 'warning',
    icon: 'fa-user',
}
//let cartProps = [productsInDb, totalAwards, actorsQuantity]
// let cartProps = async () => {
//     let endpoint = "http://localhost:3030/dashboard/products";
//     await axios.get(endpoint).then(res => {
//         productsInDb.quantity = res.data.products.length;
//         console.log(productsInDb.quantity);
//     }).catch(err => console.log(err));

//     return [productsInDb, totalAwards, actorsQuantity]
// }

function Totals() {
    const [cartProps, setCount] = useState([]);
    useEffect(() => {
        Axios({
            url: "http://localhost:3030/dashboard/products",
        })
            .then((response) => {
                //setCount(response.data.products.lenght);
                totalProducts.quantity = response.data.products.length;
                setCount([totalProducts, totalUsers, totalCategories]);
            })
            .catch((error) => {
                console.log(error);
            });

        Axios({
            url: "http://localhost:3030/dashboard/users",
        })
            .then((response) => {
                //setCount(response.data.products.lenght);
                totalUsers.quantity = response.data.users.length;
                setCount([totalProducts, totalUsers, totalCategories]);
            })
            .catch((error) => {
                console.log(error);
            });


        Axios({
            url: "http://localhost:3030/dashboard/categories",
        })
            .then((response) => {
                //setCount(response.data.products.lenght);
                totalCategories.quantity = response.data.categories.length;
                setCount([totalProducts, totalUsers, totalCategories]);
            })
            .catch((error) => {
                console.log(error);
            });

    });
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