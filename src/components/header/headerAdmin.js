import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
// import Image from "../../../Assets/img";
import Link from "next/link";
// import { useEffect } from "react";


function NavbarComponentAdmin({ search, submitSearch, id }) {
  return (
    <div className=" bg-white">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-2 px-3 d-flex align-content-center flex-wrap justify-content-start">
          <img
            src='/img/fly.png'
            alt="logo"
            style={{ width: "30px", marginRight: "10px" }}
          />
          <Link
            to="/Admin/ticket"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            <h5>Ankasa</h5>
          </Link>
        </div>
        <div className="col-lg-4 d-flex align-content-center flex-wrap">
          {/* <Form.Control
            className=""
            type="search"
            placeholder="Where you want to go?"
            aria-label="Search"
            onChange={search}
            onSubmit={submitSearch}
          />
           */}
          <form onSubmit={submitSearch}>
            <div className="field has-addons d-flex">
              <div className="control is-expanded px-3">
                <input
                  type="search"
                  className="input"
                  id={id}
                  onChange={search}
                  placeholder="Where you want to go?"
                  aria-label="Search"
                  name="search"
                  required
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="control">
                <button
                  type="submit"
                  className="button is-info"
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    src="https://e7.pngegg.com/pngimages/608/913/png-clipart-computer-icons-google-search-symbol-mobile-search-search-for-miscellaneous-logo-thumbnail.png"
                    alt="asas"
                    style={{
                      backgroundColor: "white",
                      width: "20px",
                    }}
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 d-flex justify-content-end px-5">
          <Navbar expand="lg" className="">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              {token ? (
                <div className=" px-lg-4 d-flex justify-content-end">
                  <Button variant="white" style={{ width: "4rem" }}>
                    <Link to="/profile">
                      <img
                        src={profile.photo}
                        alt=""
                        style={{
                          verticalAlign: "middle",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "-5px",
                        }}
                      />
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="d-lg-flex d-flex justify-content-end">
                  <Link to="/login">
                    <Button
                      id="responsive-navbar-nav"
                      className="btn-1 px-lg-4"
                      variant="primary"
                    >
                      Login
                    </Button>
                  </Link>

                  <Link href="/RegisterAdmin">
                    <Button
                      className="btn-1  px-lg-4"
                      variant="outline-primary"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}
export default NavbarComponentAdmin;
