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
  return (
    <nav className="nav-container">
      {topNavigationLinks.map((navItem, index) => (
        <button
          key={index}
          onClick={() => {
            refArray[index].current?.scrollIntoView({
              behavior: "smooth",
              inline: "start",
            });
            window.location.hash = "";
          }}
          className={`nav-item ${
            currentIndex === index ? "nav-item-active" : ""
          }`}
        >
          {navItem.display}
        </button>
      ))}
    </nav>
  );
};

export default TopNavigation;