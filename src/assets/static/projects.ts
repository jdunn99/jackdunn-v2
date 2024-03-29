const keys = ["Slotfocus", "Trials Tracker", "IssueTracker"];

// Used for 2 column layout
export type LargeImage = {
  main: string;
  children?: string[];
};
export type ProjectImage = {
  large: LargeImage;
};
export type Project = {
  name: string;
  codeUrl?: string;
  demoUrl?: string;
  description: string;
  technologies: string[];
  image: ProjectImage;
  slug: string;
};

export const projects: Project[] = [
  {
    slug: "/projects/slotfocus",
    name: "Slotfocus",
    description:
      "Originally an on-premises managed solution, Slotfocus developed a web application of their existing platform in early 2020 to handle pandemic restrictions in casinos and a growing client base.",
    image: {
      large: {
        main: "/images/slotfocus.svg",
      },
    },
    technologies: ["React", "Typescript", "Firebase", "Tableau", "ChakraUI"],
  },
  {
    slug: "/projects/issuetracker",
    name: "IssueTracker",
    description:
      "IssueTracker is a collaboration tool that is used to track and manage projects and issues. It provides a simple and flexible way to manage and track work, allowing users to easily create, assign, and monitor tasks, track progress, and collaborate with others in real-time",
    image: {
      large: {
        main: "/images/issue-main.svg",
        children: [
          "/images/issue-child.svg",
          "/images/issue-child2.svg",
          "/images/issue-child3.svg",
        ],
      },
    },
    technologies: ["React", "GraphQL", "Node", "Express", "Postgres"],
    demoUrl: "https://issuetracker.jackdunn.info",
    codeUrl: "https://github.com/jdunn99/issuetracker",
  },
  {
    slug: "/projects/trials-tracker",
    name: "Trials Tracker",
    description:
      "Trials Tracker is a data visualization web application for Destiny 2's Trials of Osiris game mode. The front-end is built using Next JS and contains a dashboard of 3 pages for viewing a Destiny 2 user's Trials of Osirsis statistics, their match history across all characters, and to check their guadian's loadouts.",
    image: {
      large: {
        main: "/images/trials-main.svg",
        children: ["/images/trials-child1.svg", "/images/trials-child2.svg"],
      },
    },
    technologies: ["React", "NextJS", "Tailwind", "Express"],
    demoUrl: "https://trialstracker.jackdunn.info",
    codeUrl: "https://github.com/jdunn99/trials-tracker",
  },
  {
    slug: "/projects/fanstop",
    name: "FanStop",
    description: "",
    image: {
      large: {
        main: "",
      },
    },
    technologies: [] as string[],
  },
];

export const featuredProjects = projects.filter((project) =>
  keys.includes(project.name)
);
