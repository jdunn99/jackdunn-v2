import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Flex } from "../flex";
import styles from "./navbar.css?inline";

interface NavItemProps {
  href: string;
}

export const NavItem = component$(({ href }: NavItemProps) => {
  useStylesScoped$(styles);

  return (
    <li>
      <a href={href} class="icon-link">
        <Slot />
      </a>
    </li>
  );
});

export const Navbar = component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <nav>
          <a href="/" class="logo" f>
          JD
        </a>

        <Flex align="center" gap="1rem">
          <NavItem href="/contact">Contact</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/resume">Resume</NavItem>
        </Flex>
      </nav>
    </header>
  );
});
