


const Aboutme = () => {

  return (
    <section className="w-full max-container flex flex-col bg-wave-blue">
      <div >
        <h2 className="text-white text-4xl font-bold font-montserrat text-center pt-24">
          About <span className="text-light-pink">Me</span>
        </h2>
        <div className="flex gap-10 justify-around items-start w-full max-lg:flex-col padding-y font-inter">
          <div>
            <p className="text-xl font-bold text-white italics font-fira">
              A little about me
            </p>
            <p className="flex flex-1 text-gray-200 lg:max-w-lg mt-5">
              I am a third-year student studying Software Engineering at Lancaster University with a significant interest and passion in front-end and web design.
            </p>
            <p className="flex flex-1 text-gray-200 lg:max-w-lg mt-3">
              I enjoy creating visually engaging and user friendly digital experiences that merge my technical skills with my creativity as an artist. 
            </p>
            <p className="flex flex-1 text-gray-200 lg:max-w-lg mt-3">
              I also have a Youtube channel! I post some vlogs on there.
            </p>
          </div>
        </div>        
      </div>
    </section>  
  )
}

export default Aboutme