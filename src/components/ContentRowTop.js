import React from 'react';
import Totals from './Totals';
import LastProductInDb from './LastProductInDb';
import CategoriasInDb from './CategoriasInDb';
import ProductsInDb from './ProductsInDb';


function ContentRowTop(){
    return(
        <React.Fragment>

				<div className="container-fluid">
					{/* <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div> */}
			
					<Totals />
					<div className='row'>
						<LastProductInDb />
						<CategoriasInDb />
					</div>
					 <ProductsInDb /> 

				</div>


        </React.Fragment>
    )

}
export default ContentRowTop;