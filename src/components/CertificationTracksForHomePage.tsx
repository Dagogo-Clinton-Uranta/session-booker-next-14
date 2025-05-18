'use client';
import { useTrail, animated } from '@react-spring/web';
import { useMemo } from 'react';
import Image from "next/image";

import healthcare from '../assets/images/healthcare.png'
import vmware from '../assets/images/vmware.png'
import mcse from '../assets/images/mcse.png'
import network from '../assets/images/network.png'
import redhat from '../assets/images/redhat.png'


const items = [

  "Healthcare IT Professional Certifications",
  "VMware Certification Training",
  "Microsoft Certified Systems Engineer (MCSE)",
  " Network Engineering",
  "Linux & Red Hat Systems Engineering",
];


const items2 = [
   
     "Hands-on Labs with Real Equipment",
   
   
      "Certified Instructors with Industry Experience",
   
     "Job Placement Assistance",
     "Flexible Weekend and Evening Classes",
  "Hybrid Learning – In-person & Online",
    
  ]

const itemImages =
[
    healthcare,
    vmware,
    mcse,
    network,
    redhat
]

export default function CertificationTracksForHomePage() {
//  const trail = useTrail(items.length, {
//    from: { opacity: 0, transform: 'translateX(-30px)' },
//    to: { opacity: 1, transform: 'translateX(0px)' },
//    config: { mass: 1, tension: 800, friction: 200 },
//    delay: 800,
//  });


    
 
  return (
    <section className="my-12">
       <h2 className="text-blue-600 text-2xl font-semibold mb-4">Our Certification Tracks</h2>

      <ul className="flex flex-col gap-4 text-left text-gray-700 max-w-[800px] mx-auto">
        {items.map((item, i) => (
          <li
            key={i}
            //style={style}
            className="bg-gray-100 p-4 rounded-xl shadow-sm"
          >
            <div style={{display:"flex",alignItems:"center",justifyContent:"flex-start",paddingLeft:"32%"}}>
           <Image alt={"certification track image"} style={{marginRight:"15px"}} src={itemImages[i]} height={60} width={60}/> {item}
           </div>
          </li>
        ))}
      </ul>
    </section>
  );
}