const keys = ["Slotfocus", "Trials Tracker", "IssueTracker"];

export type ProjectImage = {
  thumbnail: string;
  large: string;
};
export type Project = {
  name: string;
  codeUrl?: string;
  demoUrl?: string;
  description: string;
  technologies: string[];
  image: ProjectImage;
};

export const projects: Project[] = [
  {
    name: "Slotfocus",
    description:
      "Originally an on-premises managed solution, Slotfocus developed a web application of their existing platform in early 2020 to handle pandemic restrictions in casinos and a growing client base.",
    image: {
      thumbnail: "/images/slotfocus.png",
      large: "",
    },
    technologies: ["React", "Typescript", "Firebase", "Tableau", "ChakraUI"],
  },
  {
    name: "IssueTracker",
    description:
      "IssueTracker is a collaboration tool that is used to track and manage projects and issues. It provides a simple and flexible way to manage and track work, allowing users to easily create, assign, and monitor tasks, track progress, and collaborate with others in real-time",
    image: {
      thumbnail: "/images/issuetracker.png",
      large: "",
    },
    technologies: ["React", "GraphQL", "Node", "Express", "Postgres"],
    demoUrl: "https://issuetracker.jackdunn.info",
    codeUrl: "https://github.com/jdunn99/issuetracker",
  },
  {
    name: "Trials Tracker",
    description:
      "Trials Tracker is a data visualization web application for Destiny 2's Trials of Osiris game mode. The front-end is built using Next JS and contains a dashboard of 3 pages for viewing a Destiny 2 user's Trials of Osirsis statistics, their match history across all characters, and to check their guadian's loadouts.",
    image: {
      thumbnail: "/images/issuetracker.png",
      large: "",
    },
    technologies: ["React", "NextJS", "Tailwind", "Express"],
    demoUrl: "https://trialstracker.jackdunn.info",
    codeUrl: "https://github.com/jdunn99/trials-tracker",
  },
  {
    name: "FanStop",
    description: "",
    image: {
      thumbnail: "",
      large: "",
    },
    technologies: [] as string[],
  },
  {
    name: "Wordle",
    description: "",
    image: {
      thumbnail: "",
      large: "",
    },
    technologies: [] as string[],
  },
  {
    name: "Booking App",
    description: "",
    image: {
      thumbnail: "",
      large: "",
    },
    technologies: [] as string[],
  },
];

export const featuredProjects = projects.filter((project) =>
  keys.includes(project.name)
);
