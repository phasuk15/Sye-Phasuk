interface BookProps {
  seed: number;
  onClick?: () => void;
}

const bookStyles: {
  wrapper: string;
  inner: string[];
}[] = [
  {
    // 1: raspberry, medium tall — gold band top + bottom + centre square
    wrapper: "w-10 h-36 bg-raspberry border-l-4 border-l-[#82204a] border-r-2 border-r-[#e06088] outline outline-2 outline-rosewood",
    inner: [
      "absolute top-3 left-0 right-0 h-[3px] bg-[#d4a017]",
      "absolute bottom-3 left-0 right-0 h-[3px] bg-[#d4a017]",
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#d4a017]",
    ],
  },
  {
    // 2: raspberry wide short — triple stripe + gold dot
    wrapper: "w-12 h-28 bg-raspberry border-l-4 border-l-[#82204a] border-r-2 border-r-[#e06088] outline outline-2 outline-rosewood",
    inner: [
      "absolute top-[8px] left-0 right-0 h-[2px] bg-light-pink opacity-60",
      "absolute top-[14px] left-0 right-0 h-[2px] bg-light-pink opacity-60",
      "absolute top-[20px] left-0 right-0 h-[2px] bg-light-pink opacity-60",
      "absolute right-[6px] top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-[#d4a017]",
    ],
  },
  {
    // 3: ocean, slim tall — pixel cross
    wrapper: "w-8 h-32 bg-ocean border-l-[3px] border-l-[#1a4a5e] border-r-2 border-r-[#4a9ab8] outline outline-2 outline-[#0f2e3a]",
    inner: [
      "absolute top-[14px] left-1/2 -translate-x-[1px] w-[2px] h-[10px] bg-light-pink",
      "absolute top-[18px] left-1/2 -translate-x-[5px] w-[10px] h-[2px] bg-light-pink",
      "absolute bottom-[8px] left-0 right-0 h-[2px] bg-[#1a4a5e]",
    ],
  },
  {
    // 4: mauve-brown, medium tall — bookmark ribbon + crescent
    wrapper: "w-10 h-40 bg-mauve-brown border-l-4 border-l-[#5a2d3c] border-r-2 border-r-[#b07a8a] outline outline-2 outline-rosewood",
    inner: [
      "absolute top-0 right-[7px] w-[6px] h-[16px] bg-raspberry",
      "absolute top-[32px] left-[6px] w-[10px] h-[10px] rounded-full border-2 border-[#d4a017] bg-transparent",
      "absolute top-[32px] left-[10px] w-[8px] h-[10px] bg-mauve-brown",
      "absolute bottom-2 left-0 right-0 h-[2px] bg-[#5a2d3c]",
    ],
  },
  {
    // 5: ocean slim very short — pixel star
    wrapper: "w-6 h-28 bg-ocean border-l-[3px] border-l-[#1a4a5e] border-r-2 border-r-[#4a9ab8] outline outline-2 outline-[#0f2e3a]",
    inner: [
      "absolute top-[12px] left-1/2 -translate-x-[1px] w-[2px] h-[10px] bg-light-pink",
      "absolute top-[16px] left-1/2 -translate-x-[5px] w-[10px] h-[2px] bg-light-pink",
      "absolute bottom-[6px] left-0 right-0 h-[2px] bg-[#1a4a5e]",
      "absolute bottom-[10px] left-0 right-0 h-[2px] bg-[#1a4a5e]",
    ],
  },
  {
    // 6: rosewood wide tall — diamond gem + double rule
    wrapper: "w-12 h-40 bg-rosewood border-l-[5px] border-l-[#2a1510] border-r-2 border-r-[#6b3f30] outline outline-2 outline-[#1a0c08]",
    inner: [
      "absolute top-4 left-0 right-0 h-[2px] bg-mauve-brown",
      "absolute top-[28px] left-1/2 -translate-x-[7px] w-0 h-0 border-l-[7px] border-r-[7px] border-b-[7px] border-l-transparent border-r-transparent border-b-ocean",
      "absolute top-[35px] left-1/2 -translate-x-[7px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[9px] border-l-transparent border-r-transparent border-t-[#1a4a5e]",
      "absolute bottom-[12px] left-0 right-0 h-[2px] bg-mauve-brown",
    ],
  },
  {
    // 7: raspberry slim tall — lightning bolt
    wrapper: "w-8 h-40 bg-raspberry border-l-4 border-l-[#82204a] border-r-2 border-r-[#e06088] outline outline-2 outline-rosewood",
    inner: [
      "absolute top-[18px] left-1/2 -translate-x-[4px] w-0 h-0 border-l-[5px] border-r-[2px] border-b-[9px] border-l-transparent border-r-transparent border-b-[#f7d060]",
      "absolute top-[27px] left-1/2 -translate-x-[2px] w-0 h-0 border-l-[2px] border-r-[5px] border-t-[9px] border-l-transparent border-r-transparent border-t-[#f7d060]",
      "absolute bottom-[8px] left-0 right-0 h-[2px] bg-[#82204a]",
    ],
  },
  {
    // 8: ocean medium — padlock
    wrapper: "w-10 h-32 bg-ocean border-l-[3px] border-l-[#1a4a5e] border-r-2 border-r-[#4a9ab8] outline outline-2 outline-[#0f2e3a]",
    inner: [
      "absolute top-[16px] left-1/2 -translate-x-[6px] w-[12px] h-[8px] bg-[#d4a017] border-2 border-[#a07010]",
      "absolute top-[10px] left-1/2 -translate-x-[4px] w-[8px] h-[8px] rounded-t-full border-2 border-[#d4a017] border-b-0 bg-transparent",
      "absolute top-[20px] left-1/2 -translate-x-[1px] w-[2px] h-[3px] bg-[#1a4a5e]",
      "absolute bottom-2 left-0 right-0 h-[2px] bg-[#1a4a5e]",
    ],
  },
  {
    // 9: mauve-brown medium — pixel heart + rules
    wrapper: "w-10 h-28 bg-mauve-brown border-l-4 border-l-[#5a2d3c] border-r-2 border-r-[#b07a8a] outline outline-2 outline-rosewood",
    inner: [
      "absolute top-3 left-0 right-0 h-[3px] bg-[#5a2d3c]",
      "absolute top-[22px] left-[calc(50%-5px)] w-[4px] h-[4px] bg-light-pink rounded-tl-full",
      "absolute top-[22px] left-[calc(50%+1px)] w-[4px] h-[4px] bg-light-pink rounded-tr-full",
      "absolute top-[26px] left-1/2 -translate-x-[5px] w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-light-pink",
      "absolute bottom-3 left-0 right-0 h-[3px] bg-[#5a2d3c]",
    ],
  },
  {
    // 10: rosewood wide tall — pixel flower
    wrapper: "w-12 h-40 bg-rosewood border-l-[5px] border-l-[#2a1510] border-r-2 border-r-[#6b3f30] outline outline-2 outline-[#1a0c08]",
    inner: [
      "absolute top-[14px] left-1/2 -translate-x-[1px] w-[2px] h-[2px] bg-light-pink",
      "absolute top-[16px] left-[calc(50%-5px)] w-[2px] h-[2px] bg-light-pink",
      "absolute top-[16px] left-[calc(50%+3px)] w-[2px] h-[2px] bg-light-pink",
      "absolute top-[20px] left-[calc(50%-5px)] w-[2px] h-[2px] bg-light-pink",
      "absolute top-[20px] left-[calc(50%+3px)] w-[2px] h-[2px] bg-light-pink",
      "absolute top-[18px] left-1/2 -translate-x-[1px] w-[2px] h-[2px] bg-[#d4a017]",
      "absolute top-[26px] left-1/2 -translate-x-[1px] w-[2px] h-[12px] bg-[#6b3f30]",
      "absolute bottom-3 left-0 right-0 h-[2px] bg-[#2a1510]",
    ],
  },
];

const Book = ({ seed, onClick }: BookProps) => {
  const style = bookStyles[seed % bookStyles.length];

  return (
    <div
      onClick={onClick}
      className={`${style.wrapper} relative cursor-pointer hover:-translate-y-2 transition-transform duration-150`}
    >
      {style.inner.map((cls, i) => (
        <div key={i} className={cls} />
      ))}
    </div>
  );
};

export default Book;