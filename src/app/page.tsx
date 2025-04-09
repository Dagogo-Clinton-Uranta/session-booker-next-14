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
    <div className="text-center container my-10 mx-auto max-w-4xl px-4">
      {/* Hero Section */}
      <section className="mb-10">
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
      </section>

      {/* Courses / Features Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Our Certification Tracks</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-gray-700">
          <li className="bg-gray-100 p-4 rounded-xl shadow-sm">📡 Network Engineering</li>
          <li className="bg-gray-100 p-4 rounded-xl shadow-sm">🐧 Linux & Red Hat Systems Engineering</li>
          <li className="bg-gray-100 p-4 rounded-xl shadow-sm">🖥 VMware Certification Training</li>
          <li className="bg-gray-100 p-4 rounded-xl shadow-sm">🪟 Microsoft Certified Systems Engineer (MCSE)</li>
          <li className="bg-gray-100 p-4 rounded-xl shadow-sm">🏥 Healthcare IT Professional Certifications</li>
        </ul>
      </section>

      {/* Carousel Section */}


      <section className="my-16">
  <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose ECO IT SOLUTIONS?</h2>

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

  {/* Optional: Caption indicators below */}
  <div className="flex justify-center gap-2 mt-4">
    {[...Array(5)].map((_, idx) => (
      <div key={idx} className="w-3 h-3 bg-gray-400 rounded-full" />
    ))}
  </div>
</section>
     
    </div>
  )
}






/**old carousel section */
//<section className="my-16">
//<h2 className="text-2xl font-semibold mb-6">Why Choose ECO IT SOLUTIONS?</h2>
//<div /*ref={sliderRef}*/ className="keen-slider rounded-xl overflow-hidden">
//{features.map((feature, index) => {
//const backgroundImages = [
//"https://images.unsplash.com/photo-1571260899304-425eee4c7efc", // classroom 1
//"https://images.unsplash.com/photo-1573497491208-6b1acb260507", // student on laptop
//"https://images.unsplash.com/photo-1558021212-51b6ecfa0db9",    // teacher with board
//"https://images.unsplash.com/photo-1600195077078-3abbc7b1e5f4", // IT training
//"https://images.unsplash.com/photo-1596496053861-52f33bbaafc6"  // group training
//]
//const bgImage = backgroundImages[index % backgroundImages.length]
//return (
//<div
//  key={index}
//  className="keen-slider__slide relative flex items-center justify-center text-white text-xl font-semibold px-4"
//  style={{
//    minHeight: "30vh",
//    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
//    backgroundSize: "cover",
//    backgroundPosition: "center",
//  }}
//>
//  {feature}
//</div>
//)
//})}
//</div>
//</section>