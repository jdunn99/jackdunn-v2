import {
  component$,
  useBrowserVisibleTask$,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import { Text } from "~/components/fonts/fonts";
import { HomeLink } from "../link/link";
import styles from "./skill.scss?inline";

interface SkillProps {
  image: string;
  title: string;
  subtitle: string;
}

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
export const Skills = component$(() => {
  return (
    <section>
      <div class="skills">
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
      <HomeLink href="/resume.pdf">View more skills on my resume</HomeLink>
    </section>
  );
});
