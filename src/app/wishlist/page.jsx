'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function WishlistPage() {
  // useSelector ====ye saari state nikal k dedega
  const items = useSelector((state)=>state.wish);

   
   console.log(items)

    return (
        <div>
            <h2>Wishlist </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 ? (
                        items.map((item, index) => (
                          
                            <tr key={item.id}>
                            
                                <th scope="row">{index + 1}</th>
                                <td> <img src={item.thumbnail} width={50}/>  </td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button >Remove</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Your wishlist is empty</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
