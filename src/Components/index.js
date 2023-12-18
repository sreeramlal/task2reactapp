import React, { useState } from 'react';
import homeImg from '../Assets/Images/homeImg.png';
import Img1 from '../Assets/Images/Img1.png';
import Img2 from '../Assets/Images/Img2.png';
import Img3 from '../Assets/Images/Img3.png';
import closeIcon from '../Assets/Images/closeIcon.png';
import '../App.css';

const Fortnite = () => {
  const [isRotated, setRotated] = useState(false);

  const handleButtonClick = () => {
    setRotated(!isRotated);
  };

  return (
    <div className='container-main'>
      <div className='container-top'>
        <img
          className={`closeIcon ${isRotated ? 'rotated' : ''}`}
          src={closeIcon}
          alt=""
          onClick={handleButtonClick}
        />
 <h3>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h3>
        <div className='imgtop'><img src={homeImg} alt="" srcset="" /></div>
        <h5 className='h5-img' >Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</h5>
         <button className='topBtn'>Visit Website</button>
         </div>


         <div className="image-container">
          <div className='centerImgs'>
            <img className='imgtop imgCommon' src={Img1} alt=""  />
            <p>Explore large, destructible environments where no two games are ever the same.</p> 
            </div>
            <div className='centerImgs'>
            <img className='imgCommon' src={Img2} alt="" srcset="" />
            <p >Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
            </div>
            <div className='centerImgs'>
            <img className='imgCommon' src={Img3} alt="" srcset="" />
            <p>Discover even more ways to play across thousands of creator-made game genres</p>
             </div>
         </div>

         <div className="contribution">
            <h1>Our Contribution</h1>
            <p>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
          <div className='contributionBox'>
           <div className='contribution-box-reverse'> <h1>5M</h1><p>Daily User Engagements </p> </div>
           <div className='contribution-box-reverse'> <h1>$500K</h1><p>Revenue Surge for an Platform </p> </div>
           <div className='contribution-box-reverse'> <h1>10X</h1><p>ROAS on all our marketing campaigns</p> </div>

          </div>
         </div>

         <div className='container_end'>
            <h1>Interested in delving deeper into the project?</h1>
            <p>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</p>
           <div className='container_end_btn'>
           <div> <button className='btnring'>Ring us on Skype</button></div>
           <div> <button className='btncontact'>Contact Us</button></div>
           </div>
         </div>

         <footer>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</footer>

    </div>
  )
}

export default Fortnite