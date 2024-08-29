'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, decrementQuantity, incrementQuantity, remove,clearAll } from '../redux/features/cartWork/cartSlice';

export default function WishlistPage() {
    let dispatch=useDispatch()

    const allCartItem = useSelector((state)=>state.cart.cartItem);

        let deletedWork=(id)=>{
            dispatch(remove(id))
        }
        let increment=(id)=>{
            dispatch(incrementQuantity(id))
        }
        let decrement=(id)=>{
            dispatch(decrementQuantity(id))
        }
        let emptyCart=()=>{
            dispatch(clearAll())
        }
    
    return (
      <>
         <div className='row justify-content-center m-0'>
                <div className='col-md-8 mt-5 mb-5 cardsdetails'>
                    <div className="card">
                        <div className="card-header bg-dark p-3">
                            <div className='card-header-flex'>
                                <h5 className='text-white m-0'>Cart Calculation</h5>
                                <button className='btn btn-danger mt-0 btn-sm' onClick={emptyCart} >
                                    <i className='fa fa-trash-alt mr-2'></i><span>EmptyCart</span>
                                </button>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <table className='table cart-table mb-0'>
                                <tbody>
                                    <tr>
                                        <td colSpan={6}>
                                            <div className='cart-empty'>
                                                <i className='fa fa-shopping-cart'></i>
                                                <p>Your Cart Is Empty</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className='table cart-table mb-0 table-responsive-sm'>
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Delete</th>
                                        <th className='text-right'> <span id="amount" className='amount'>Total Amount</span></th>
                                    </tr>
                                </thead>
                                <tbody>

                                {allCartItem.map((v,i)=>{
                                    return(
                                        <tr>
                                        <td>
                                            <button className='prdct-delete'>
                                                {i+1}
                                            </button>
                                        </td>
                                        <td><div className='product-img'><img src={v.imgdata} alt="" /></div></td>
                                        <td><div className='product-name'><p> {v.dish} </p></div></td>
                                        <td> ₹  {v.price}</td>
                                        <td>
                                            <div className="prdct-qty-container">
                                                <button className='prdct-qty-btn' onClick={()=>decrement(v.id)} type='button'>
                                                   -
                                                </button>
                                                <input type="text" className='qty-input-box' value={v.qnty} disabled name="" id="" />
                                                <button className='prdct-qty-btn' type='button' onClick={()=>increment(v.id)} >
                                                   +
                                                </button>
                                            </div>
                                        </td>
                                        <td ><button onClick={()=>deletedWork(v.id)}  class="btn btn-danger">Delete</button></td>
                                        <td className='text-right'>₹ {(v.price)*(v.qnty)}  </td>
                                    </tr>
                                    )
                                })}
                                    
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th colSpan={3}>&nbsp;</th>
                                        <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>1</span></th>
                                        <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>₹ Price</span></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
      </>
    );
}
