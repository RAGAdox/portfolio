import { DynamicIcon } from "lucide-react/dynamic";
import { motion, useInView } from "motion/react";
import { useEffect } from "react";

const HeroSection4 = ({
  containerRef,
  setInView,
}: {
  containerRef: React.RefObject<HTMLElement>;
  setInView: () => void;
}) => {
  const isInView = useInView(containerRef, { amount: 0.5, once: false });

  useEffect(() => {
    if (isInView) {
      setInView();
    }
  }, [isInView]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      id="contact"
      ref={containerRef}
      className="relative h-svh flex flex-col px-2 md:w-full md:items-center justify-center gap-y-4 md:snap-start"
    >
      <div className="flex flex-col items-center ">
        <img src="/assets/hero-section4.png" className="w-1/3" />
        <p className="bg-black px-2 rounded-lg border border-white/25">
          Contact me on
        </p>
        <div className="flex flex-row gap-x-4 py-2 ">
          <a
            href="http://www.linkedin.com/in/rishi-mukherjee-a89a11142"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DynamicIcon name="linkedin" />
          </a>
          <a
            href="https://github.com/RAGAdox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DynamicIcon name="github" />
          </a>
          <a href="mailto:rishirishi20121997@gmail.com">
            <DynamicIcon name="mail" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection4;
