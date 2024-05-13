import React from 'react'
import NavBar from '../components/NavBar/Navbar';
import Cards from '../components/Card/Cards';

import { RotatingLines } from "react-loader-spinner";
import { useAppSelector } from '../hooks/selector&dispatch';

const Home = () => {
    const loading = useAppSelector((state) => state.loading);
  return (
    <>
       <NavBar />
      {!loading && <Cards />}
      {loading && (
        <div className="d-flex justify-content-center my-3">
          <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
        </div>
      )}
      </>
  )
}

export default Home