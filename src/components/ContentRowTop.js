import React from 'react';
import Totals from './Totals';
import LastProductInDb from './LastProductInDb';
import CategoriasInDb from './CategoriasInDb';
import ProductsInDb from './ProductsInDb';


function ContentRowTop() {
	return (
		<div className="container-fluid">
			<Totals />
			<div className='row'>
				<LastProductInDb />
				<CategoriasInDb />
			</div>
			<ProductsInDb />
		</div>
	)

}
export default ContentRowTop;