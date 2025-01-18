import { useEffect, useRef, useState } from "react";

import "./HeroSection2.scss";

const experienceList: ExperienceProps[] = [
  {
    startYear: 2015,
    endYear: 2019,
    imagePath: "/assets/hero-section2.png",
    organization: "Kalyani Government Engineering College",
    role: "Computer Science and Engineering",
    responsibilities: [
      "Core Member of KeyGen Coders",
      "Designed Promotional website for annual cultural and technical fest",
      "Developer Anti-Ragging Android Application",
    ],
    technologies: [
      "Java",
      "C/C++",
      "Cloud Computing",
      "Python",
      "Javascript",
      "Node.js",
      "React",
      "React-Native",
      "Express.js",
    ],
  },
  {
    startYear: 2019,
    endYear: 2021,
    imagePath: "/assets/hero-section2.png",
    organization: "TATA Consultancy Services Pvt. Ltd.",
    role: "System Engineer",
    responsibilities: [
      "Worked with a leading German Bank on Identity and Access Management Application",
      "Created windows application to archive production data into secure vaults and can be retrieved thereafter for auditing.",
      "Deliver timely diagnosis and resolution of issues while implementing preventative measures to enhance system stability.",
      "Created a Web Application to help facilitate regression testing.",
    ],
    technologies: [
      "Java",
      "OracleDB",
      "Spring Batch",
      "Spring Boot",
      "Liquibase",
      "Python",
    ],
  },
  {
    startYear: 2021,
    endYear: 2024,
    organization: "Infosys Pvt. Ltd.",
    role: "Specialist Programmer",
    responsibilities: [
      "Worked on multiple Enterprise Web Applications related to Auditing and Financial Management.",
      "Helped in performance optimization while dealing with larger datasets in client application.",
      "Created a service that would generate presentations based on Audit Results and Financial Data provided.",
      "Worked with a world leading consumer health company to launch new products and integrate them with third party sellers.",
      "Architected various features and Proof of Concepts including Refresh Token Rotation, Real-Time User recommendation and GraphQL integration.",
      "Supported to Kick-start new customer platform targeted towards women’s health.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "Redux",
      "TailwindCSS",
      "Docker",
      "Azure Kubernetees Services",
      "Github Actions",
      "HLD & LLD",
      "Recomendation Engine",
    ],
  },
  {
    startYear: 2024,
    endYear: "Present",
    organization: "IBM India Pvt. Ltd.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Developed and optimized backend services for RedHat Marketplace, focusing on Account Management and Product Discovery functionalities",
      "Executed component migration strategy from previous versions into CarbonV11",
      "Manage production systems, troubleshoot issues, and develop automation to improve operational efficiency and reduce manual intervention.",
    ],
    technologies: [
      "Node.js",
      "Koa.js",
      "React",
      "Next.js",
      "Instana",
      "Travis CI",
    ],
  },
];

import { DynamicIcon } from "lucide-react/dynamic";
import { motion, useInView } from "motion/react";

const ExperienceModal = ({
  experienceDetail,
  setCurrentIndex,
}: {
  experienceDetail: ExperienceProps;
  setCurrentIndex: (value: number | undefined) => void;
}) => {
  const {
    organization,
    startYear,
    endYear,
    role,
    responsibilities,
    technologies,
  } = experienceDetail;
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeModal = () => {
    setCurrentIndex(undefined);
  };

  const handleClickOutside = (e: any) => {
    if (
      containerRef.current &&
      cardRef.current &&
      !cardRef.current.contains(e.target)
    ) {
      closeModal();
    }
  };

  return (
    <div
      ref={containerRef}
      className="experience-modal"
      onClick={handleClickOutside}
    >
      <div ref={cardRef} className="experience-modal-card">
        <div>
          <div className="experience-modal-card-header">
            <p className="text-2xl font-serif">{organization}</p>
            <button
              autoFocus
              className="text-2xl self-start"
              onClick={closeModal}
            >
              <DynamicIcon name="x" />
            </button>
          </div>
          <p className="text-2xl font-serif">{`${startYear} - ${endYear}`}</p>
          <p className="text-2xl">{role}</p>
        </div>
        <div>
          <p className="text-2xl font-serif">Responsibilities -</p>
          <ul className="list-disc list-inside">
            {responsibilities.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-2xl font-serif">Technologies Used -</p>
          <ul className="experience-modal-card-footer">
            {technologies.map((value, index) => (
              <li key={index} className="experience-modal-card-footer-pill">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({
  experienceDetail,
  index,
  setCurrentIndex,
}: {
  experienceDetail: ExperienceProps;
  index: number;
  setCurrentIndex: (value: number) => void;
}) => {
  return (
    <div key={index} className="experience-card">
      <div className="experience-card-header">
        <p className="text-lg font-serif">{experienceDetail.organization}</p>
        <p
          className="text-lg font-serif
           "
        >{`${experienceDetail.startYear} - ${experienceDetail.endYear}`}</p>

        <p className="">{experienceDetail.role}</p>
      </div>
      <button
        className="experience-card-cta"
        onClick={() => setCurrentIndex(index)}
      >
        Know More
        <span>
          <DynamicIcon name="arrow-right" />
        </span>
      </button>
    </div>
  );
};

const HeroSection2 = ({
  containerRef,
  setInView,
}: {
  containerRef: React.RefObject<HTMLElement>;
  setInView: () => void;
}) => {
  const isInView = useInView(containerRef, { amount: 0.5, once: false });
  const [currentIndex, setCurrentIndex] = useState<number>();

  useEffect(() => {
    if (isInView) {
      setInView();
    }
  }, [isInView]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        id="experience"
        ref={containerRef}
        className="hero-section-2"
      >
        {currentIndex !== undefined && (
          <ExperienceModal
            experienceDetail={experienceList[currentIndex]}
            setCurrentIndex={setCurrentIndex}
          />
        )}
        {experienceList.map(
          (experienceDetail: ExperienceProps, index: number) => (
            <ExperienceCard
              experienceDetail={experienceDetail}
              key={index}
              setCurrentIndex={setCurrentIndex}
              index={index}
            />
          )
        )}
      </motion.section>
    </>
  );
};

export default HeroSection2;
