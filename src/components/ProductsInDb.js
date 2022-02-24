import React, { Component } from "react";
import ChartRow from './ChartRow';
import axios from "axios";

class ProductsInDb extends Component {
    constructor(props){
        super(props)
        this.state = {

           productsList : []

        }
    }



    componentDidMount(){
let endpoint = "http://localhost:3030/dashboard/products";
console.log("didMount");
        axios.get(endpoint).then(res=>{
            console.log("products", res.data.products)
            this.setState({productsList : res.data.products})
            }).catch(err=>console.log(err));

        
    }


    render() {

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

                        this.state.productsList.map(product=> {
<td>
<tr key = {product.prod_id}>{product.name}</tr>
</td>

                            // <ChartRow  {...product} key = {index} />


                        })

                    }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
}

export default ProductsInDb;