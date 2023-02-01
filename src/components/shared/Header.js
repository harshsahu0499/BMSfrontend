import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";
import logo from "./Capture.PNG";
import AuthContext from "../../context/AuthContext";


const Header = () => {
    const [user, setUser] = useContext(AuthContext);
    return (
        <React.Fragment>
            <Navbar  expand="lg" className={classes.bg_nav} >
                <Navbar.Brand href="/" className={[classes.Brand, classes.nav_text]}>
                    <div className={classes.nav_logo} class="cent">
                        <img src={logo} alt="Logo"  />
                    </div>
                    {/* Movies App */}
                </Navbar.Brand>

            </Navbar>
        </React.Fragment>
    );
};
export default Header;
