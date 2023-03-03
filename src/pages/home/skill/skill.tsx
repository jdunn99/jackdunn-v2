import {
  component$,
  useStyles$,
} from "@builder.io/qwik";
import { Animated } from "~/components/animated";
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
 
  return (
    <div class="item">
    <Animated time="1s">
      <img src={image} />
      </Animated>
      <Animated time="1.5s">
      <div>
        <Text class="heading">{title}</Text>
        <Text variant="small">{subtitle}</Text>
      </div>
      </Animated>
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
