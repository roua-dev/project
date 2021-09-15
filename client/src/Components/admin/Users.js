import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { deleteUser } from '../../js/actions/userActions';


const Users = () => {

  const dispatch = useDispatch();
    const users = useSelector((state) => state.productReducer.users);
    return (
        <div>
           {users && users.map((user)=>(
                <Card  key={user._id}>
                <Card.Body>
                <Card.Title> { user && user.name} </Card.Title>
                  <Card.Text>{user && user.lastName}</Card.Text>
    
                  <Card.Text>{ user && user.email}</Card.Text>

                  <Button
                  variant="primary"
                  onClick={() => dispatch(deleteUser(user._id))}
                >
                  Delete
                </Button> 
                </Card.Body>
                </Card>
               ))
           }
        </div>
    )
}

export default Users
