import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./navbar.css?inline";

interface NavItemProps {
  href: string;
}

export const NavItem = component$(({ href }: NavItemProps) => {
  useStylesScoped$(styles);

  return (
    <li>
      <Link href={href} class="icon-link">
        <Slot />{" "}
      </Link>
    </li>
  );
});

export const Navbar = component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <nav>
            <Link href="/" class="logo">JD</Link>
          
        <ul>
          <NavItem href="contact">Contact</NavItem>
          <NavItem href="projects">Projects</NavItem>
          <NavItem href="blog">Blog</NavItem>
          <NavItem href="resume">Resume</NavItem>
        </ul>
      </nav>
    </header>
  );
});
