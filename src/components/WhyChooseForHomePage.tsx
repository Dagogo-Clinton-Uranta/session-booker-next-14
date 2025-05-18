'use client';
import { useTrail, animated } from '@react-spring/web';
import { useMemo } from 'react';
import Image from "next/image";

import healthcare from '../assets/images/healthcare.png'
import vmware from '../assets/images/vmware.png'
import mcse from '../assets/images/mcse.png'
import network from '../assets/images/network.png'
import redhat from '../assets/images/redhat.png'

import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { HiBeaker } from "react-icons/hi2";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";




export default function WhyChooseForHomePage() {
//  const trail = useTrail(items.length, {
//    from: { opacity: 0, transform: 'translateX(-30px)' },
//    to: { opacity: 1, transform: 'translateX(0px)' },
//    config: { mass: 1, tension: 800, friction: 200 },
//    delay: 800,
//  });

const items = [
   
  "Hands-on Labs with Real Equipment",


   "Certified Instructors with Industry Experience",

  "Job Placement Assistance",
  "Flexible Weekend and Evening Classes",
"Hybrid Learning – In-person & Online",
"Flexible Payment Plans (Agreed Installments)",
 
]



//const emojis =[
//<HiBeaker style={{fontSize:"3.5rem"}} />,
//<AiFillSafetyCertificate  style={{fontSize:"3.5rem"}}/>,
//<FaHandsHelping style={{fontSize:"3.5rem"}} />,
//<FaCalendarAlt style={{fontSize:"3.5rem"}} />,
//<FaChalkboardUser  style={{fontSize:"3.5rem"}}/>,
//<FaMoneyBillWave style={{fontSize:"3.5rem"}} />
//
//]
    
 
  return (
    <section className="my-12">
  <h2 className="text-2xl font-semibold mb-4">
    Why Choose Us
  </h2>

  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
    {items.map((item, i) => (
      <li
        key={i}
        className="bg-gray-300 aspect-square border-8 rounded-lg shadow-sm flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center text-center gap-4">
          {/*<Image
            alt="certification track image"
            src={itemImages[i]}
            height={60}
            width={60}
            className="mb-2"
    />*/}

       <span>{
       item === "Hands-on Labs with Real Equipment"? <HiBeaker style={{fontSize:"3.5rem"}} />:
      item === "Certified Instructors with Industry Experience"? <AiFillSafetyCertificate  style={{fontSize:"3.5rem"}}/>:
       item === "Job Placement Assistance"?  <FaHandsHelping style={{fontSize:"3.5rem"}} />:
       item === "Flexible Weekend and Evening Classes"?<FaCalendarAlt style={{fontSize:"3.5rem"}} />:
       item === "Hybrid Learning – In-person & Online"?  <FaChalkboardUser  style={{fontSize:"3.5rem"}}/>:
      
       <FaMoneyBillWave style={{fontSize:"3.5rem"}} />
       
       }</span>

          <span style={{width:"70%"}}>{item}</span>
        </div>
      </li>
    ))}
  </ul>
</section>
  );
}