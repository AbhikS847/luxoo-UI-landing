import React from 'react';

const CarSearch = () => {
  return (
    <div className="searchbar">
    <div style={{fontSize:24, fontWeight:600}}>Let's find you a car</div>
    <div class="input-group input-group-lg">
    <input style={{fontFamily:'Questrial'}} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Eg. BMW, Lamborgini, Mercedes, Mclaren.. "/>
    </div>
    <div className="py-3" style={{fontWeight:500}}>25,000 luxury vehicles, 30 different <span className="luxo-hyperlink">locations</span> </div>
    </div>
  )
}

export default CarSearch