//Re: Spelling
//Bootstrap reserves "navbar", thus camelcasing file name: NavBar

"use client";

import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import { usePathname } from "next/navigation"; //not next/router

//navBar = client component

export default function NavBar() {
    //Router functionality in 3 Router hooks:
    //useRouter, useSearchparams, and usePathname
    //useRouter: programmatically navigate between pages
    //usePathname: access URL's pathname, is a string
    //useSearchparams: accesses after ? in URL
    const pathname = usePathname(); //type String, can get current path
    //Below, in Nav.Link, active={pathname} checks if user's pathname is equal to /hello
    //If it is, the menu item is set to Active and text is highlighted / If it isn't, the text remains dimmed

    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href="/">
                    Next-Test Image gallery
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link as={Link} href="/static" active={pathname === "/static"}>Static</Nav.Link>
                        <Nav.Link as={Link} href="/dynamic" active={pathname === "/dynamic"}>Dynamic</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}