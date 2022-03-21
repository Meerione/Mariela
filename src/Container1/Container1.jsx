import React from 'react';
import poduwka from '../image/poduwka.png';
import rectangle from '../image/rectangle.png';


const Container1 = () => {
    return (
        <div className="container1">
  <div className="content-1">
    <img className="poduwka" src={poduwka} alt="" />
    <img className="rectangle" src={rectangle} alt="" />
    <div className="spring">
      <p className="new">new</p>
      <p className="cushion">Spring Cushion</p>
      <p className="collection">Collection 2019</p>
      <button className="buy">buy now</button>
    </div>
  </div>
  <div className="content-2" />
</div>
    )
}

export default Container1;
