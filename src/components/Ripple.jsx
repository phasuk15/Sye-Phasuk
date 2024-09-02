import { useState, useRef } from "react";

const Ripple = () => {
  const [rippleArray, setRippleArray] = useState([]);

  const createRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = rippleContainer.width;
    const x = event.clientX - rippleContainer.left - size / 2;
    const y = event.clientY - rippleContainer.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      key: new Date().getTime(), // Unique key for each ripple
    };

    setRippleArray((prevRipples) => [...prevRipples, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRippleArray((prevRipples) => prevRipples.slice(1));
    }, 600); // Match the duration of your CSS animation
  };

  return (
    <div className="relative overflow-hidden" onMouseDown={createRipple}>
      {rippleArray.map((ripple) => (
        <span
          key={ripple.key}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
          className="ripple"
        />
      ))}
    </div>
  );
};

export default Ripple;
