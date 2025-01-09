import { motion, useInView } from "motion/react";
import { useEffect } from "react";
import { Link } from "react-router";
import "./HeroSection1.scss";

const HeroSection1 = ({
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
      transition={{ duration: 0.5 }}
      ref={containerRef}
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
        <Link to="#contact" className="home-section-1-cta">
          Let's Connect 🤙🏻
        </Link>
      </div>
    </motion.section>
  );
};

export default HeroSection1;
