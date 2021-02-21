import navStyles from '../styles/Nav.module.css'
import {Navbar, Nav, NavDropDown, NavbarBrand } from 'react-bootstrap'

const CustomNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className={navStyles.nav}>
            {/* <NavbarBrand>Welcome</NavbarBrand> */}
        </Navbar>
    )
}

export default CustomNav