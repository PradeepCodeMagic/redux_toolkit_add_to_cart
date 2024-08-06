'use client'
import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';

export default function Header() {
  const items = useSelector((state)=>state.wish);
  return (
    <Navbar expand="lg" className=" bg-info  ">
      <Container>
        <Navbar.Brand >
          <Link href="/" >Logo</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/Home">Home</Link> &nbsp;&nbsp;
            <Link href="/wishlist">wishlist {items.length} </Link>&nbsp;&nbsp;
            <Link href="/cart"> Cart</Link>&nbsp;&nbsp;
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
