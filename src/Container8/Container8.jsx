import React from 'react';
import four from '../image/four.png';
import five from '../image/five.png';
import six from '../image/six.png';

const Container8 = () => {
    return(
        <>
  <div className="container8">
    <img className="a" src={four} alt="" />
    <img className="b" src={five} alt="" />
    <img className="c" src={six} alt="" />
  </div>
  <div className="container9">
    <div className="content-14">
      <p className="cushions">Pink Cushion</p>
      <p className="price">$ 19.99 USD</p>
    </div>
    <div className="content-15">
      <p className="cushions">Black Cushion</p>
      <p className="price">$ 19.99 USD</p>
    </div>
    <div className="content-16">
      <p className="cushions">Green Cushion</p>
      <p className="price">$ 19.99 USD</p>
    </div>
  </div>
</>
    )
}

export default Container8;