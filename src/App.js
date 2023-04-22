// import logo from './logo.svg';
import { useEffect } from 'react';
import st from './images/ST.png';
import i1 from './images/WhatsApp Image 2022-11-17 at 23.46.53.jpeg';
import i2 from './images/metaverse1.jpeg';
import i3 from './images/WhatsApp Image 2022-11-17 at 23.50.34.jpeg';
import './App.css';
import gb from './videos/g_block.mp4';
import g2 from './videos/g2.mp4';
import gbl from './videos/Gblock_Line.mp4';
import gbm from './videos/Gblock_Mark.mp4';
import ut from './images/utkarsh.jpeg';
import al from './images/WhatsApp Image 2022-11-17 at 23.07.02.jpeg';
import i4 from './images/WhatsApp Image 2022-11-18 at 00.00.45.jpeg';
import sh from './images/shubhank.jpeg';
// import i5 from './images/'
import i6 from './images/WhatsApp Image 2022-11-17 at 22.37.28.jpeg';
import i7 from './images/WhatsApp Image 2022-11-17 at 22.37.20.jpeg';

function App() {
  // useEffect(() =>{
  //   $(document).ready(function(){


  //     $('.fa-bars').click(function(){
  //       $(this).toggleClass('fa-times');
  //       $('.navbar').toggleClass('nav-toggle');
  //     });
    
  //     $(window).on('load scroll',function(){
  //       $('.fa-bars').removeClass('fa-times');
  //       $('.navbar').removeClass('nav-toggle');
    
  //       if($(window).scrollTop() > 30){
  //         $('.header').css({'background':'#6C5CE7','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
  //       }else{
  //         $('.header').css({'background':'none','box-shadow':'none'});
  //       }
  //     });
    
    
  //     $('.accordion-header').click(function(){
  //       $('.accordion .accordion-body').slideUp();
  //       $(this).next('.accordion-body').slideDown();
  //       $('.accordion .accordion-header span').text('+');
  //       $(this).children('span').text('-');
  //     });
    
    
    
  //   });
  // })
  return (
    <>
  {/* header section starts  */}
  <header className="header">
    <div>
      <img src={st} className="logo_ig" />
      {/* <div class="logo" >Squad Turnz</div> */}
      <a href="#" className="logo">
        Squad Turnz
      </a>
    </div>
    <div className="fas fa-bars" />
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#gar">G-AR</a>
        </li>
        <li>
          <a href="#team">team</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  </header>
  {/* header section ends */}
  {/* home section starts  */}
  <section id="home" className="home">
    <h1 className="banner">Hey Folks!!</h1>
    <h3 className="slogan">Let's have a virtual tour of KIET!!</h3>
    <a href="#gar">
      <button>Get Started</button>
    </a>
    <div className="wave wave1" />
    <div className="wave wave2" />
    <div className="wave wave3" />
    <div className="fas fa-cog nut1" />
    <div className="fas fa-cog nut2" />
  </section>
  {/* home section ends */}
  {/* abuout section starts  */}
  <section id="about" className="about">
    <h1 className="heading">about us</h1>
    <div className="row">
      <div className="content">
        <h3>Imagination is to technology as fuel is to fire.</h3>
        <p>
          Imagination and purpose together drive technology. Do we have
          something by which we can have the virtual tour of KIET with our
          parents at the comfort of our home?
        </p>
        <a href="#gar">
          <button className="btn">Explore Now</button>
        </a>
      </div>
      <div className="image">
        <img src={i2} alt="" />
      </div>
    </div>
  </section>
  {/* abuout section ends  */}
  {/* GAR section starts  */}
  <section id="gar" className="gar">
    <h1 className="heading">G-AR</h1>
    <div className="row">
      <div className="image">
        <img src={i3} alt="" />
      </div>
      <div className="content">
        <h3>Let's Have a Quick Tour of our Campus</h3>
        <a href="https://orbix360.com/x3SOk8L3y" target="_blank">
          <button className="btn">Explore Now</button>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="content">
        <h3>G-AR, Our virtual Tour Guide(Avtar).</h3>
        <a href="https://vr-cyber.github.io/utj/" target="_blank">
          <button className="btn">Explore Now</button>
        </a>
      </div>
      <div className="image">
        <img src={i1} alt="" />
      </div>
    </div>
    {/* <div class="row">

  
  <div class="image">
    <img src="WhatsApp Image 2022-11-17 at 20.22.50.jpeg" alt="">
  </div>
  <div class="content">
    <h3>Metaverse, a platform to implement real world into virtuality.</h3>
    <a href="#"><button class="btn">Explore Now</button></a>
  </div>

</div> */}
    <div className="row">
      <div className="image" id="vid">
        <img src={i4} alt="" />
        <video
          id="videobg"
          alt="WhatsApp Image 2022-11-18 at 00.00.45.jpeg"
          width={500}
          height={500}
          className="vd"
          autoPlay=""
          muted=""
          loop=""
        >
          <source src={gb} type="video/mp4" />
        </video>
        <video
          id="videobg"
          alt="WhatsApp Image 2022-11-18 at 00.00.45.jpeg"
          width={500}
          height={500}
          className="vd"
          autoPlay=""
          muted=""
          loop=""
        >
          <source src="ar.mp4" type="video/mp4" />
        </video>
        <video
          id="videobg"
          alt="WhatsApp Image 2022-11-18 at 00.00.45.jpeg"
          width={500}
          height={500}
          className="vd"
          autoPlay=""
          muted=""
          loop=""
        >
          <source src={g2} type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <h3>Indoor Navigation</h3>
        {/* <a href="#"><button class="btn">Explore Now</button></a> */}
      </div>
    </div>
  </section>
  {/* gar section ends */}
  {/* team section starts  */}
  <section id="team" className="team">
    <h1 className="heading">SQUAD TURNZ</h1>
    <div className="row">
      <div className="card">
        <div className="image">
          <img src={sh} alt="" />
        </div>
        <div className="info">
          <h3>Shubhank Dwivedi</h3>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/shubhank-dwivedi/"
              target="_blank"
              className="fab fa-linkedin"
            />
            <a
              href="https://twitter.com/Asur_Stark"
              target="_blank"
              className="fab fa-twitter"
            />
            <a
              href="https://www.instagram.com/agyaat_awara/"
              target="_blank"
              className="fab fa-instagram"
            />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src={i6} alt="" />
        </div>
        <div className="info">
          <h3>Prakhal Gupta</h3>
          <div className="icons">
            <a
              href="http://www.linkedin.com/in/prakhal-gupta"
              target="_blank"
              className="fab fa-linkedin"
            />
            <a
              href="https://twitter.com/prakhal_gupta"
              target="_blank"
              className="fab fa-twitter"
            />
            <a
              href="https://instagram.com/prakhal_gupta"
              target="_blank"
              className="fab fa-instagram"
            />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src={ut} alt="" />
        </div>
        <div className="info">
          <h3>Utkarsh Shukla</h3>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/theutkarshshukla"
              target="_blank"
              className="fab fa-linkedin"
            />
            <a
              href="https://twitter.com/utkarshshukla08?t=GuP4mBXChHI7izdXyM1MFg&s=09"
              target="_blank"
              className="fab fa-twitter"
            />
            <a
              href="https://instagram.com/_utkarsh49sh_?igshid=YmMyMTA2M2Y"
              target="_blank"
              className="fab fa-instagram"
            />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src={i7} alt="" />
        </div>
        <div className="info">
          <h3>Aditya Mishra</h3>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/aditya29mishra"
              target="_blank"
              className="fab fa-linkedin"
            />
            <a
              href="https://twitter.com/aditya29mishra?s=09"
              target="_blank"
              className="fab fa-twitter"
            />
            <a
              href="https://www.instagram.com/its.aditya.apk/"
              target="_blank"
              className="fab fa-instagram"
            />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src={al} alt="" />
        </div>
        <div className="info">
          <h3>Alka Gupta</h3>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/alka-gupta-112778219"
              className="fab fa-linkedin"
              target="_blank"
            />
            <a
              href="https://twitter.com/mesieeeee23?t=C8Riqrdh1eoMouU60w6pjg&s=08"
              className="fab fa-twitter"
              target="_blank"
            />
            <a
              href="https://www.instagram.com/mesieeeee/"
              className="fab fa-instagram"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* team section ends */}
  {/* contact section starts  */}
  <section id="contact" className="contact">
    <h1 className="heading">contact us</h1>
    <div className="row">
      <div className="image">
        {/* <img src="contact-us_banner.jpg" alt="" /> */}
      </div>
      <div className="form-container">
        <form action="">
          <div className="inputBox">
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />
          </div>
          <input type="email" placeholder="email" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="message"
            defaultValue={""}
          />
          <input type="submit" defaultValue="send" />
        </form>
      </div>
    </div>
  </section>
  <section className="footer">
    <div className="icons">
      <a href="#" className="fab fa-facebook-f" />
      <a href="#" className="fab fa-twitter" />
      <a href="#" className="fab fa-instagram" />
    </div>
  </section>
</>

  );
}

export default App;
