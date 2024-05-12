import React from "react";
import "./hero.css";
import Lottie from "lottie-react";

import devAnimation from "./../../../public/animation/dev.json";
import { useRef } from "react";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img src="/me.jpg" className="avatar" />
          <div className="icon-verified "></div>
        </div>
        <h1 className="title">
          Software designer , founder ,<br /> andamateur astronaut.
        </h1>
        <p className="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio magnam
          modi libero nam quis nostrum omnis quo consequatur! Aperiam illum
          debitis ad nisi rerum impedit atque laborum, facere omnis doloremque!
        </p>
        <div className="all-icons flex ">
          <div className="icon icon-snapchat-square"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-twitter"></div>
          <div className="icon icon-github"></div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            //@ts-ignore
            //https://Lottieract.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
