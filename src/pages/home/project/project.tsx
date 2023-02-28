import {
  component$,
  useBrowserVisibleTask$,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import type { Project, ProjectImage } from "~/assets/static/projects";
import { featuredProjects } from "~/assets/static/projects";
import { Button } from "~/components/button";
import { Heading, Text } from "~/components/fonts/fonts";
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
const ProjectContainer = component$(({ project }: ProjectProps) => {
  const visible = useSignal("hidden");
  const { name, technologies, description, image } = project;

  useBrowserVisibleTask$(() => {
    visible.value = "shown";
  });

  return (
    <div class={`${visible.value} container `}>
      <div class="content">
        <div>
          <Heading variant="small">Featured Project</Heading>
          <Heading>{name}</Heading>
        </div>

        <Text>{description}</Text>
        <ProjectButtons codeUrl={project.codeUrl} demoUrl={project.demoUrl} />
        <div class="technologies">
          {technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </div>
      </div>
      <ProjectImage image={image} />{" "}
    </div>
  );
});

export const HomeProjects = component$(() => {
  useStyles$(styles);

  return (
    <section class="projects">
      {featuredProjects.map((project) => (
        <ProjectContainer project={project} />
      ))}
      <HomeLink href="/projects">View all my projects</HomeLink>
    </section>
  );
});
