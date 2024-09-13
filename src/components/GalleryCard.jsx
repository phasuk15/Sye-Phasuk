

const GalleryCard = ({img, height, width}) => {
  return (
    <div className=''>
        <img
            src={img}
            height={height}
            width={width}
            className="transition-transform ease-in-out duration-300 hover:scale-105 rounded-md opacity-75 hover:opacity-100"
        />
    </div>
  )
}

export default GalleryCard