import React, { useRef, useEffect } from "react";
import { gsap, Power3, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import SplitType from "split-type"; // For split text animation
import "./Card.css";

gsap.registerPlugin(ScrollTrigger);

const Card = ({
  title = "Web design & development",
  description = "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
  tags = [
    "Creative web design",
    "Web development",
    "Copywriting",
    "E-Commerce WordPress",
  ],
  buttonText = "Find Out More",
  videoSrc = "https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4",
}) => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const tagsRef = useRef([]);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Split Text Animation for Title
    const splitTitle = new SplitType(titleRef.current, { types: "words" });
    gsap.from(splitTitle.words, {
      opacity: 0,
      y: 50,
      rotationX: -90,
      stagger: 0.1,
      duration: 1,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Staggered Fade-In for Tags
    gsap.from(tagsRef.current, {
      opacity: 10,
      duration: 1,
      ease: Power3.easeOut,
     
    });

    // Button Hover Animation with Morphing Effect
    gsap.fromTo(
      buttonRef.current,
      { backgroundColor: "#fff" },
      {
        backgroundColor: "#f0f0f0",
        scale: 1.05,
        duration: 0.4,
        ease: Expo.easeOut,
        repeat: -1,
        yoyo: true,
      }
    );

    // Parallax Effect for Video
    gsap.fromTo(
      videoRef.current,
      { y: "-20%" },
      {
        y: "20%",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="card-container bg-gray-100 py-10">
      <div className="flex flex-col lg:flex-row gap-4 px-4 md:px-10 rounded-4xl mx-4 md:mx-10 py-8 md:py-16 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 md:gap-6">
          <p
            ref={titleRef}
            className="text-3xl md:text-5xl lg:text-7xl leading-snug"
          >
            {title}
          </p>

          <div className="flex gap-4 flex-wrap">
            {tags.map((tag, index) => (
              <p
                key={index}
                ref={(el) => (tagsRef.current[index] = el)}
                className="px-4 py-2 border-zinc-400 border-[1.8px] rounded-full text-sm md:text-base"
              >
                {tag}
              </p>
            ))}
          </div>

          <p className="text-base md:text-xl font-medium">{description}</p>

          <button
            ref={buttonRef}
            className="animated-button px-4 py-2 border-zinc-400 border-[1.8px] rounded-full flex gap-2 items-center hover:bg-gray-100 transition"
          >
            {buttonText}
            <ArrowRight className="inline-block" />
          </button>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 overflow-hidden rounded-tr-full">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="video-parallax rounded-tr-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
