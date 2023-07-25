import React, { useState, useEffect, useMemo } from 'react';
import {
  useNavigate,
  Link
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addUser,loginUser } from '../redux/Actions/index';

function Login() {
 
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state
  });

  const signupSuccess = () => toast.success("user added successfully", {
    position: "bottom-right",
    theme: "dark"
  });

  const loginSuccess = () => toast.success("user login successfully", {
    position: "bottom-right",
    theme: "dark"
  });

  const [userinfo, Setuserinfo] = useState([]);
  const [fname, Setfname] = useState('');
  const [lname, Setlname] = useState('');
  const [email, Setemail] = useState('');
  const [cell, Setcell] = useState('');
  const [password, Setpassword] = useState('');
  // const [gender, Setgender] = useState('');
  // const [address, Setaddress] = useState('');
  // const [zipcode, Setzipcode] = useState('');
  // const [city, Setcity] = useState('');
  // const [state, Setstate] = useState('');
  // const [country, Setcountry] = useState('');


  const [username, Setusername] = useState('');
  const [userpassword, Setuserpassword] = useState('');


  const signup = () =>{
    if (fname != '' &&
      lname != '' &&
      email != '' &&
      cell != '' &&
      password != '') {
      const userdata = {
        fname,
        lname,
        email,
        cell,
        password
      }
      Setuserinfo(userdata);
      dispatch(addUser(
        userdata
      ))
      setTimeout(() => {
        Setfname('');
        Setlname('');
        Setemail('');
        Setcell('');
        Setpassword('');
        signupSuccess();
      }, 1000);
  }
}


const login = () =>{
  if (username != '' &&
     userpassword != '' ) {
  const logininfo = {
    username,
    userpassword, 
  }
  dispatch(loginUser(
    logininfo
  ))
  setTimeout(() => {
    Setusername('');
    Setuserpassword('');
    loginSuccess();
  }, 1000);
}
}

// if (username == undefined || username == "") {
//   nameErrSet("username Is required");
// }
// if (password == undefined || password == "") {
//   passErrSet("password Is required");
// }
// else {
//   if (username == localStorage.getItem('username') && password == localStorage.getItem('password')) {
//     history.push('/app/Dashboard');
//   }
//   else {
//     alert("please enter valid credential and you can not login before sign up. please before login you have to sign up :( ");
//   }
// }
  

  useEffect(() => {  
    console.log(data.userAdd.userData);  
  }, [])

  return (
    <div>
      <ToastContainer />
      <div className='container clearfix'>
        <h3>Login</h3>



     
           
              {data.userAdd.userData == null || data.userAdd.userData.length == 0  ? 
              <div style={{ paddingTop: '15px' }}>users Is Empty...</div>
                :
                <div>
                {data.userAdd.userData?.map((item, index) => (
                  <div className="responsive-table">
                  <table className='table'>
                  <thead>
                  <tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>email</th>
                    <th>cell</th>
                    <th>password</th>
                  </tr>
                </thead>
                <tbody>
                      <tr key={index.toString()}>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                        <td>{item.cell}</td>
                        <td>{item.password}</td>
                      </tr>
                      </tbody>
                      </table>
                </div>
                    ))}
                    </div>
              }
            
          


       <div style={{width:'400px',float:'left',padding:'30px',boxSizing:'border-box'}}>
        <h2>Signup</h2>
        <div>
        <label>fname</label>
        <input type="text" value={fname} onChange={(e) => Setfname(e.target.value)} />
        </div>
        <div>
        <label>lname</label>
        <input type="text" value={lname} onChange={(e) => Setlname(e.target.value)} />
        </div>
        <div>
        <label>email</label>
        <input type="email" value={email} onChange={(e) => Setemail(e.target.value)} />
        </div>
        <div>
        <label>cell</label>
        <input type="text" value={cell} onChange={(e) => Setcell(e.target.value)} />
        </div>
        <div>
        <label>password</label>
        <input type="password" value={password} onChange={(e) => Setpassword(e.target.value)} />
        </div>
        <div>
       <button onClick={()=>signup()}>Signup</button>
       </div>
       </div>


       <div style={{width:'400px',float:'left'}}>
       <h2>login</h2>

       <div>
        <label>username</label>
        <input type="text" value={username} onChange={(e) => Setusername(e.target.value)} />
        </div>
        <div>
        <label>userpassword</label>
        <input type="password" value={userpassword} onChange={(e) => Setuserpassword(e.target.value)} />
        </div>
        <div>
       <button onClick={()=>login()}>Login</button>
       </div>
       
       </div>


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

