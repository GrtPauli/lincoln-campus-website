import React from 'react'
import StyledUnderline from '../common/ui/StyledUnderline';

const facilities = [
  {
    id: 1,
    name: "Clinical Key",
  },
  {
    id: 2,
    name: "Lincoln Learning System (LLS)",
  },
  {
    id: 3,
    name: "Student Information Kiosk",
  },
  {
    id: 4,
    name: "Koha library system (borrowing / returning / renewal)",
  },
  {
    id: 5,
    name: "OPAC(online public access catalog)",
  },
  {
    id: 6,
    name: "Wireless Library & Ebrary (e-book)",
  },
  {
    id: 7,
    name: "Modern Computer Station",
  },
  {
    id: 8,
    name: "Reading area",
  },
  {
    id: 9,
    name: "Red Spot & Reference Collection",
  },
  {
    id: 10,
    name: "Newspaper, Magazines & Journals",
  },
  {
    id: 11,
    name: "World Map Guide",
  },
  {
    id: 12,
    name: "Student Lockers & 24 hours CCTV Monitoring",
  },
];  

export default function FacilitiesAndServicesContent() {
  return (
    <div className='w-full p-12 py-14 text-text text-md'>
      <div className='mb-4 inline-block text-2xl'>
        <h1>Facilities & Services</h1>
        <StyledUnderline />
      </div>

      <p className='mb-2'>
        Facilities maintenance and service organization that provides support services to the entire Lincoln University College campus community. Our maintenance program is designed to ensure the long-term protection and enhancement of the University’s capital assets.
      </p>

      <p className='mb-3'>
        Lincoln University also provides the following Facilities and Services:
      </p>

      {
        facilities.map(facility => (
          <div key={facility.id} className='flex items-center mb-2'>
            <span className='mr-2'>-</span>
            <span>{facility.name}</span>
          </div>
        ))
      }
    </div>
  )
}
