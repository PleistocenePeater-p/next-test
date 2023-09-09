//Re: Spelling
//Bootstrap reserves "navbar", thus camelcasing file name: NavBar

"use client";

import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

//navBar = client component

export default function NavBar() {
    return (
        <Navbar 
        bg="primary" 
        variant="dark" 
        sticky="top" 
        expand="sm"
        collapseOnSelect
        >
            <Container>
                <Navbar.Brand as={Link} href="/">
                    Next-Test Image gallery
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link as={Link} href="/hello">Hello page</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}