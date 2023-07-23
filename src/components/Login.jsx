import React, { useState, useEffect, useMemo } from 'react';
import {
  useNavigate,
  Link
} from "react-router-dom";

function Login() {
 
  let navigate = useNavigate();

  useEffect(() => {
  }, [])

  return (
    <div>
      <div className='container'>
        <h3>Login</h3>
      </div>
    </div>
  );
}

export default Login;


// i have json data map to shopping cart react js
// then i want  to click shopping cart box
// then i want  to click shopping cart specific box
// ok then i want  to click shopping cart specific box and others cart box button disabled











// import React, { useState } from 'react';
// import { Card } from 'react-bootstrap';

// const ShoppingCart = ({ products }) => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleClick = (product) => {
//     setSelectedProduct(product);
//   };
 
//   return (
//     <div>
//       {products.map((product) => (
//         <Card
//           key={product.id}
//           onClick={() => handleClick(product)}
//           disabled={selectedProduct && selectedProduct.id !== product.id}
//         >
//           <Card.Body>
//             <Card.Title>{product.name}</Card.Title>
//             <Card.Text>{product.description}</Card.Text>
//             <Card.Text>{product.price}</Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//       {selectedProduct && (
//         <div>
//           <h3>{selectedProduct.name}</h3>
//           <p>{selectedProduct.description}</p>
//           <p>{selectedProduct.price}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShoppingCart;



// https://contactmentor.com/filter-list-by-category-react-js/

