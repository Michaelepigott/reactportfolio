import '../css/Body.css';
import React from 'react';
import Myimage from '../assets/images/myPhoto.png'
export default function About() {
    //Create Bio content
    return(
        <div className="container">
            <h1>About Me</h1>
            <img
            className='myimage'
            variant='top'
            src = {Myimage}
            alt = 'hello o/'
            />

            <p>
                actual bio to be updated later LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Amet porttitor eget dolor morbi non arcu. 
                 Aliquam eleifend mi in nulla. At auctor urna nunc id cursus metus. Fermentum dui faucibus in ornare quam. 
                 Euismod nisi porta lorem mollis aliquam. Amet dictum sit amet justo donec enim diam vulputate. 
                 Risus feugiat in ante metus dictum. Mus mauris vitae ultricies leo integer. Sit amet justo donec enim diam vulputate ut pharetra.
                  Nunc congue nisi vitae suscipit tellus mauris a diam. Sagittis nisl rhoncus mattis rhoncus urna neque. 
                  Ipsum consequat nisl vel pretium lectus quam id.
            </p>
        </div>
    );
}