
import art1 from '../assets/images/artwork1.jpg'
import art2 from '../assets/images/artwork2.jpg'
import art4 from '../assets/images/artwork4.jpg'
import GalleryCard from '../components/GalleryCard'
import {Link} from 'react-router-dom'


const Gallery = () => {
  return (
    <section className="text-center relative w-full max-container flex flex-col bg-gradient-to-b from-deep-blue to-background-colour pt-24">
        <h4 className="font-montserrat text-white text-4xl font-bold">
            Gallery
        </h4>
        <p className="text-gray-300 mt-5 font-inter padding-x text-lg ">
          I also do art! Take a look at some of my pieces :))
        </p>
        <div className='max-container flex justify-center flew-wrap gap-9 pt-20'>
          <GalleryCard 
            img={art1}
            height={400}
            width={300}
          />
          <GalleryCard 
            img={art2}
            height={400}
            width={300}
          />
          <GalleryCard 
            img={art4}
            height={400}
            width={300}
          />
        </div>
        <button className='pb-24 pt-12'>
          <Link to='/FullGallery' className='text-gray-400 text-lg btn'>
            Click for more
          </Link>
        </button>

    </section>
  )
}

export default Gallery