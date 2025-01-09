import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const projectDetails: ProjectProps[] = [
  {
    name: "Anti-Raging Android Application",
    active: true,
    description:
      "Anti-Raging android application was built for reducing and responding to bulling incidents on and off campus.",
    technologies: [
      "React-Native",
      "Expo",
      "Node.js",
      "MongoDB Atlas",
      "Express.js",
      "MailChimp",
    ],
  },
  {
    name: "Portfolio Website",
    active: true,
    description:
      "A portfolio website to showcase skill and get to use new technologies like react-router v7",
    technologies: ["React", "React-Router V7", "Tailwind CSS"],
  },
  {
    name: "Zenith",
    active: false,
    description:
      "Open Source React SSR Framework that is completely customizable",
    technologies: ["React V19", "Express.js", "Vite"],
  },
  {
    name: "Imaginfolio-Auth",
    description: "Plug and Play authentication service",
    active: true,
    technologies: ["Node.js", "Koa.js", "Zod", "PostgreSQL", "Redis"],
  },
];

const ProjectModal = ({
  projectDetail,
  setCurrentIndex,
}: {
  projectDetail: ProjectProps;
  setCurrentIndex: (value: number | undefined) => void;
}) => {
  const { name, description, technologies } = projectDetail;

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
      className="z-50 fixed inset-0 backdrop-blur-3xl content-center"
      ref={containerRef}
      onClick={handleClickOutside}
    >
      <div
        ref={cardRef}
        className="relative flex max-h-svh md:w-1/2 lg:w-1/3 mx-auto flex-col gap-y-4 p-2 rounded-lg border overflow-y-scroll"
      >
        <button
          className=" absolute top-2 right-2 text-2xl pr-1"
          autoFocus
          onClick={closeModal}
        >
          X
        </button>
        <div>
          <div className="flex flex-row justify-between">
            <p className="text-2xl font-serif">{name}</p>
          </div>
          <p className="text-lg">{description}</p>
        </div>
        <div>
          <p className="text-2xl">Technologies Used -</p>
          <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2">
            {technologies.map((value, index) => (
              <li className="bg-black rounded-lg px-2 text-nowrap" key={index}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const HeroSection3 = ({
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
      className="relative h-svh flex flex-col px-2 md:w-full md:items-center justify-center  gap-y-4 md:snap-start"
    >
      {currentIndex !== undefined && (
        <ProjectModal
          projectDetail={projectDetails[currentIndex]}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      {projectDetails.map(
        ({ name, description, technologies, active }, index) => (
          <div className="flex flex-col gap-y-4 border rounded-lg w-full md:w-1/2 lg:w-1/3 backdrop-blur-md">
            <div className="flex flex-row items-center justify-between">
              <p className="text-2xl font-serif px-2">{name}</p>
              {active !== undefined && (
                <span
                  className={`w-1 h-1 ${
                    active ? "bg-green-500" : "bg-red-500"
                  } rounded-full mr-4`}
                ></span>
              )}
            </div>
            <button
              className="border text-left px-2  bg-slate-100 py-2 rounded-lg text-slate-900 hover:bg-slate-100/75"
              onClick={() => setCurrentIndex(index)}
            >
              Know More {"->"}
            </button>
          </div>
        )
      )}
    </motion.section>
  );
};

export default HeroSection3;
