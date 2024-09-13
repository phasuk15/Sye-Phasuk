
import LinkedInIcon from '../components/icons/LinkedIn'
import YoutubeIcon from '../components/icons/YouTubeIcon'
import InstagramIcon from '../components/icons/InstagramIcon'
import GithubIcon from '../components/icons/GithubIcon'


const Aboutme = () => {

  return (
    <section className="w-full max-container flex flex-col mt-20">
      <div >
        <h2 className="text-white text-4xl font-bold font-montserrat text-center">
          About <span className="text-light-pink">Me</span>
        </h2>
        <div className="flex gap-10 justify-around items-start w-full max-lg:flex-col padding-y font-inter">
          <div>
            <p className="text-xl font-bold text-white italics font-fira">
              A little about me ...
            </p>
            <p className="flex flex-1 text-gray-200 lg:max-w-lg mt-5">
              I am a third-year student studying Software Engineering at Lancaster University with a significant interest and passion in front-end and web design.
            </p>
            <p className="flex flex-1 text-gray-200 lg:max-w-lg mt-3">
              I enjoy creating visually engaging and user friendly digital experiences that merge my technical skills with my creativity as an artist. 
            </p>
          </div>
          <div className="flex flex-col justify-center items-start text-white">
            <p className="font-archivo font-bold text-xl">
              Find me!
            </p>
            <p className='mt-5'>
              I post vlogs on my Youtube :))
            </p>
            <button className='mt-5 flex flex-wrap gap-10'>
              <LinkedInIcon size={30} fill={"#ababab"} hoverfill={"#FFFFFF"}/>
              <GithubIcon size={30} fill={"#ababab"}/>
              <InstagramIcon size={30} fill={"#ababab"}/>
              <YoutubeIcon size={30} fill={"#ababab"}/>
            </button>
            <button className='flex justify-center items-center gap-2 px-5 py-3 border font-montserrat rounded-md text:lg leading-none mt-8 hover:border-light-pink border-current hover:filter hover:glow'>
              Download CV
            </button>
          </div>
        </div>        
      </div>
    </section>  
  )
}

export default Aboutme