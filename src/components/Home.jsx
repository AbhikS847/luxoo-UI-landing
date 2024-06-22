import React from 'react';
import Jumbo from './Jumbo';
import CarSearch from './CarSearch';
import CarListing from './CarListing';
import { FaSortDown } from "react-icons/fa";

const Home = () => {
  return (
    <div >
        <Jumbo />
        <CarSearch />   
        <div className="luxo-home container">
        <div>
        Rent your dream luxury rides today with us. On any occasion or any given day, our drivers are 
        ready to drop off and collect your rides. 
        </div>
        <div className="py-3 d-flex justify-content-between align-items-center">
  <div className="display-1" style={{ fontFamily: 'Questrial', fontWeight: 600, color: '#FFCB3A' }}>
    Rent now
  </div>
  <div className="d-flex">
  <button className="btn d-flex align-items-center mx-2" style={{borderRadius: 8, color:'#5D8AFC', border:'2px solid #eaeaea'}}>
  <div className="d-flex">
  <div>Price</div> <FaSortDown className="ml-1" />
  </div>
    </button>
    <button className="btn" style={{ fontWeight: 600, borderRadius:8, backgroundColor:'#5D8AFC', color:'#fff'}}>
      Sort
    </button>
  </div>
</div>
<CarListing />
        </div>
    </div>
  )
}

export default Home