import React from 'react';
import { Image } from 'react-bootstrap';
import bannarimg from '../../../images/bannar.jpg'

const Banner = () => {
    return (
        <div>
            <Image style={{ width: "1000px", height: "531px" }} src={bannarimg} fluid />
        </div>
    );
};

export default Banner;