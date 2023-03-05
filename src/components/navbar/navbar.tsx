import {
  component$,
  Slot,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import { MenuIcon, XIcon } from "qwik-feather-icons";
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

export const NavSmall = component$(() => {
  useStylesScoped$(styles);

  const open = useSignal(false);

  return (
    <>
      {open.value ? (
        <div class="menu-container">
          <div class="menu">
            <button class="links-button" onClick$={() => (open.value = false)}>
              <XIcon />
            </button>
            <div class="menu-content">
              <a href="/" class="logo">
                Jack Dunn
              </a>
              <NavItem href="mailto:jackmdunn34@gmail.com">Contact</NavItem>
              <NavItem href="/projects">Projects</NavItem>
              <NavItem href="/posts">Blog</NavItem>
              <NavItem href="/resume.pdf">Resume</NavItem>
            </div>
          </div>
        </div>
      ) : null}
      <header class="small">
        <nav>
          <a href="/" class="logo">
            Jack Dunn
          </a>
          <button class="links-button" onClick$={() => (open.value = true)}>
            <MenuIcon />
          </button>
        </nav>
      </header>
    </>
  );
});

export const Navbar = component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="large">
      <nav>
        <a href="/" class="logo">
          Jack Dunn
        </a>

        <div class="links-large">
          <NavItem href="mailto:jackmdunn34@gmail.com">Contact</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/posts">Posts</NavItem>
          <NavItem href="/resume.pdf">Resume</NavItem>
        </div>
      </nav>
    </header>
  );
});
