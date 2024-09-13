
import art1 from '../assets/images/artwork1.jpg'
import art2 from '../assets/images/artwork2.jpg'
import art4 from '../assets/images/artwork4.jpg'
import GalleryCard from '../components/GalleryCard'
import arrow from '../assets/icons/arrow.svg'
import {Link} from 'react-router-dom'



const Gallery = () => {
  return (
    <section className="text-center relative w-full max-container flex flex-col">
        <h4 className="text-gray-200 text-4xl flex font-bold font-montserrat justify-center items-center">
            Gallery
        </h4>
        <p className="text-gray-400 font-fira text-lg mt-4">
          I also do art! Take a look at some of my pieces :))
        </p>
        <div className='max-container flex justify-center flew-wrap gap-9 mt-9'>
          <GalleryCard 
            img={art1}
            alt="clothes"
          />
          <GalleryCard 
            img={art2}
            alt="bright"
          />
          <GalleryCard 
            img={art4}
            alt="cute"
          />
        </div>
        <Link to='/FullGallery' className='text-gray-500 mt-9 hover:text-light-pink'>
          Click for more
        </Link>
    </section>
  )
}

export default Gallery