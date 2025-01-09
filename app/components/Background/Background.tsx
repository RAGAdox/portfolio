import { getRandomCoordinates, getRandomIntInRange } from "@/utils";
import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import "./Background.scss";

const Star = ({ x, y }: Coordinate) => {
  return (
    <motion.span
      className="star"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.7 }}
      transition={{
        duration: getRandomIntInRange(1, 5, true),
        delay: getRandomIntInRange(0, 5, true),
        ease: "easeInOut",
        repeatDelay: 1,
        repeat: Infinity,
      }}
      style={{
        x,
        y,
        scale: getRandomIntInRange(0, 1),
      }}
    />
  );
};

const Background = ({ particles = 500 }) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [particleCoordinates, setParticleCoordinates] = useState<Coordinate[]>(
    []
  );

  const populateCoordinates = () => {
    if (backgroundRef.current) {
      const clientRect = backgroundRef.current.getBoundingClientRect();
      const boundingPoints: BoundingPoints = {
        minX: clientRect.x,
        maxX: clientRect.right,
        minY: clientRect.y,
        maxY: clientRect.bottom,
      };
      setParticleCoordinates([]);
      Array.from({ length: particles }, () =>
        setParticleCoordinates((coordinates) => [
          ...coordinates,
          getRandomCoordinates(boundingPoints),
        ])
      );
    }
  };

  useLayoutEffect(() => {
    populateCoordinates();
    window.addEventListener("resize", populateCoordinates);
    return () => window.removeEventListener("resize", populateCoordinates);
  }, []);

  return (
    <div ref={backgroundRef} className="background">
      {particleCoordinates.length > 0 &&
        particleCoordinates.map(({ x, y }: Coordinate, index: number) => (
          <Star key={index} x={x} y={y} />
        ))}
    </div>
  );
};

export default Background;
