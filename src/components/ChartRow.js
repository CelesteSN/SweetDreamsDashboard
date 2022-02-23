import React from 'react';


function ChartRow(props){

  

    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.discount}</td>
                    <td>{props.product_categ_id} </td>
                    <td>{props.description}</td>
                </tr>
            )
    }
    
        

export default ChartRow;