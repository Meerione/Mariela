import React from 'react';
import nadpis from '../image/nadpis.svg';
import logo1 from '../image/logo1.svg';
import logo2 from '../image/logo2.svg';
import logo3 from '../image/logo3.svg';

const Footer = () => {
return(
    <>
    <div className="first-block">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />

    </div>
  <div className="container10">
    <div className="content-17">
      <p className="shopping">Safe shopping</p>
      <p className="get">Buy with confidence</p>
    </div>
    <div className="content-18">
      <p className="shopping">Fast shipping</p>
      <p className="get">Get your product fast</p>
    </div>
    <div className="content-19">
      <p className="shopping">Satisfaction guarantee</p>
      <p className="get">Or get your money back</p>
    </div>
  </div>
  <div className="container11">
    <img className="nadpis" src={nadpis} alt="photo" />
    <nav>
      <ul className="second-ul">
        <li className="contact">Home</li>
        <li className="contact">About me</li>
        <li className="contact">Products</li>
        <li className="contact">Contact me</li>
      </ul>
    </nav>
  </div>
</>
)

    
}
export default Footer;