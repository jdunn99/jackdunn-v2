import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import {
  featuredProjects,
  ProjectCard,
} from "../components/project-card/project-card";
import { Layout } from "../components/layout/layout";
import styles from "./index.css?inline";
import type { Post } from "~/components/posts/posts";
import { RecentPost } from "~/components/posts/posts";
import { GithubIcon, LinkedinIcon, MailIcon } from "qwik-feather-icons";
import { NavItem } from "~/components/navbar/navbar";

interface SectionProps {
  heading: string;
}

const tempPost: Post = {
  title: "Test",
  description: "This is a test post",
  slug: "1",
  published: "Jan 20, 2022",
};

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
    <Layout>
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
        <div class="contact">
          <p class="accent" style="font-size: 14px; font-weight: bold;">
            Contact Me
          </p>
          <ul>
            <li>
              <MailIcon class="icon-link" />
            </li>
            <li>
              <a
                href="https://github.com/jdunn99"
                class="icon-link"
                target="_blank"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" target="_blank" class="icon-link">
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </div>
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
      <footer>
        <div class="flex">
          <a
            href="https://github.com/jdunn99"
            class="icon-link"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <a
            href="https://github.com/jdunn99"
            class="icon-link"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
        </div>
        <div class="flex">
          <NavItem href="contact">Contact</NavItem>
          <NavItem href="projects">Projects</NavItem>
          <NavItem href="blog">Blog</NavItem>
          <NavItem href="resume">Resume</NavItem>{" "}
        </div>
      </footer>
    </Layout>
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
