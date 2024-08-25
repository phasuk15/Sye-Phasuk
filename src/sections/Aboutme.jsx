


const Aboutme = () => {
  return (
    <section className="w-full flex justify-between items-center max-lg:flex-col gap-10 max-container">
      <div>
        <h2 className="text-white text-3xl font-bold font-montserrat justify-between">
            About
          <span className="text-3xl text-light-pink"> Me
          </span>
        </h2>
        <div className="flex flex-1 text-gray-200 lg:max-w-lg mt-5">
          Third year student studying Software Engineering at Lancaster University with a significant interest and passion in front-end and web design. 
        </div>
      </div >
      <div className="flex flex-col justify-center items-start">
        <div className="">
          Find me!
        </div>
      </div>

    </section>
  )
}

export default Aboutme