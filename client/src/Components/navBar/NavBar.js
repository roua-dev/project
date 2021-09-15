import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../js/actions/userActions";

const NavBar = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector(state => state.userReducer.user)
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Forsa.tn</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Products
          </Link>
          <Link className="nav-link" to="/profile">
            UserProfile
          </Link>
          <Link className="nav-link" to="/product">
          {" "}
            Product{" "}
          </Link>
          { user && user._id === "606b10ac0e58092aa030ff13" ? 
          <Link className="nav-link" to="/users">
           Users
          </Link> : null
        }

{ user && user._id === "606b10ac0e58092aa030ff13" ? 
          <Link className="nav-link" to="/admin">
            Admin
          </Link> : null
        }

        </Nav>
      



        {isAuth ? (
          <Link to="/login">
            <Button variant="outline-info" onClick={logoutUser}>
              Logout
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button variant="outline-info">Login</Button>
          </Link>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
