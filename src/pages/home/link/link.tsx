import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { Animated } from "~/components/animated";
import styles from "./link.scss?inline";

interface LinkProps {
  href: string;
}

export const HomeLink = component$(({ href }: LinkProps) => {
  useStyles$(styles);

  return (
    <Animated time="1s">
      <div class="centered">
        <a href={href} class="link">
          <Slot />
        </a>
      </div>
    </Animated>
  );
});
