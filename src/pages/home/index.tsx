// Define the HomePage component and anything else that doesn't rely on any props.
import { component$, useStyles$ } from "@builder.io/qwik";
import { GithubIcon, LinkedinIcon, MailIcon } from "qwik-feather-icons";
import { Heading, Text } from "~/components/fonts/fonts";
import { Link } from "~/components/link";
import styles from "./index.scss?inline";
import { HomePosts } from "./post/post";
import { HomeProjects } from "./project/project";
import { Skills } from "./skill/skill";

const Hero = () => (
  <section class="hero">
    <div class="content">
      <Heading variant="large">
        Full Stack Developer Seeking Full-Time Position
      </Heading>
      <Text style="max-width: 1000px;">
        Specializing in React and Node.js, I build innovative web applications
        that cater to your unique needs. Currently working part time on the{" "}
        <span class="accent">
          <a href="https://slotfocus.com" target="_blank">
            Slotfocus
          </a>
        </span>{" "}
        web app - a data analytics tool for casinos.
      </Text>
    </div>
  </section>
);

const Contact = () => (
  <section class="contact">
    <div class="content">
      <Heading variant="small">Get in touch</Heading>
      <div class="links">
        <Link href="mailto:jackmdunn34@gmail.com">
          <MailIcon class="icon-link" />
        </Link>
        <Link href="https://github.com/jdunn99">
          <GithubIcon />
        </Link>
        <Link href="https://github.com/jdunn99">
          <LinkedinIcon />
        </Link>
      </div>
    </div>
  </section>
);

export const HomePage = component$(() => {
  useStyles$(styles);

  return (
    <div class="content">
      <Hero />
      <Contact />
      <HomeProjects />
      <HomePosts />
      <Skills />
    </div>
  );
});
