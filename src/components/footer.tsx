import { component$ } from "@builder.io/qwik";
import { GithubIcon, LinkedinIcon } from "qwik-feather-icons";
import { Flex } from "./flex";
import { Link } from "./link";
import { NavItem } from "./navbar/navbar";

export const Footer = component$(() => {
  return (
    <footer style="padding-top: 4rem">
      <Flex align="center" justify="center" direction="column">
        <Flex align="center" direction="row" gap="1rem">
          <Link href="https://github.com/jdunn99">
            <GithubIcon />
          </Link>
          <Link href="https://github.com/jdunn99">
            <LinkedinIcon />
          </Link>
        </Flex>
        <Flex align="center" direction="row" gap="1rem">
          <NavItem href="/contact">Contact</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/resume">Resume</NavItem>
        </Flex>
      </Flex>
    </footer>
  );
});
