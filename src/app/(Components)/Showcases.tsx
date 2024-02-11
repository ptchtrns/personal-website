"use client"

import React, { useRef, useEffect, useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import ShowcaseElement from './ShowcaseElement'

export default function Showcases() {
  const navRef: any = useRef();
  const [isScrollable, setIsScrollable] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(315);

  const works = [
    {
      key: "n1",
      img: "/images/showcases/weather-app.jpg",
      href: "https://github.com/nikolzaksalpaus/weatherapp",
      title: "Weather app",
      text: "A simple weather application displaying conditions in five cities of the Päijät-Häme region, Finland, using the openweathermap.org API. Developed with HTML, CSS, JavaScript, jQuery, and Bootstrap.",
      date: "November 2023",
      linkText: "GitHub",
    },
  ]

  /** Decrements or increments scrollLeft property to scroll left or right respectively */
  const handleNav = (direction: 'left' | 'right') => {
    const navElement = navRef.current;

    if (!navElement) return;

    const currentScroll = navElement.scrollLeft;
    const newScroll =
      direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;

    navElement.scrollTo({
      left: newScroll,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  };

  useEffect(() => {
    const checkScroll = () => {
      const navElement = navRef.current;
  
      if (navElement) {
        const isNavScrollable =
          navElement.scrollHeight > navElement.clientHeight ||
          navElement.scrollWidth > navElement.clientWidth;
  
        setIsScrollable(isNavScrollable);
      }
    };
  
    // Set different scrollAmount based on breakpoints
    const resetScrollAmount = () => {
      // Reset scrollAmount based on new window width
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setScrollAmount(prevScrollAmount => {
          console.log(prevScrollAmount); // Log the previous value
          return 405+48;
        });
      } else if (window.innerWidth >= 1536) {
        // 2xl breakpoint
        setScrollAmount(prevScrollAmount => {
          console.log(prevScrollAmount); // Log the previous value
          return 540+48;
        });
      } else {
        // Default value for other breakpoints
        setScrollAmount(prevScrollAmount => {
          console.log(prevScrollAmount); // Log the previous value
          return 263.25+48;
        });
      }
    };

    const handleResize = () => {
      checkScroll();
      resetScrollAmount();
    };

    // Initial check
    checkScroll();
    resetScrollAmount();

    // Check on window resize
    window.addEventListener('resize', handleResize);

    return () => {
      // Remove event listener on component unmount
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="">
      <h2 className="px-8 lg:px-12">Showcase</h2>
      <div className="relative">
        {isScrollable && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-center w-[40px] h-full">
            <button onClick={() => handleNav('left')} className="w-full h-full">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>
        )}
        <div className="overflow-x-scroll mb-12 work-scroll scroll-hide px-8 lg:px-12" ref={navRef}>
          <div className="flex mt-4 mb-2">
            {works.map((work) => (
              <span key={"date-"+work.key} className="min-w-[263.25px] lg:min-w-[405px] h-[270px] 2xl:min-w-[540px] mr-12 inline-block text-left h-auto text-neutral-600 dark:text-neutral-400 font-light">{work.date}</span>
            ))}
          </div>
          <div className="flex">
          {works.map((work) => (
            <div key={"div-"+work.key}>
              <ShowcaseElement img={work.img} href={work.href} title={work.title} text={work.text} linkText={work.linkText} />
            </div>
          ))}
          </div>
        </div>
        {isScrollable && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-center w-[40px] h-full">
            <button onClick={() => handleNav('right')} className="w-full h-full">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}