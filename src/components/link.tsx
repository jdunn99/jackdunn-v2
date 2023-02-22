import { component$, Slot } from "@builder.io/qwik";
import { Link as QwikLink } from "@builder.io/qwik-city";

interface LinkProps {
  href?: string;
}

export const Link = component$(({ href }: LinkProps) => {
  return (
    <QwikLink href={href} target="_blank" class="icon-link">
      <Slot />
    </QwikLink>
  );
});
