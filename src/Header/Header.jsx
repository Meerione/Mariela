import React from 'react';
import mariela from '../image/mariela.svg' 
import korzina from '../image/korzina.svg';
const Header = () => {
    return (
        <header>
  <img className="mariela" src={mariela} alt="mariela" />
  <nav>
    <ul className="first_ul">
      <li>Home</li>
      <li>About me</li>
      <li>Products</li>
      <li>Contact me</li>
    </ul>
  </nav>
  <img className="korzina" src={korzina} alt="korzina" />
</header>
    )
}

export default Header;