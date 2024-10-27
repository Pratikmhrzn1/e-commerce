import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../src/assets/images/logo.png.png";
import CountryDropdown from "./CountryDropdown";
import Button from "@mui/material/Button";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Welcome to VibeMart. In this store you will find all the items you
              are looking for so feel free to search for all the necessary
              items. #enjoyShopping.
            </p>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper col-sm-3">
              <Link to={"/"}>
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
              <CountryDropdown />
              <SearchBox />
              <div className="part3 d-flex align-items-center">
                <Button className="circle mr-3">
                  <FiUser />
                </Button>
                <div className="ml-auto cartTab d-flex align-items-center">
                  <span className="price">$3.49</span>
                  <div className="position-relative">
                    <Button className="circle ml-2">
                      <IoBagOutline />
                    </Button>
                    <span className="count d-flex align-items-center justify-content-center">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
