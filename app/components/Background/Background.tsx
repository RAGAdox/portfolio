import { useAnimate } from "motion/react";
import { useEffect, useState } from "react";
import "./Background.scss";

const Background = ({ currentIndex }: { currentIndex: number }) => {
  const [isInitial, setIsInitial] = useState(true);
  const [scope, animate] = useAnimate();

  const animateCircle = async () => {
    await animate(
      "#circle-1",
      { scale: isInitial ? [0, 100] : [100, 50, 100] },
      { duration: 0.5, ease: "circInOut" }
    );
  };

  useEffect(() => {
    animateCircle();
    setIsInitial(false);
  }, [currentIndex]);

  return (
    <div ref={scope} className="background flex justify-center items-center">
      <div id="circle-1" className="circle w-1 h-1 blur-sm"></div>
    </div>
  );
};

export default Background;
