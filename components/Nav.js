import navStyles from '../styles/Nav.module.css'
import Link from "next/link";
import {Navbar, Nav, NavDropDown, NavbarBrand } from 'react-bootstrap'

const CustomNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className={navStyles.nav}>
            <Link href="/"> 
                <a>
                    <NavbarBrand>Home</NavbarBrand>
                </a>
            </Link>
        </Navbar>
    )
}

export default CustomNav