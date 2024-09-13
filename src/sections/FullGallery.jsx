
import React from 'react'
import Nav from './Nav'
import art1 from '../assets/images/artwork1.jpg'
import art2 from '../assets/images/artwork2.jpg'
import art3 from '../assets/images/artwork3.jpg'
import art4 from '../assets/images/artwork4.jpg'
import art5 from '../assets/images/artwork5.jpg'
import art6 from '../assets/images/artwork6.jpg'
import art7 from '../assets/images/artwork7.jpg'
import art8 from '../assets/images/artwork8.jpg'
import GalleryCard from '../components/GalleryCard'
import Footer from './Footer'

import HomePage from './HomePage'

const FullGallery = () => {
  return (
    <main className='bg-gradient-to-br from-blue-purple to-black relative'>
        <Nav/>
        <p className='text-gray-200 text-4xl flex font-bold font-montserrat justify-center items-center pt-24'>
            My Gallery
        </p>
        <div className='flex flex-wrap justify-evenly gap-6 padding '>
            <GalleryCard 
                img={art1}
                height={400}
                width={250}
            />
            <GalleryCard 
                img={art2}
                height={400}
                width={300}
            />
            <GalleryCard 
                img={art3}
                height={400}
                width={500}
            />
            <GalleryCard 
                img={art4}
                height={400}
                width={300}
            />
            <GalleryCard 
                img={art5}
                height={400}
                width={300}
            />
            <GalleryCard 
                img={art6}
                height={400}
                width={300}
            />
            <GalleryCard 
                img={art7}
                height={400}
                width={300}
            />
            <GalleryCard 
                img={art8}
                height={400}
                width={300}
            />
        </div>
        <Footer />
    </main>
  )
}

export default FullGallery