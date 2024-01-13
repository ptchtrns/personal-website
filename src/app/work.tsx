"use client"

import React, { useRef, useEffect, useState } from 'react';

import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import WorkElement from './workElement'

export default function Work() {
  const navRef: any = useRef();
  const [isScrollable, setIsScrollable] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(315);

  const works = [
    {
      key: "n4",
      img: "https://fakeimg.pl/270x180",
      href: "https://google.com",
      title: "Project 4",
      text: "Consectetur adipiscing elit, ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "June 2023"
    },
    {
      key: "n3",
      img: "https://fakeimg.pl/270x180",
      href: "https://google.com",
      title: "Project 3",
      text: "Consectetur adipiscing elit, ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "June 2023"
    },
    {
      key: "n2",
      img: "https://fakeimg.pl/270x180",
      href: "https://google.com",
      title: "Project 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "October 2023"
    },
    {
      key: "n1",
      img: "https://fakeimg.pl/270x180",
      href: "https://google.com",
      title: "Project 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "October 2023"
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
          return 315+48;
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
      <h2 className="px-8 lg:px-12">My work</h2>
      <div className="relative">
        {isScrollable && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-center w-[40px] h-full">
            <button onClick={() => handleNav('left')} className="w-full h-full">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>
        )}
        <div className="overflow-x-scroll mb-12 work-scroll px-8 lg:px-12" ref={navRef}>
          <div className="flex mt-4 mb-2">
            {works.map((work) => (
              <span key={"date-"+work.key} className="min-w-[315px] lg:min-w-[405px] h-[270px] 2xl:min-w-[540px] mr-12 inline-block text-center h-auto text-neutral-600 font-light">{work.date}</span>
            ))}
          </div>
          <div className="flex mb-8">
            {works.map((work, index) => (
              <div key={work.key} className="flex">
              {index === 0 && (
                <div className="w-[157.5px] lg:w-[202.5px] 2xl:w-[270px] h-[2px] bg-green inline-block mt-[4px]"></div>
              )}
                <div className="inline-block">
                  <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" className="fill-neutral-600">
                    <circle cx="6" cy="6" r="6" />
                  </svg>
                </div>
                {index !== works.length - 1 && (
                  <div className="w-[calc(315px+3rem-10px)] lg:w-[calc(405px+3rem-10px)] 2xl:w-[calc(540px+3rem-10px)] h-[2px] bg-green inline-block mt-[4px]"></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex">
          {works.map((work) => (
            <div key={"div-"+work.key}>
              <WorkElement img={work.img} href={work.href} title={work.title} text={work.text} />
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