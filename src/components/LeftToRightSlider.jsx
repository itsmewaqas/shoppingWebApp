import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  useNavigate,
  Link
} from "react-router-dom";

function LeftToRightSlider() {
 
  let navigate = useNavigate();

  const ref = useRef(null);

  const data = ['Branch1', 'Branch2', 'Branch3', 'Branch4', 'Branch5', 'Branch6', 'Branch7', 'Branch8', 'Branch9'];

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
  }, [])

  return (
    <div>
      <div className='container'>
        <h3>LeftToRightSlider</h3>

        <button onClick={() => scroll(-20)}>LEFT</button>
    <button onClick={() => scroll(20)}>RIGHT</button>
    <div ref={ref} className='scrolleItems'>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>


      </div>
    </div>
  );
}

export default LeftToRightSlider;


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

