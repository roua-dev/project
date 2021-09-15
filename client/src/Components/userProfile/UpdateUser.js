import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { modifiedUser } from '../../js/actions/userActions'

const UpdateUser = ({ user}) => {

  
    const dispatch = useDispatch()
    const [name, setName] = useState(user.name)
    const [lastName, setLastName] = useState(user.lastName)
    const [email, setEmail] = useState(user.email)
    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseModal =(e)=>{
        e.preventDefault()
        dispatch(modifiedUser(user._id,{name,lastName,email}))
        handleClose()
    }

    

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>Update Profile</Button>
             <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>update your profile</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Form.Control
            type="text"
            placeholder="please enter your name "
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
           <Form.Control
            type="text"
            placeholder="please entre your last name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
           <Form.Control
            type="text"
            placeholder="please enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
    )
}

export default UpdateUser
