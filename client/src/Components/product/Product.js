import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = ({ match }) => {
  const products = useSelector(state => state.productReducer.products)
  return (
    <div  className=" mx-auto mt-2 ">
      {products
        .filter((product) => product._id === match.params.id)
        .map((product) => (
          <Card
            style={{ width: "18rem" }}
            key={product._id}
            className="card :hover"
          >
            <Card.Img
              variant="top"
              src={product.Image}
              
            />
            <Card.Body>
              <Card.Title>{product.Article}</Card.Title>
              <Card.Text>{product.Price}</Card.Text>
              <Card.Text>{product.Description}</Card.Text>
              <Link to="/">
                <Button variant="primary">Back to Products</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      ;
    </div>
  );
};

export default Product;
