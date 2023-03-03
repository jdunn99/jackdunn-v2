// Define the HomePage component and anything else that doesn't rely on any props.
import { component$, useStyles$ } from "@builder.io/qwik";
import { GithubIcon, LinkedinIcon, MailIcon } from "qwik-feather-icons";
import { Animated } from "~/components/animated";
import { Button } from "~/components/button";
import { Heading, Text } from "~/components/fonts/fonts";
import { Link } from "~/components/link";
import styles from "./index.scss?inline";
import { HomePosts } from "./post/post";
import { HomeProjects } from "./project/project";
import { Skills } from "./skill/skill";

const Hero = () => (
  <section class="hero">
    <Animated>
      <div class="content">
        <Animated time="1s">
          <Heading variant="large">
            Full Stack Developer Seeking Full-Time Position
          </Heading>
        </Animated>
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
    </Animated>
  </section>
);

const Contact = () => (
  <section class="contact">
    <Animated>
      <div class="content">
        <Heading variant="small">Get in touch</Heading>
        <Animated time="2s">
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
        </Animated>
      </div>
    </Animated>
  </section>
);

const EmailSection = () => (
  <section class="email-contact">
    <Animated>
      <Heading>Contact Me</Heading>
    </Animated>
    <Animated time="1s">
      <Text>
        I'm currently looking for full time opportunities and my inbox is always
        open. Sending an email is the best way to get in touch.
      </Text>
    </Animated>
    <Animated time="2s">
      <Button href="mailto:jackmdunn34@gmail.com">Send me an email</Button>
    </Animated>
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
      <EmailSection />
    </div>
  );
});
