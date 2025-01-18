import { Menu } from "lucide-react";
import { useState } from "react";
import "./TopNavigation.scss";

interface ITopNavigationLink {
  to: string;
  display: string;
}

const topNavigationLinks: ITopNavigationLink[] = [
  {
    to: "#",
    display: "Home",
  },
  {
    to: "#experience",
    display: "Experiences",
  },
  {
    to: "#projects",
    display: "Projects",
  },
  {
    to: "#contact",
    display: "Contact",
  },
];

const TopNavigation = ({
  refArray,
  currentIndex,
}: {
  refArray: React.RefObject<HTMLElement>[];
  currentIndex: number;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigateToIndex = (index: number) => {
    refArray[index].current?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
    window.location.hash = "";
  };

  return (
    <>
      <nav className="nav-container">
        <div className="hidden md:flex flex-row border rounded-full border-white/15 backdrop-blur-3xl bg-slate-400/50 gap-x-4">
          {topNavigationLinks.map((navItem, index) => (
            <button
              key={index}
              onClick={() => {
                navigateToIndex(index);
              }}
              className={`nav-item ${
                currentIndex === index ? "nav-item-active" : ""
              }`}
            >
              {navItem.display}
            </button>
          ))}
        </div>
        <div className="relative flex flex-row md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </button>
        </div>
        {isOpen && (
          <div className=" backdrop-blur-3xl h-svh fixed inset-0 z-40 flex flex-col justify-center  gap-y-4">
            {topNavigationLinks.map((link, index) => (
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigateToIndex(index);
                }}
                className={`w-1/2 mx-auto text-lg nav-item ${
                  index === currentIndex ? "nav-item-active" : ""
                }`}
                key={index}
              >
                {link.display}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default TopNavigation;
