import React from 'react';
import girl from '../image/girl.png';
import podu from '../image/podu.png';
import keyboard from '../image/keyboard.png';

const Container2 = () => {
    return(
        <><div className="container2">
            <p className="designer">I'm a cushion designer</p>
            <p className="california">Based in San Francisco, California I design trendy and fashion Cushions, <br />
                since I have memory I always had a tendency to design and illustration.</p>
            <button className="learn-more">Learn More</button>
            <div className="content-3">
                <img className="girl" src={girl} alt="girl" />
                <img className="podu" src={podu} alt="podu" />
                <img className="keyboard" src={keyboard} alt="keyboard" />
                </div>
        </div><div className="content-4">
                <div className="first">
                    <p className="me">About me</p>
                    <p className="more">Learn more</p>
                </div>
                <div className="second">
                    <p className="me">My products</p>
                    <p className="more">Learn more</p>
                </div>
                <div className="third">
                    <p className="me">Contact me</p>
                    <p className="more">Learn more</p>
                </div>
            </div></>

    )
}

export default Container2;
