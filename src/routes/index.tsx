import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.scss?inline";
import type { Post } from "~/assets/static/posts";
import {
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "qwik-feather-icons";
import type { Project } from "~/assets/static/projects";
import { featuredProjects } from "~/assets/static/projects";
import { Flex } from "~/components/flex";
import { Link } from "~/components/link";

interface SectionProps {
  heading: string;
}

interface ProjectProps {
  project: Project;
  reverse?: boolean;
}

interface PostProps {
  post: Post;
}

const tempPost: Post = {
  title: "Test",
  description: "This is a test post",
  slug: "1",
  published: "Jan 20, 2022",
};

const ProjectCard = component$(({ project, reverse }: ProjectProps) => {
  useStylesScoped$(styles);
  const { name, technologies, codeUrl, demoUrl, description } = project;

  return (
    <Flex
      align="center"
      justify="space-between"
      className="container"
      direction={`${reverse ? "row-reverse" : "row"}`}
      style={`${reverse ? "text-align:right" : "text-align: left"}`}
    >
      <Flex
        direction="column"
        flex="1"
        gap="1rem"
        justify={`${reverse ? "flex-end" : "flex-start"}`}
      >
        <h3>{name}</h3>
        <Flex align="center" gap="1rem">
          {technologies.map((technology, index) => (
            <span key={index} class="accent">
              {technology}
            </span>
          ))}
        </Flex>

        <p class="description">{description}</p>
        <Flex align="center" gap="1rem">
          {typeof demoUrl !== "undefined" ? (
            <Link href={demoUrl}>
              <ExternalLinkIcon />
            </Link>
          ) : null}
          {typeof codeUrl !== "undefined" ? (
            <Link href={codeUrl}>
              <GithubIcon />
            </Link>
          ) : null}
        </Flex>
      </Flex>
      <div style="flex: 1;">Image</div>
    </Flex>
  );
});

const RecentPost = component$(({ post }: PostProps) => {
  useStylesScoped$(styles);
  const { title, description, published } = post;

  return (
    <div class="post-container">
      <Flex align="center">
        <h3 style="flex:1;">{title}</h3>
        <p>{published}</p>
      </Flex>
      <p class="description" style="font-size: 14px">
        {description}
      </p>
    </div>
  );
});

const Section = component$(({ heading }: SectionProps) => {
  useStylesScoped$(styles);
  return (
    <section>
      <h2 class="accent">{heading}</h2>
      <Slot />
    </section>
  );
});

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <section class="hero">
        <h1 class="accent">Jack Dunn</h1>
        <p class="description">
          Full stack web developer focusing on creating applications with React
          and Node. <br /> Currently working part-time building the{" "}
          <span class="accent">
            <a href="https://slotfocus.com" target="_blank">
              Slotfocus
            </a>
          </span>{" "}
          web application.
        </p>
        <p class="subtext">Open to full-time positions.</p>
        <Flex direction="column" align="center">
          <p class="accent contact">Contact Me</p>
          <Flex align="center" justify="center" gap="1rem">
            <Link href="#">
              <MailIcon class="icon-link" />
            </Link>
            <Link href="https://github.com/jdunn99">
              <GithubIcon />
            </Link>
            <Link href="https://github.com/jdunn99">
              <LinkedinIcon />
            </Link>
          </Flex>
        </Flex>
      </section>
      <Section heading="Projects">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            project={project}
            reverse={index % 2 !== 0}
            key={index}
          />
        ))}
      </Section>
      <Section heading="Recent Posts">
        <RecentPost post={tempPost} />
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Jack Dunn",
  meta: [
    {
      name: "description",
      content: "Full stack developer from Selbyville, DE",
    },
  ],
};
