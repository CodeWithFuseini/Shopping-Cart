import { useEffect } from "react";

import { productApi } from "./api/api";

import { useAppDispatch } from "./hooks/selector&dispatch";
import { getProduct, isLoading } from "./slices/productSlice";

import { Routes , Route } from 'react-router-dom'
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  const dispatch = useAppDispatch();
 

  useEffect(() => {
    productApi
      .get("/products?limit=5")
      .then(({ data, status }) => {
        if (data && status === 200) {
          dispatch(getProduct(data?.products));
          dispatch(isLoading(false));
          return data?.products;
        }
      })
      .catch((err) => {
        if (err instanceof Error) {
          console.log(err.message);
          return err.message;
        }
      });
  }, []);

  return (
    <>
      <Routes>
        <Route  path="/" index element={<Home />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
