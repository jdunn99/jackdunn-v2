import {
  component$,
  Slot,
  useStyles$,
  useStylesScoped$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.scss?inline";
import type { Post } from "~/assets/static/posts";
import { GithubIcon, LinkedinIcon, MailIcon } from "qwik-feather-icons";
import type { Project } from "~/assets/static/projects";
import { featuredProjects } from "~/assets/static/projects";
import { Flex } from "~/components/flex";
import { Link } from "~/components/link";
import { Heading, Text } from "~/components/fonts/fonts";
import { Button } from "~/components/button";

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
  useStyles$(styles);
  const { name, technologies, description, image } = project;

  return (
    <div class={`container ${reverse && "reversed"}`}>
      <div class={`project-content ${reverse && "reversed"}`}>
        <div>
          <Heading variant="small">Featured Project</Heading>
          <Heading>{name}</Heading>
        </div>

        <Text>{description}</Text>
        <div class="project-subcontent">
          <Slot />
        </div>
        <div class="project-subcontent">
          {technologies.map((technology, index) => (
            <Text style="color:var(--tertiary-color)" variant="small">
              <span key={index}>{technology}</span>
            </Text>
          ))}
        </div>
      </div>

      <div class="project-image">
        <img src="./public/images/test.svg" />
      </div>
    </div>
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
      <Heading>{heading}</Heading> <Slot />
    </section>
  );
});

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <Flex direction="column" gap="14rem">
      <section class="hero">
        <Flex
          direction="column"
          gap="3rem"
          justify="center"
          align="center"
          style="text-align: center; "
        >
          <Heading variant="large">
            Experienced Full Stack Developer Seeking Full-Time Positions
          </Heading>
          <Text style="max-width: 1000px;">
            Specializing in React and Node.js, I build innovative web
            applications that cater to your unique needs. Currently working part
            time on the{" "}
            <span class="accent">
              <a href="https://slotfocus.com" target="_blank">
                Slotfocus
              </a>
            </span>{" "}
            web app - a data analytics tool for casinos.
          </Text>
        </Flex>
      </section>
      <section class="contact">
        <Flex direction="column" align="center" gap="1rem">
          <Heading variant="small">Get in touch</Heading>
          <Flex align="center" justify="center" gap="2.5rem">
            <Link href="#">
              <MailIcon class="icon-link" />
            </Link>
            <Link href="http://github.com/jdunn99">
              <GithubIcon />
            </Link>
            <Link href="https://github.com/jdunn99">
              <LinkedinIcon />
            </Link>
          </Flex>
        </Flex>
      </section>
      <Section heading="Projects">
        <Flex direction="column" gap="16.6rem">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              project={project}
              reverse={index % 2 !== 0}
              key={index}
            >
              {typeof project.demoUrl !== "undefined" ? (
                <Button href={project.demoUrl}>Demo</Button>
              ) : null}
              {typeof project.codeUrl !== "undefined" ? (
                <Button href={project.codeUrl} outlined>
                  Code
                </Button>
              ) : null}
              {typeof project.codeUrl === "undefined" &&
              typeof project.demoUrl === "undefined" ? (
                <Button href="#">Learn more about {project.name}</Button>
              ) : null}
            </ProjectCard>
          ))}
        </Flex>
      </Section>
      <Section heading="Recent Posts">
        <RecentPost post={tempPost} />
      </Section>
    </Flex>
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
