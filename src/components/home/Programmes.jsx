import React from 'react'

const programmes = [
  {
    id: 1,
    image: "https://example.com/programme1.jpg",
    title: "Programme Enquiry",
    cta: "Enquire Now",
    href: "/enquiry",
  },
  {
    id: 2,
    image: "https://example.com/programme1.jpg",
    title: "Programme Eligibility",
    cta: "Check Eligibility",
    href: "/eligibility",
  },
  {
    id: 3,
    image: "https://example.com/programme1.jpg",
    title: "Faculty & School",
    cta: "Click to Learn More",
    href: "/faculty",
  },
];

function Programmes() {
  return (
    <div className='w-full p-12 flex items-center justify-center'>
        {programmes.map((programme)=> (
            <div key={programme.id}>
               <img src={programme.image} alt="" />
               <h2>{programme.title}</h2>
               <a href={programme.href}>{programme.cta}</a>     
            </div>
        ))}          
    </div>
  )
}

export default Programmes