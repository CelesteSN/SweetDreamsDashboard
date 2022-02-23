import React, { Component } from "react";
import Categoria from "./Categoria";


class CategoriasInDb extends Component {
    constructor(){
        super()
        this.state = {

            categoriasList : []

        }
    }

    componentDidMount(){

        fetch("http://localhost:3030/dashboard/categories", {
            mode: 'no-cors'
          })       
        .then(categorias =>{
            console.log(categorias)
            this.setState(categorias.data)
        })
        .catch(error => console.log(error))

    }


render () {

    return (
         
        <div className="col-lg-6 mb-4">						
					<div className="card shadow mb-4">
							<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800"> Categorias de productos </h5>
                            </div>
                    <div className="row" style={{paddingTop: 26}}>

                            {
                            
                                this.state.categoriasList.map((categoria, index)=> {

                                 return <Categoria  {...categoria} key = {index} />

                                })
                                             
                             }
                    </div>
                    </div>

                          
						
        </div>
        
    )

}
}



export default CategoriasInDb