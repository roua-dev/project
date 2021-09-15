import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import { addProduct } from '../../js/actions/productAction';



const AddProduct = ({show, handleClose}) => {
    const dispatch = useDispatch()
    const [Article , setArticle ] = useState("")
    const [Image, setImage] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState("")
    const [Category, setCategory] = useState("")

    
const handleCloseModal  = () =>{
    dispatch(addProduct({Article,Image,Description,Price,Category,id:Math.random()}));
    handleClose(); 
}

    return (
        <div>
        <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Add  Product</Modal.Title>
              </Modal.Header>
              <Modal.Body> 
              <Form.Control type="text" placeholder="Category" onChange={e=>setCategory(e.target.value)} value={Category} />
              <Form.Control type="text" placeholder="Article" onChange={e=>setArticle(e.target.value)} value={Article} />
              <Form.Control type="text" placeholder="Image"  onChange={e=>setImage(e.target.value)}  value={Image} />
              <Form.Control type="text" placeholder="Description" onChange={e=>setDescription(e.target.value)} value={Description} />
              <Form.Control type="text" placeholder="Price" onChange={e=>setPrice(e.target.value)} value={Price} />
              
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
    )
}

export default AddProduct
