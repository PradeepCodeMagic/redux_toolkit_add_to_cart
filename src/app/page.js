"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Comman/Header";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Api from "./Api";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { add } from "./redux/features/cartWork/cartSlice";

export default function Home() {

  return (
    <>

      <Container>
        <h2 className="text-center py-3" > Welcome to Surya Namkeen </h2>


        <Row gap={1} sm={2} md={3}  >

          {Api.length >= 0 ?
            Api.map((v, i) => {
              return (
                <Col> <Product element={v} index={i} /> </Col>
              )
            })
            :
            "Please wait........."
          }



        </Row>

      </Container>

    </>
  );
}

function Product({ element, index }) {
  let dispatch=useDispatch()

  let AddToCart=(product)=>{
    dispatch(add(product))

    // toast.success('Add item successfully',{
    //   style:{
    //     positiona:"absulate",
    //     top:"15%",
    //     left:"-50%"
       
    //   }
    // });
  }

 


  return (
    <>
      <Card className='myBox mb-4 p-2 '>
      <Card.Img variant='top' className='cd' src={element.imgdata} />

      <div className="card_body p-2">
        <div className="upper_data d-flex justify-content-between align-items-center">
          <h4 className='mt-2'>{element.dish}</h4>
          <span>{element.rating}&nbsp;★</span>
        </div>

        <div className="lower_data d-flex justify-content-between ">
          <h5>{element.address}</h5>
          <span>₹ {element.price}</span>
        </div>
        <div className="extra"></div>

        <div className="py-2 last_data d-flex justify-content-between align-items-center">
          <img src={element.arrimg} className='limg' alt="" />
          <Button style={{ width: "150px", background: "#ff3054db", border: "none" }} variant='outline-light'
            className='mt-2 mb-2'
           onClick={()=>AddToCart(element)}
          >Add TO Cart</Button>
          <img src={element.delimg} className='laimg' alt="" />

        </div>
      </div>
    </Card>
    {/* <ToastContainer /> */}
    </>
  );
}
