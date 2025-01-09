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
      className="z-50 fixed inset-0 backdrop-blur-3xl content-center"
      onClick={handleClickOutside}
    >
      <div
        ref={cardRef}
        className="relative flex max-h-svh md:w-1/2 lg:w-1/3 mx-auto flex-col gap-y-4 p-2 rounded-lg border overflow-scroll"
      >
        <button
          autoFocus
          className="absolute top-2 right-2 text-2xl pr-1"
          onClick={closeModal}
        >
          X
        </button>
        <div>
          <div className="flex flex-row items-start justify-between gap-x-4">
            <p className="text-2xl font-serif">{organization}</p>
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
          <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2">
            {technologies.map((value, index) => (
              <li key={index} className="bg-black rounded-lg px-2 text-nowrap">
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
    <div
      key={index}
      className="flex flex-col gap-y-4 border rounded-lg w-full md:w-1/2 lg:w-1/3 backdrop-blur-md"
    >
      <div className="flex flex-col px-2">
        <p className="text-lg font-serif">{experienceDetail.organization}</p>
        <p
          className="text-lg font-serif
           "
        >{`${experienceDetail.startYear} - ${experienceDetail.endYear}`}</p>

        <p className="">{experienceDetail.role}</p>
      </div>
      <button
        className="border text-left px-2  bg-slate-100 py-2 rounded-lg text-slate-900 hover:bg-slate-100/75"
        onClick={() => setCurrentIndex(index)}
      >
        Know More {"->"}
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
        className="relative h-svh flex flex-col px-2 md:w-full md:items-center justify-center  gap-y-4 md:snap-start"
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
