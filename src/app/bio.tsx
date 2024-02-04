"use client"

import React, { useRef, useEffect, useState } from 'react';

import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Bio () {
  const navRef: any = useRef();
  const [isScrollable, setIsScrollable] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(315);

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

  return(
    <>
      <div className="">
        <h2 className="px-8 lg:px-12">Bio</h2>
        <div className="my-8">
          <div className="mb-4 relative">
            {isScrollable && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-center w-[40px] h-full">
                <button onClick={() => handleNav('left')} className="w-full h-full">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </div>
            )}
            <div className="px-8 lg:px-12 overflow-x-scroll flex flex-row scroll-hide" ref={navRef}>
              <Image src="https://fakeimg.pl/500x350" alt="Picture of Nikolai" width={500} height={350} className="rounded-lg flex min-w-[250px] min-h-[175px] md:min-w-[500px] md:min-h-[350px]" />
              <Image src="https://fakeimg.pl/300x350" alt="Picture of Nikolai" width={300} height={350} className="rounded-lg flex ml-4 min-w-[150px] min-h-[175px] md:min-w-[300px] md:min-h-[350px]" />
            </div>
            {isScrollable && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-center w-[40px] h-full">
                <button onClick={() => handleNav('right')} className="w-full h-full">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            )}
          </div>
          <div className="px-8 lg:px-12 text-xl font-light">
            <p>&#128075; Hello!</p><br />
            <p>My name is Nikolai, I'm 17 years old living in &#127467;&#127470; Finland.</p><br />
            <p>Since the youngest age, I've been incredibly interested in technology, and that's why I started making websites.</p><br />
            <p>write more idk wefdsgdsg</p>
          </div>
        </div>
      </div>
    </>
  )
}