import React from "react"
import SmallCard from "./SmallCard"
    



let productsInDb = {

    title: 'Total de productos',
    color: 'primary',
    icon: 'fa-film',
    quantity: 21

}

let totalAwards = {

    title: 'Total de usuarios',
    color: 'success',
    icon: 'fa-award',
    quantity: 79
}

let actorsQuantity = {
    title: 'Total de categorias',
    color: 'warning',
    icon: 'fa-user',
    quantity: 49
}


let cartProps = [productsInDb, totalAwards, actorsQuantity]




function ContentRowMovies () {

    return (

        <div className="row">

        {cartProps.map( (product, i) => {

            return <SmallCard {...product} key={i}/>

        })}

        </div>
  

    

    )
}

export default ContentRowMovies; 