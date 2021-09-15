import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { deleteProduct } from "../../js/actions/productAction";
import AddProduct from "../admin/AddProduct";
import UpdateProduct from "../admin/UpdateProduct";


const Products = ({handleChange}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector(state => state.userReducer.user)
  const [search, setSearch] = useState("")
  return (
    <div>
       <div className="">
       { user &&  user._id !== "606b10ac0e58092aa030ff13" ?
       <input type="text" className="mt-2"
       onChange={(e)=>setSearch(e.target.value)} value={search}
       placeholder="Search products" /> : null
        } 
      { user &&  user._id === "606b10ac0e58092aa030ff13" ?
       <Button variant="outline-info" className="mt-2" onClick={handleShow}>
       Add Product
     </Button>  
      : null
      }
     
       </div>
       <div className=" row ">
        {products.filter(product => product.Category.toUpperCase().includes(search.toUpperCase())).map((product) => (
          <Card
            className=" col-md-2  mt-3 mx-auto  "
            key={product._id}
            style={{ width: "18rem" , animation: "ease-in-out" }}
          >
            

            <Card.Img variant="top" src={product.Image} />
            <Card.Body>
              <Card.Title> {product.Article} </Card.Title>
              <Card.Text>{product.Description}</Card.Text>

              <Card.Text>{product.Price}</Card.Text>
              <Card.Text>{product.Category}</Card.Text>
              <div>
              {  user &&  user._id === "606b10ac0e58092aa030ff13" ? <Button
                  variant="primary"
                  onClick={() => dispatch(deleteProduct(product._id))}
                >
                  Delete
                </Button> : null 
              }

              { user &&  user._id !== "606b10ac0e58092aa030ff13" ?
                <Link to={`/product/${product._id}`}><Button variant="primary">more</Button></Link> 
                : null
              }
              </div>
            </Card.Body>
            <UpdateProduct
              show={show}
              handleClose={handleClose}
              product={product}
              id={product._id}
            />
          </Card>
        ))}
        <AddProduct show={show} handleClose={handleClose} />
        
      </div>
      
    </div>
  );
};

export default Products;
