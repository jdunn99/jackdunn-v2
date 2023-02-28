import {
  component$,
  Slot,
  useBrowserVisibleTask$,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import styles from "./link.scss?inline";

interface LinkProps {
  href: string;
}

export const HomeLink = component$(({ href }: LinkProps) => {
  useStyles$(styles);
  const visible = useSignal("hidden");

  useBrowserVisibleTask$(() => {
    visible.value = "shown";
  });

  return (
    <div class={`${visible.value} centered`}>
      <a href={href} class="link">
        <Slot />
      </a>
    </div>
  );
});
