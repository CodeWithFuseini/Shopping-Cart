import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useAppSelector, useAppDispatch } from "../../hooks/selector&dispatch";
import { addToCart } from "../../slices/productSlice";
import { Item } from "../../@types/product";



function Cards() {
  const product = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  function addCart(cart: Item): void{
     dispatch(addToCart(cart))
  }


  return (
    <div className="d-flex justify-content-center gap-3 my-3">
      {product.map((product) => {
        return (
          <>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={product.images[0]} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
               <div className="d-flex justify-content-between">
               <Button variant="primary" onClick={() => addCart(product)}>Add To Cart </Button>
               <h4 className="text text-muted">$ {new Intl.NumberFormat("en-IN").format(product.price)}</h4>
               </div>
               
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
}

export default Cards;
