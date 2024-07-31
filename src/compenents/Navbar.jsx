import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="text-decoration-none">
          <h1 className="navbar-brand text-size-20 fs-3">Education</h1>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-nav me-auto mb-2 mb-lg-0"></Link>
          <form className="d-flex" role="search">
            {loggedIn ? (
              <>
                <button
                  style={{ marginRight: "10px" }}
                  className="btn btn-outline-danger"
                  type="submit"
                >
                  {user.username}
                </button>
                <button className="btn btn-outline-success" type="submit">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button
                    className="btn btn-outline-primary"
                    style={{ marginRight: "10px" }}
                    type="submit"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-outline-success" type="submit">
                    Register
                  </button>
                </Link>
              </>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
