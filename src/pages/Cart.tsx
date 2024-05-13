import React from "react";
import NavBar from "../components/NavBar/Navbar";
import Table from "react-bootstrap/Table";
import { useAppDispatch, useAppSelector } from "../hooks/selector&dispatch";
import { setCart } from "../slices/productSlice";
import { Item } from "../@types/product";

import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useAppSelector((state) => state.carts);
  const dispatch = useAppDispatch();

  const totalPrice = cart?.reduce(
    (previous, current) => (previous += current.price * current.quantity),
    0
  );

  function removeFromCart(id: string) {
    const newCart = cart?.filter((cart) => {
      if (cart.id !== id) {
        return cart;
      }
    }) as Item[];

    dispatch(setCart(newCart));
  }

  function clearCart() {
    dispatch(setCart([]));
  }

  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center my-3">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          {!cart?.length ? (
            <Link to={`/`}><h4>You have no cart, try add some</h4></Link>
          ) : (
            cart.map(({id,  images, title, price, quantity }) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td><img src={images[0]} style={{width:"150px", height: "100px"}} /></td>
                      <td>{title}</td>
                      <td>${new Intl.NumberFormat("en-IN").format(price)}</td>
                      <td>{quantity}</td>
                      <td>
                        $
                        {new Intl.NumberFormat("en-IN").format(
                          quantity * price
                        )}
                      </td>
                      <td
                        style={{ color: "red" }}
                        onClick={() => removeFromCart(id)}
                      >
                        remove
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })
          )}
          <br />
          <h3>Total: ${new Intl.NumberFormat("en-IN").format(totalPrice!)}</h3>
        </Table>
      </div>
     {
       cart?.length ?  (<button className="btn bg-danger" onClick={clearCart}>
       Remove All Cart
     </button>) : ''
     }
    </>
  );
};

export default Cart;
