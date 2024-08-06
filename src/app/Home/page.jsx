'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../Comman/Header';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/features/wishlist/wishlistSlice';

export default function page() {
    const [data, setData] = useState([])
    let displayData = () => {
        axios.get("https://dummyjson.com/products")
            .then((ress) => {
                // console.log(ress.data.products)
                setData(ress.data.products)

            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        displayData()
    }, [])
    return (

        <>
     
            <Container>
            <div className='text-center'> Home page </div>
            <Row gap={1} sm={2} md={4}  >

                {data.length >= 0 ?
                    data.map((v, i) => {
                        return (
                            <Col> <Product data={v} index={i} /> </Col>
                        )
                    })
                    :
                    "Please wait........."
                }



            </Row>
        </Container>
        </>

    )
}



function Product({ data, index }) {

 
    const dispatch = useDispatch();

    const addtoWishlist = (item) => {
        dispatch(add(item))
      };
 
    return (
        <Card className='my-2' >
            <Card.Img variant="top" src={data.thumbnail} />
            <Card.Body>
                <Card.Title> {data.category} </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary"> price :{data.price} </Button>
                <div className='d-flex justify-content-around mt-2' >
                    <Button variant="btn btn-success">  Cart  </Button>
                    <Button variant="btn btn-danger" onClick={() => addtoWishlist(data)}>   wislist </Button>
                </div>
            </Card.Body>
        </Card>
    );
}


