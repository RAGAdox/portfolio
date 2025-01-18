import { sleep } from "@/utils";
import { motion, useAnimate, useInView } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./HeroSection1.scss";

const HeroSection1 = ({
  containerRef,
  setInView,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  setInView: () => void;
}) => {
  const [initialAnimated, setInitialAnimated] = useState<boolean>(false);
  const isInView = useInView(containerRef, { amount: 0.5, once: false });
  const [scope, animate] = useAnimate();

  const handleAnimation = async (isInView: boolean) => {
    await animate(
      scope.current,
      { opacity: isInView ? 1 : 0 },
      { duration: 0.5 }
    );
    setInitialAnimated(true);
    if (!initialAnimated) {
      await sleep(1000);
      console.log("animation");
      await animate(
        "#hero-section1-cta",
        { transform: ["rotate(-5deg)", "rotate(5deg)", "rotate(0deg)"] },
        { duration: 0.5 }
      );
    }
  };

  useEffect(() => {
    if (isInView) {
      setInView();
    }
    handleAnimation(isInView);
  }, [isInView]);
  return (
    <div ref={containerRef}>
      <motion.section
        ref={scope}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        id="main"
        className="home-section-1"
      >
        <div className="image-container">
          <img src="/assets/hero-section1.png" className="image" />
          <div className="pill-banner">
            <span className="active"></span>
            <p className="pill-text">Open to new Opportunities</p>
          </div>
        </div>
        <div className="introduction-container">
          <h1 className="name">Rishi Mukherjee</h1>
          <h2 className="role">Full Stack Web Developer</h2>
          <p className="summary">
            Dynamic Software Developer with 5+ years of expertise crafting
            seamless full-stack solutions using the MERN stack. Passionate about
            building high-performing, scalable web applications that deliver
            exceptional user experiences.
          </p>
        </div>
        <div>
          <Link
            to="#contact"
            id="hero-section1-cta"
            className="home-section-1-cta"
          >
            Let's Connect 🤙🏻
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection1;
