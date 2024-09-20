import { useState } from 'react';

const GalleryCard = ({ img, height, width }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='cursor-pointer'>
        <img
          src={img}
          alt=""
          height={height}
          width={width}
          className="transition-transform ease-in-out duration-300 hover:scale-105 rounded-md opacity-75 hover:opacity-100"
          onClick={openModal}
        />
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={img}
              alt="artwork"
              className="max-h-[90vh] max-w-[90vw] rounded-md"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryCard;
