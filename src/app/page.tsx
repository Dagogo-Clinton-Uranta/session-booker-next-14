//import { Button } from "@/components/ui/button"
//import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
//import { auth } from "@clerk/nextjs/server"
//import { redirect } from "next/navigation"
//
//export default function HomePage() {
//  const { userId } = auth()
//  if (userId != null) redirect("/events")
//
//  return (
//    <div className="text-center container my-4 mx-auto">
//      <h1 className="text-3xl mb-4">Welcome To Eco IT Session Booker</h1>
//      <div className="flex gap-2 justify-center">
//        <Button asChild>
//          <SignInButton />
//        </Button>
//        <Button asChild>
//          <SignUpButton />
//        </Button>
//        <UserButton />
//      </div>
//    </div>
//  )
//}



//'use client'

//import { useEffect, useRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Link from 'next/link'
import CertificationTracksForHomePage from '@/components/CertificationTracksForHomePage'
import CarouselComponent from '@/components/CarouselComponent'
import WhyChooseForHomePage from '@/components/WhyChooseForHomePage'




const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};

export default function HomePage() {
  const { userId } = auth()
  if (userId != null) redirect("/events")

 /* const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
  })*/

  const features = [
    "Hands-on Labs with Real Equipment",
    "Certified Instructors with Industry Experience",
    "Job Placement Assistance",
    "Flexible Weekend and Evening Classes",
    "Hybrid Learning – In-person & Online",
  ]

  return (
    <div className="text-center my-0 mb-0  w-full"  /*className="text-center container my-10 mx-auto max-w-4xl px-4"*/>
      {/* navbar Section */}
      <section className="bg-black w-full">
        <div className="max-w-[1100px] mx-auto px-4 py-4 flex justify-start">
          <h1 className="text-white text-xl font-semibold">ECO IT Solutions</h1>
        </div>
     </section>
      
      {/* Hero Section */}
     {/* <section className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to ECO IT SOLUTIONS</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your gateway to industry-recognized IT certifications.
        </p>


        <div className="flex gap-2 justify-center mb-6">
          <Button asChild>
            <SignInButton />
          </Button>
          <Button asChild>
            <SignUpButton />
          </Button>
          <UserButton />
        </div>
     </section>*/}

      <section
      className="relative h-[66vh] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg')", // Example education image
      }}   
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to ECO IT SOLUTIONS
        </h1>
        <p className="text-lg text-white mb-6">
          Your gateway to industry-recognized IT certifications.
        </p>

        <div className="flex gap-2 justify-center">
          <Button asChild>
            <SignInButton />
          </Button>
          <Button asChild>
            <SignUpButton />
          </Button>
        </div>

        {/* Optional: show user button for logged-in users */}
        <div className="mt-4">
          <UserButton />
        </div>
      </div>
    </section>

{/* WHY CHOOSE US Section */}
    <WhyChooseForHomePage/>

 {/* Courses / Features Section */}
    <CertificationTracksForHomePage/>

      {/* Carousel Section */}


   { /*  <section className="my-16">
  <h2 className=" text-blue-600 text-2xl font-semibold mb-6 text-center">Why Choose ECO IT SOLUTIONS?</h2>

  <div className="relative w-full overflow-hidden rounded-xl h-[70vh]">
    <div className="w-[100%] flex animate-slide">
      {[
        {
          text: "Hands-on Labs with Real Equipment",
          image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
        },
        {
          text: "Certified Instructors with Industry Experience",
          image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507"
        },
        {
          text: "Job Placement Assistance",
          image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9"
        },
        {
          text: "Flexible Weekend and Evening Classes",
          image: "https://images.unsplash.com/photo-1600195077078-3abbc7b1e5f4"
        },
        {
          text: "Hybrid Learning – In-person & Online",
          image: "https://images.unsplash.com/photo-1596496053861-52f33bbaafc6"
        }
      ].map((item, index) => (
        <div
          key={index}
          className="w-full h-[70vh] flex-shrink-0 flex items-center justify-center text-white text-xl font-semibold bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${item.image})`
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  </div>

  
  <div className="flex justify-center gap-2 mt-4">
    {[...Array(5)].map((_, idx) => (
      <div key={idx} className="w-3 h-3 bg-gray-400 rounded-full" />
    ))}
  </div>
</section>*/}
 <h2 className="text-blue-600 text-2xl font-semibold mb-6 text-center">What Our Clients Say</h2>
<CarouselComponent/>


<div className="flex gap-2 justify-center mb-6">
         <Button asChild>
          <Link href={`/privacypolicy`}>Privacy Policy</Link>
          </Button>

          <Button asChild>
          <Link href={`/termsofservice`}>Terms of Service</Link>
        </Button>
          
  </div>



  <section className="bg-black text-white w-full py-10">
  {/* Main Footer Content */}
  <div className="max-w-[1200px] mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
      
      {/* Column 1 */}
      <div>
        <h2 className="text-xl font-bold mb-4">ECO IT Solutions</h2>
        <p>About Us</p>
        <p>Our Mission</p>
        <p>Leadership</p>
        <p>Careers</p>
        <p>Press</p>
      </div>

      {/* Column 2 */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Resources</h2>
        <p>Help Center</p>
        <p>Community</p>
        <p>Guides</p>
        <p>Documentation</p>
        <p>FAQs</p>
      </div>

      {/* Column 3 */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Programs</h2>
        <p>Certifications</p>
        <p>Workshops</p>
        <p>Events</p>
        <p>Student Discounts</p>
        <p>Partners</p>
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-gray-700 mt-10"></div>

  {/* Bottom Bar */}
  <div className="max-w-[1000px] mx-auto px-4 py-4 flex justify-between text-xs">
    <span>&copy; {new Date().getFullYear()} ECO IT Solutions. All rights reserved.</span>
    <span>ECO IT Solutions</span>
  </div>
</section>
     
    </div>
  )
}



