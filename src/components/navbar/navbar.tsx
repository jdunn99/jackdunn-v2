import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { Flex } from "../flex";
import { Text } from "../fonts/fonts";
import styles from "./navbar.scss?inline";

interface NavItemProps {
  href: string;
}

export const NavItem = component$(({ href }: NavItemProps) => {
  useStylesScoped$(styles);

  return (
    <li>
      <Text variant="small">
        <a href={href} class="icon-link">
          <Slot />
        </a>
      </Text>
    </li>
  );
});

export const Navbar = component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <nav>
        <a href="/" class="logo">
          Jack Dunn
        </a>

        <Flex align="center" gap="1rem">
          <NavItem href="/contact">Contact</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/resume.pdf">Resume</NavItem>
        </Flex>
      </nav>
    </header>
  );
});
