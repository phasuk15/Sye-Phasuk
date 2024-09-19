const YoutubeIcon = ({fill, hoverfill, size, props}) => (
  <a
    href="https://www.youtube.com/@dianas15"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      viewBox="0 -3 20 20"
      className="hover:fill-light-pink transition-transform duration-200 ease-in-out transform hover:scale-110"
      {...props}
    >
      <title>{"youtube [#168]"}</title>
      <path
        fillRule="evenodd"
        d="M7.988 9.586V3.974c1.993.938 3.536 1.843 5.36 2.82-1.505.834-3.367 1.77-5.36 2.792m11.103-8.403c-.344-.453-.93-.805-1.553-.922-1.833-.348-13.267-.349-15.099 0-.5.094-.945.32-1.328.673C-.5 2.429.005 10.452.393 11.75c.164.562.375.968.64 1.235.343.352.812.594 1.351.703 1.51.312 9.284.486 15.122.047a2.62 2.62 0 0 0 1.39-.712c1.49-1.49 1.388-9.962.195-11.841"
      />
    </svg>

  </a>
  )
export default YoutubeIcon