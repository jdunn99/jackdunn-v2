import {
  component$,
  useStyles$,
  useStylesScoped$,
} from "@builder.io/qwik";
import type { Project } from "~/assets/static/projects";
import { featuredProjects, ProjectImage } from "~/assets/static/projects";
import { Animated } from "~/components/animated";
import { Button } from "~/components/button";
import { Heading, Text } from "~/components/fonts/fonts";
import { Link } from "~/components/link";
import { HomeLink } from "../link/link";
import styles from "./project.scss?inline";

interface ProjectProps {
  project: Project;
}

interface ImageProps {
  image: ProjectImage;
}

interface ProjectButtonProps {
  codeUrl?: string;
  demoUrl?: string;
}

const ProjectButtons = component$(
  ({ codeUrl, demoUrl }: ProjectButtonProps) => {
    useStyles$(styles);

    return (
      <div class="buttons">
        {typeof demoUrl !== "undefined" ? (
          <Button href={demoUrl}>Demo</Button>
        ) : null}
        {typeof codeUrl !== "undefined" ? (
          <Button href={codeUrl} outlined>
            Code
          </Button>
        ) : null}
      </div>
    );
  }
);

const ProjectImage = component$(({ image }: ImageProps) => {
  useStyles$(styles);

  return (
    <div
      class={`projects-images`}
      style={`grid-template-columns: ${
        image.large.children ? "1fr 1fr" : "1fr"
      }`}
    >
      <Animated time="1s">
        <img src={image.large.main} />
      </Animated>
      {image.large.children ? (
        <div>
          {image.large.children.map((image: string, index) => (
            <Animated time={`${index + 0.5}s`} key={image}>
              <img src={image}  />
            </Animated>
          ))}
        </div>
      ) : null}
    </div>
  );
});

const ProjectContainer = component$(({ project }: ProjectProps) => {
  const { name, technologies, slug, description, image } = project;

  return (
    <div class="projects-container">
      <div class="projects-content">
        <Animated>
          <div>
            <Heading variant="small">Featured Project</Heading>
            <Link href={slug}><Heading>{name}</Heading></Link>
          </div>
        </Animated>

        <Animated>
          <Text>{description}</Text>
        </Animated>
        <Animated>
          <ProjectButtons codeUrl={project.codeUrl} demoUrl={project.demoUrl} />
        </Animated>
        <Animated>
          <div class="projects-technologies">
            {technologies.map((technology, index) => (
              <span key={index}>{technology}</span>
            ))}
          </div>
        </Animated>
        <Animated>
        <Text>
          <Link href={slug}>Read more →       </Link>
          </Text>
        </Animated>
      </div>
      <ProjectImage image={image} />
    </div>
  );
});

export const HomeProjects = component$(() => {
  useStylesScoped$(styles);

  return (
    <section class="projects">
      {featuredProjects.map((project) => (
        <ProjectContainer project={project} />
      ))}
      <HomeLink href="/projects">View all my projects</HomeLink>
    </section>
  );
});
