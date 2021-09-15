import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { modifiedProduct } from "../../js/actions/productAction";


const UpdateProduct = ({product,id}) => {
    const dispatch = useDispatch()
    const [Article, setArticle] = useState(product.Article)
    const [Image, setImage] = useState(product.Image)
    const [Description, setDescription] = useState(product.Description)
    const [Price, setPrice] = useState(product.Price)
    const [Category, setCategory] = useState(product.Category)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseModal = (e)=>{
      e.preventDefault()
        dispatch(modifiedProduct(product._id,{Article,Image,Description,Price,Category}))
        handleClose()
    }
    const user = useSelector(state => state.userReducer.user)
  return (
    <div>
      {
        user && user._id === "606b10ac0e58092aa030ff13" ?
        <Button variant="primary" onClick={handleShow}>Update</Button> : null
      }
      <Modal show={show}   onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modified Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Article"
            onChange={(e) => setArticle(e.target.value)}
            value={Article}
          />
          <Form.Control
            type="text"
            placeholder="Image"
            onChange={(e) => setImage(e.target.value)}
            value={Image}
          />
          <Form.Control
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={Description}
          />
          <Form.Control
            type="text"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={Price}
          />
          <Form.Control
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={Category}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
