"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
    {
      name: "Sally Sharpe",
      occupation: "Marketing Admin",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
      testimonial:
        "Thanks to ECO IT Solutions, I finally passed my digital marketing certification. Their resources and mentoring helped me land my first full-time role as a Marketing Admin. I couldn’t have done it without them!",
    },
    {
      name: "Michelle John",
      occupation: "Cybersecurity Engineer",
      image: "https://images.pexels.com/photos/30004491/pexels-photo-30004491.jpeg",
      testimonial:
        "ECO IT Solutions gave me the hands-on lab experience I needed to pass my CompTIA Security+ and CEH exams. I'm now working as a Cybersecurity Engineer and loving every minute of it.",
    },
    {
      name: "Mikayla Eddie",
      occupation: "Software Engineer",
      image: " https://images.pexels.com/photos/30781749/pexels-photo-30781749.jpeg",
      testimonial:
        "Before ECO IT Solutions, coding felt like an impossible mountain to climb. Their structured learning path and mock interviews helped me break into the software industry with confidence.",
    },
    {
      name: "Eve Smith",
      occupation: "UI/UX Designer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      testimonial:
        "The design and user experience certification I earned through ECO IT Solutions directly led to my current job. Their mentorship and real-world projects made all the difference.",
    },
    {
      name: "Luke Maxwell",
      occupation: "System Architect",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
      testimonial:
        "ECO IT Solutions helped me bridge the gap from being a senior sysadmin to a certified System Architect. Their advanced training and exam prep were top-tier.",
    },
  ];

export default function CarouselComponent() {
  const [position, setPosition] = useState(2); // 0-based index

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change slide every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white-600 text-white font-sans h-[400px] grid grid-rows-[500px_100px] grid-cols-[1fr_30px_30px_30px_30px_30px_1fr] items-flex-start justify-items-center">
      {/* Hidden Radio Inputs */}
      {testimonials.map((_, index) => (
        <input
          key={index}
          type="radio"
          name="position"
          checked={position === index}
          readOnly
          className="hidden"
        />
      ))}

      {/* Carousel Items */}
      <main
        id="carousel"
        className="row-start-1 col-span-7 w-screen h-[300px] flex items-center justify-center overflow-hidden relative"
        style={{
          perspective: "600px",
          transformStyle: "preserve-3d",
          pointerEvents: "none",
          ["--items" as any]: testimonials.length,
          ["--middle" as any]: 3,
          ["--position" as any]: position + 1,
        }}
      >
        {testimonials.map((person, index) => (
          <div
            key={index}
            className="text-center px-5 py-6 border-4 border-gray rounded-2xl bg-white text-black absolute w-[300px] h-[300px]"
            style={{
              ["--offset" as any]: index + 1,
              ["--r" as any]: (position + 1) - (index + 1),
              ["--abs" as any]: Math.max((position + 1) - (index + 1), (index + 1) - (position + 1)),
              zIndex: 5 - Math.abs((position + 1) - (index + 1)),
              transform: `rotateY(calc(-10deg * var(--r))) translateX(calc(-300px * var(--r)))`,
              transition: "all 0.25s linear",
            }}
          >
            <img
              src={person.image}
              alt={person.name}
              width={70}
              height={70}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="text-blue-600 font-medium text-base">{person.name}</h3> {/* was font-semibold + larger */}
            <p className="italic text-xs">{person.occupation}</p> {/* slightly smaller */}
            <p className="mt-2 text-xs">{person.testimonial}</p> {/* reduced size */}
          </div>
        ))}
      </main>
    </div>
  );
}
