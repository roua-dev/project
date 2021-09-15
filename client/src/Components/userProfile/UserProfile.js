import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import UpdateUser from "./UpdateUser";

const UserProfile = () => {
  const { user, isAuth, loading } = useSelector((state) => state.userReducer);
  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : !isAuth ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <Card>
            <Card.Body>
              <Card.Text>{user.name}</Card.Text>

              <Card.Text>{user.lastName}</Card.Text>
              <Card.Text>{user.email}</Card.Text>
            </Card.Body>
            <UpdateUser
        user={user}
        id={user._id}
      />
          </Card>
        </div>
      )}
     
    </div>
  );
};

export default UserProfile;
