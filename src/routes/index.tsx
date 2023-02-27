import {
  component$,
  Slot,
  useBrowserVisibleTask$,
  useSignal,
  useStyles$,
  useStylesScoped$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.scss?inline";
import type { Post } from "~/assets/static/posts";
import { GithubIcon, LinkedinIcon, MailIcon } from "qwik-feather-icons";
import type { Project, ProjectImage } from "~/assets/static/projects";
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

interface LinkProps {
  href: string;
}

interface SkillProps {
  image?: string;
  title: string;
  subtitle: string;
}

interface ImageProps {
  image: ProjectImage;
}

const tempPost: Post = {
  title: "Test",
  description: "This is a test post",
  slug: "1",
  published: "Jan 20, 2022",
};

const MainLink = component$(({ href }: LinkProps) => {
  useStylesScoped$(styles);
  return (
    <div class="centered">
      <a class="styled-link" href={href}>
        <Slot />
      </a>
    </div>
  );
});

const ProjectCard = component$(({ project, reverse }: ProjectProps) => {
  useStyles$(styles);

  const visible = useSignal("hidden");
  const { name, technologies, description, image } = project;

  useBrowserVisibleTask$(() => {
    visible.value = "shown";
  });

  return (
    <div class={`${visible.value} container ${reverse && "reversed"}`}>
      <div class={` project-content ${reverse && "reversed"}`}>
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
      <Images image={image} />
    </div>
  );
});

const Images = component$(({ image }: ImageProps) => {
  useStyles$(styles);
  const visible = useSignal("hidden");

  useBrowserVisibleTask$(() => {
    visible.value = "img-shown";
  });

  return (
    <div
      class={`images ${visible.value}`}
      style={`grid-template-columns: ${
        image.large.children ? "1fr 1fr" : "1fr"
      }`}
    >
      <img src={image.large.main} />
      {image.large.children ? (
        <div>
          {image.large.children.map((image: string) => (
            <img src={image} key={image} />
          ))}
        </div>
      ) : null}
    </div>
  );
});

const RecentPost = component$(({ post }: PostProps) => {
  const { title, published, description } = post;

  useStyles$(styles);
  const visible = useSignal("hidden");

  useBrowserVisibleTask$(() => {
    visible.value = "img-shown";
  });

  return (
    <div class={`${visible.value} post`}>
      <Heading class="post-title">{title}</Heading>
      <Text>{published}</Text>
      <Text>{description} </Text>
    </div>
  );
});

const Skill = component$(({ title, subtitle, image }: SkillProps) => {
  useStyles$(styles);
  const visible = useSignal("hidden");

  useBrowserVisibleTask$(() => {
    visible.value = "img-shown";
  });

  return (
    <div class={`${visible.value} item`}>
      <img src={image} />
      <div>
        <Text class="heading">{title}</Text>
        <Text variant="small">{subtitle}</Text>
      </div>
    </div>
  );
});

const Section = component$(({ heading }: SectionProps) => {
  useStyles$(styles);
  const visible = useSignal("hidden");

  useBrowserVisibleTask$(() => {
    visible.value = "shown";
  });

  return (
    <section class={visible}>
      <Heading class="test">{heading}</Heading>
      <Slot />
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
            Full Stack Developer Seeking Full-Time Positions
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
            <Link href="https://github.com/jdunn99">
              <GithubIcon />
            </Link>
            <Link href="https://github.com/jdunn99">
              <LinkedinIcon />
            </Link>
          </Flex>
        </Flex>
      </section>
      <section>
        <div class="project-container">
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
        </div>
        <MainLink href="/projects">View all projects</MainLink>
      </section>
      <Section heading="">
        <div class="posts-container">
          <div class="posts">
            <Heading>Recent Posts</Heading>
            <RecentPost post={tempPost} />
            <div class="post-grid">
              <RecentPost post={tempPost} />
              <RecentPost post={tempPost} />
              <RecentPost post={tempPost} />
            </div>
          </div>
        </div>
        <MainLink href="/projects">View all posts</MainLink>
      </Section>
      <Section heading="">
        <div class="skills-container">
          <Skill
            title="Front end"
            subtitle="HTML, CSS, React, NextJS"
            image="/images/react.svg"
          />
          <Skill
            title="Back end"
            subtitle="Node, Express, Databases"
            image="/images/node.svg"
          />
          <Skill
            title="Everything else"
            subtitle="REST, GraphQL, Docker, Git, Testing"
            image="/images/docker.svg"
          />
        </div>
        <MainLink href="/resume">View more skills on my resume</MainLink>
      </Section>
      <Section heading="">
        <div class="contact-container">
          <Heading>Contact Me</Heading>
          <Text>
            I'm currently looking for full time opportunities and my inbox is
            always open. Sending an email is the best way to get in touch.
          </Text>
          <Button href="#">Send me an email</Button>
        </div>
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
