'use client'
import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Header() {
  const allCartItem = useSelector((state)=>state.cart.cartItem);

  return (
   <>
   <Container fluid className='bg-black py-3' >
   <Container>
      <div className='d-flex justify-content-between text-white'>
        <div className='fs-2'> 
            <Link href="/" className='text-white text-decoration-none'> Ecommerce </Link>
         </div>
        <div className='fs-2'> 
        <Link className='text-white text-decoration-none' href="/cart" >
        <FaShoppingCart /> {allCartItem.length>0 ? <sup className='fs-6 bg-danger rounded-circle p-1 '>{allCartItem.length}  </sup> : ""} 
        </Link>
         </div>
      </div>
    </Container>
   </Container>
   
   </>
  )
}
